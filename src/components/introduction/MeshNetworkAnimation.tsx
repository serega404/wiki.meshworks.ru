import React, { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './MeshNetworkAnimation.module.css';

type NodeId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

type Node = {
  id: NodeId;
  label: string;
  x: number;
  y: number;
};

type Step = {
  title: string;
  subtitle: string;
  offline?: NodeId[];
  showF?: boolean;
  path: NodeId[];
};

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

function polylinePoint(points: Array<{ x: number; y: number }>, t: number): { x: number; y: number } {
  if (points.length === 0) return { x: 0, y: 0 };
  if (points.length === 1) return points[0];

  const segLens: number[] = [];
  let total = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const dx = points[i + 1].x - points[i].x;
    const dy = points[i + 1].y - points[i].y;
    const len = Math.hypot(dx, dy);
    segLens.push(len);
    total += len;
  }

  if (total === 0) return points[0];
  let dist = clamp01(t) * total;

  for (let i = 0; i < segLens.length; i++) {
    const segLen = segLens[i];
    if (dist <= segLen) {
      const localT = segLen === 0 ? 0 : dist / segLen;
      return {
        x: lerp(points[i].x, points[i + 1].x, localT),
        y: lerp(points[i].y, points[i + 1].y, localT),
      };
    }
    dist -= segLen;
  }

  return points[points.length - 1];
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!media) return;

    const onChange = () => setReduced(media.matches);
    onChange();

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', onChange);
      return () => media.removeEventListener('change', onChange);
    }

    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  return reduced;
}

export default function MeshNetworkAnimation(props: { className?: string }): React.ReactNode {
  const reducedMotion = usePrefersReducedMotion();
  const [playing, setPlaying] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number | null>(null);

  const nodes: Record<NodeId, Node> = useMemo(
    () => ({
      A: { id: 'A', label: 'Отправитель', x: 110, y: 210 },
      B: { id: 'B', label: 'Получатель', x: 690, y: 130 },
      C: { id: 'C', label: 'Узел', x: 300, y: 110 },
      D: { id: 'D', label: 'Узел', x: 340, y: 270 },
      E: { id: 'E', label: 'Ретранслятор', x: 510, y: 180 },
      F: { id: 'F', label: 'Новый узел', x: 650, y: 290 },
    }),
    [],
  );

  const edges = useMemo(
    () =>
      [
        ['A', 'C'],
        ['A', 'D'],
        ['C', 'E'],
        ['D', 'E'],
        ['E', 'B'],
        ['C', 'B'],
        ['E', 'F'],
      ] as Array<[NodeId, NodeId]>,
    [],
  );

  const steps: Step[] = useMemo(
    () => [
      {
        title: 'Мультихоп',
        subtitle: 'Сообщение идёт через соседние узлы, если прямой связи нет.',
        path: ['A', 'C', 'E', 'B'],
      },
      {
        title: 'Самоорганизация',
        subtitle: 'Если один узел “пропал”, маршрут перестраивается.',
        offline: ['C'],
        path: ['A', 'D', 'E', 'B'],
      },
      {
        title: 'Масштабируемость',
        subtitle: 'Новый узел подключается и становится частью сети.',
        showF: true,
        path: ['F', 'E', 'D', 'A'],
      },
    ],
    [],
  );

  const step = steps[stepIndex] ?? steps[0];
  const offline = new Set<NodeId>(step.offline ?? []);

  const points = useMemo(() => step.path.map((id) => ({ x: nodes[id].x, y: nodes[id].y })), [nodes, step.path]);
  const dot = useMemo(() => polylinePoint(points, progress), [points, progress]);

  useEffect(() => {
    if (reducedMotion || !playing) return;

    const speed = 1 / 2600; // progress per ms (≈2.6s per loop)

    const tick = (now: number) => {
      if (lastRef.current === null) lastRef.current = now;
      const dt = now - lastRef.current;
      lastRef.current = now;

      setProgress((p) => {
        const next = p + dt * speed;
        if (next >= 1) return next - Math.floor(next);
        return next;
      });

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastRef.current = null;
    };
  }, [playing, reducedMotion]);

  useEffect(() => {
    // Stop auto-play if the user prefers reduced motion.
    if (reducedMotion) {
      setPlaying(false);
      setProgress(0);
    }
  }, [reducedMotion]);

  const goNextStep = () => {
    setStepIndex((i) => (i + 1) % steps.length);
    setProgress(0);
  };

  const reset = () => {
    setStepIndex(0);
    setProgress(0);
  };

  if (reducedMotion) {
    return (
      <img
        src="/img/wiki/intro-network-basics.png"
        alt="Схема mesh-сети Meshtastic: сообщение передаётся через промежуточные узлы."
        className={clsx('docImage', props.className)}
      />
    );
  }

  return (
    <div className={clsx(styles.container, 'docImage', props.className)} role="group" aria-label="Анимация: принципы mesh-сети">
      <div className={styles.inner}>
        <span className={styles.srOnly} aria-live="polite">
          {step.title}. {step.subtitle}
        </span>
        <svg className={styles.svg} viewBox="0 0 800 360" aria-hidden="true">
          <defs>
            <linearGradient id="mwEdge" x1="0" x2="1">
              <stop offset="0" stopColor="var(--mesh-accent)" stopOpacity="0.65" />
              <stop offset="1" stopColor="var(--mesh-accent)" stopOpacity="0.1" />
            </linearGradient>
            <filter id="mwGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 0.7 0"
              />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Edges */}
          {edges.map(([a, b]) => {
            if (!step.showF && (a === 'F' || b === 'F')) return null;
            const na = nodes[a];
            const nb = nodes[b];
            const dim = offline.has(a) || offline.has(b);
            return (
              <line
                key={`${a}-${b}`}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke={dim ? 'color-mix(in srgb, var(--ifm-font-color-base) 14%, transparent)' : 'url(#mwEdge)'}
                strokeWidth={3}
                strokeLinecap="round"
                opacity={dim ? 0.35 : 0.9}
              />
            );
          })}

          {/* Highlighted path */}
          <polyline
            points={points.map((p) => `${p.x},${p.y}`).join(' ')}
            fill="none"
            stroke="var(--mesh-accent)"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.65}
          />

          {/* Nodes */}
          {(Object.keys(nodes) as NodeId[]).map((id) => {
            if (!step.showF && id === 'F') return null;
            const n = nodes[id];
            const dim = offline.has(id);
            const isPrimary = id === 'A' || id === 'B' || id === 'E';
            return (
              <g key={id} opacity={dim ? 0.35 : 1}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={isPrimary ? 18 : 14}
                  fill="var(--ifm-background-color)"
                  stroke={isPrimary ? 'var(--mesh-accent)' : 'color-mix(in srgb, var(--ifm-font-color-base) 22%, transparent)'}
                  strokeWidth={isPrimary ? 3 : 2}
                />
                <text
                  x={n.x}
                  y={n.y + (isPrimary ? 38 : 34)}
                  textAnchor="middle"
                  fontSize="13"
                  fill="var(--ifm-font-color-base)"
                  opacity={0.92}
                >
                  {id} — {n.label}
                </text>
              </g>
            );
          })}

          {/* Moving packet */}
          <circle cx={dot.x} cy={dot.y} r={7} fill="var(--mesh-accent)" filter="url(#mwGlow)" />
        </svg>
      </div>

      <div className={styles.controls}>
        <button className={clsx(styles.btn, styles.btnPrimary)} type="button" onClick={() => setPlaying((p) => !p)}>
          {playing ? 'Пауза' : 'Играть'}
        </button>
        <button className={styles.btn} type="button" onClick={goNextStep}>
          Шаг
        </button>
        <button className={styles.btn} type="button" onClick={reset}>
          Сброс
        </button>
        <div className={styles.label}>
          <strong>{step.title}</strong> — {step.subtitle}
        </div>
      </div>
    </div>
  );
}

