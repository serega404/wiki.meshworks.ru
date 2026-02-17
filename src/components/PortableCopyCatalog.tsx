import React, { type ReactNode } from 'react';

type DeviceTech = 'NRF' | 'ESP';

type DeviceBadge = {
  label: string;
  off?: boolean;
};

type Device = {
  title: string;
  image: string;
  alt: string;
  badges: DeviceBadge[];
  description: ReactNode;
  price: string;
  href: string;
  tech: DeviceTech;
  popular?: boolean;
};

const UNIVERSAL_DEVICES: Device[] = [
  {
    title: 'ThinkNode M1',
    image: '/img/wiki/thinknode-m1.png',
    alt: 'ThinkNode M1',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ❌', off: true }, { label: 'GPS ✅' }],
    description: (
      <>
        Низкое энергопотребление и дисплей <strong>E-Ink</strong>, который отлично читается на солнце и экономит батарею.
        Подходит для портативных узлов, выездных ретрансляторов и походной навигации.
      </>
    ),
    price: '≈ 5 800 ₽',
    href: 'https://trk.ppdu.ru/click/1n1oBoWn?erid=2SDnjcM2X3K&sub1=wki&tl=https://aliexpress.ru/item/1005008707258616.html?sku_id=12000046332206215',
    tech: 'NRF',
  },
  {
    title: 'SenseCAP T1000-E',
    image: '/img/wiki/sensecap-t1000e.png',
    alt: 'SenseCAP T1000-E',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ❌', off: true }, { label: 'GPS ✅' }],
    description: (
      <>
        Компактное устройство на <strong>nRF52840</strong> с интегрированным GPS и высокой автономностью.
        Хороший вариант для мобильных ретрансляторов, трекинга и длительного полевого использования.
      </>
    ),
    price: '≈ 4 500 ₽',
    href: 'https://trk.ppdu.ru/click/1n1oBoWn?erid=2SDnjcM2X3K&sub1=wki&tl=https://aliexpress.ru/item/1005008285553299.html?sku_id=12000044479856418',
    tech: 'NRF',
  },
  {
    title: 'Heltec MeshPocket',
    image: '/img/wiki/heltec-meshpocket.png',
    alt: 'Heltec MeshPocket',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ❌', off: true }, { label: 'GPS ❌', off: true }],
    description: (
      <>
        Готовое решение с <strong>E-Ink</strong> дисплеем, магнитной зарядкой и встроенным павербанком (в зависимости от комплектации).
        Удобно как повседневная портативная нода «из коробки».
      </>
    ),
    price: '≈ 7 000 ₽',
    href: 'https://trk.ppdu.ru/click/1n1oBoWn?erid=2SDnjcM2X3K&sub1=wki&tl=https://aliexpress.ru/item/1005009843602899.html',
    tech: 'NRF',
  },
  {
    title: 'LILYGO TTGO T-Echo',
    image: '/img/wiki/lilygo-ttgo-t-echo.png',
    alt: 'LILYGO TTGO T-Echo',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ❌', off: true }, { label: 'GPS ✅' }],
    description: (
      <>
        Портативное устройство на nRF52840 с <strong>E-Ink</strong> и GPS для автономной работы.
        Часто выбирают для походов, трекинга и длительных выездов без частой подзарядки.
      </>
    ),
    price: '≈ 5 000 ₽',
    href: 'https://trk.ppdu.ru/click/1n1oBoWn?erid=2SDnjcM2X3K&sub1=wki&tl=https://aliexpress.ru/item/1005003026107533.html?sku_id=12000037263598503',
    tech: 'NRF',
  },
  {
    title: 'Wio Tracker L1 Pro',
    image: '/img/wiki/wio-tracker-l1-pro.png',
    alt: 'Wio Tracker L1 Pro',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ❌', off: true }, { label: 'GPS ✅' }],
    description: (
      <>
        Готовая нода с GPS в компактном корпусе, ориентированная на мобильные и автономные сценарии.
        Подходит для выездных станций, навигации и трекинга.
      </>
    ),
    price: '≈ 6 000 ₽',
    href: 'https://trk.ppdu.ru/click/1n1oBoWn?erid=2SDnjcM2X3K&sub1=wki&tl=https://aliexpress.ru/item/1005009183237292.html?sku_id=12000052906680614',
    tech: 'NRF',
  },
  {
    title: 'LILYGO T-Deck Plus',
    image: '/img/wiki/lilygo-t-deck-plus.png',
    alt: 'LILYGO T-Deck Plus',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ✅' }, { label: 'GPS ✅' }],
    description: (
      <>
        Мощное устройство на <strong>ESP32-S3</strong> с цветным экраном и клавиатурой для локального управления.
        Функционально и удобно в поле, но потребляет больше энергии, чем nRF-решения.
      </>
    ),
    price: '≈ 8 000 ₽',
    href: 'https://trk.ppdu.ru/click/1n1oBoWn?erid=2SDnjcM2X3K&sub1=wki&tl=https://aliexpress.ru/item/1005009074862574.html?sku_id=12000047823707772',
    tech: 'ESP',
  },
  {
    title: 'T-LoRa Pager',
    image: '/img/wiki/t-lora-pager.png',
    alt: 'T-LoRa Pager',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ✅' }, { label: 'GPS ✅' }],
    description: (
      <>
        Компактный пейджер-формат для обмена сообщениями в Meshtastic.
        Удобен для повседневного ношения, локальных тестов и личной связи.
      </>
    ),
    price: '≈ 8 000 ₽',
    href: 'https://trk.ppdu.ru/click/1n1oBoWn?erid=2SDnjcM2X3K&sub1=wki&tl=https://aliexpress.ru/item/1005010626680107.html',
    tech: 'ESP',
  },
  {
    title: 'Meshtiny Mini Pocket',
    image: '/img/wiki/meshtiny-mini-pocket.png',
    alt: 'Meshtiny Meshtastic Mini Pocket',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ❌', off: true }, { label: 'GPS ❌', off: true }],
    description: (
      <>
        Ультракомпактная карманная нода на nRF52 + SX1262 для повседневного использования.
        Небольшой размер и хорошая автономность делают её удобной как «личный клиент» Meshtastic.
      </>
    ),
    price: '≈ 5 500 ₽',
    href: 'https://trk.ppdu.ru/click/1n1oBoWn?erid=2SDnjcM2X3K&sub1=wki&tl=https://aliexpress.ru/item/1005010115422665.html?sku_id=12000051474859170',
    tech: 'NRF',
  },
  {
    title: 'ThinkNode M1 (868 MHz)',
    image: '/img/wiki/thinknode-m1.png',
    alt: 'ThinkNode M1 (868 MHz)',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ❌', off: true }, { label: 'GPS ✅' }],
    description: (
      <>
        Версия под 868 MHz — основной диапазон Meshtastic для России.
        Удобный выбор, если нужен совместимый и энергоэффективный портативный узел.
      </>
    ),
    price: '≈ 5 800 ₽',
    href: 'https://trk.ppdu.ru/click/1n1oBoWn?erid=2SDnjcM2X3K&sub1=wki&tl=https://aliexpress.ru/item/1005008707258616.html?sku_id=12000046332206215',
    tech: 'NRF',
  },
  {
    title: 'TTGO T-Echo (походный вариант)',
    image: '/img/wiki/lilygo-ttgo-t-echo.png',
    alt: 'LILYGO TTGO T-Echo (лучший походный)',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ❌', off: true }, { label: 'GPS ✅' }],
    description: (
      <>
        Походный вариант T-Echo с E-Ink и GPS для стабильной автономной работы.
        Практичный форм-фактор для выездных сценариев и навигации.
      </>
    ),
    price: '≈ 5 000 ₽',
    href: 'https://trk.ppdu.ru/click/1n1oBoWn?erid=2SDnjcM2X3K&sub1=wki&tl=https://aliexpress.ru/item/1005003026107533.html?sku_id=12000037263598503',
    tech: 'NRF',
  },
];

const SOLAR_DEVICES: Device[] = [
  {
    title: 'D5 Mini Solar Kit (Heltec V3)',
    image: '/img/wiki/d5-mini-solar-kit.png',
    alt: 'D5 Mini Solar Kit',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ✅' }, { label: 'GPS ❌', off: true }],
    description: (
      <>
        Автономный солнечный комплект на базе Heltec V3 для стационарных и удалённых точек сети.
        Хорошо подходит для ретрансляторов, сенсорных узлов и длительной уличной установки.
      </>
    ),
    price: '≈ 6 000 ₽',
    href: 'https://trk.ppdu.ru/click/i33IoX8q?erid=2SDnjcM2X3K&tl=https://aliexpress.ru/item/1005008487010403.html?sku_id=12000045362595840',
    tech: 'ESP',
  },
  {
    title: 'SenseCAP Solar Node',
    image: '/img/wiki/sensecap-solar-node.png',
    alt: 'SenseCAP Solar Node',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ❌', off: true }, { label: 'GPS ❌', off: true }],
    description: (
      <>
        Готовая солнечная нода от Seeed Studio для длительной автономной работы на улице.
        Прочный форм-фактор и низкое энергопотребление подходят для удалённых стационарных узлов.
      </>
    ),
    price: '≈ 7 000 ₽',
    href: 'https://trk.ppdu.ru/click/i33IoX8q?erid=2SDnjcM2X3K&tl=https://aliexpress.ru/item/1005008917538805.html?sku_id=12000051717147886',
    tech: 'NRF',
  },
];

const BOARDS_DEVICES: Device[] = [
  {
    title: 'Heltec WiFi LoRa 32 (V3)',
    image: '/img/wiki/heltec-wifi-lora32-v3.png',
    alt: 'Heltec WiFi LoRa 32 V3',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ✅' }, { label: 'GPS ❌', off: true }],
    description: (
      <>
        Популярная ESP-плата на ESP32-S3 с OLED и SX1262, компактная и стабильная.
        Часто используется в сенсорных, экспериментальных и стационарных DIY-нодах.
      </>
    ),
    price: '≈ 1 500 ₽',
    href: 'https://trk.ppdu.ru/click/i33IoX8q?erid=2SDnjcM2X3K&tl=https://aliexpress.ru/item/1005007752194012.html',
    tech: 'ESP',
    popular: true,
  },
  {
    title: 'Heltec V4 / Heltec Wireless Stick Lite V4',
    image: '/img/wiki/heltec-wireless-stick-lite-v4.png',
    alt: 'Heltec Wireless Stick Lite V4',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ✅' }, { label: 'GPS ❌', off: true }],
    description: (
      <>
        Новое поколение Heltec на ESP32-S3 с SX1262 и улучшенной схемотехникой.
        Подходит для автономных узлов, ретрансляторов и компактных DIY-сборок.
      </>
    ),
    price: '≈ 2 000 ₽',
    href: 'https://trk.ppdu.ru/click/i33IoX8q?erid=2SDnjcM2X3K&tl=https://aliexpress.ru/item/1005010134873366.html?sku_id=12000051267466381',
    tech: 'ESP',
    popular: true,
  },
  {
    title: 'Heltec V4 + Case',
    image: '/img/wiki/heltec-v4-case.png',
    alt: 'Heltec V4 with Case',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ✅' }, { label: 'GPS ❌', off: true }],
    description: (
      <>
        Комплект Heltec V4 с корпусом для быстрой сборки компактной ESP-ноды.
        Удобный вариант, если нужна готовая «коробка» с минимальной доработкой.
      </>
    ),
    price: '≈ 3 000 ₽',
    href: 'https://trk.ppdu.ru/click/i33IoX8q?erid=2SDnjcM2X3K&tl=https://aliexpress.ru/item/1005010017665425.html',
    tech: 'ESP',
  },
  {
    title: 'Heltec T114',
    image: '/img/wiki/heltec-t114.png',
    alt: 'Heltec T114',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ❌', off: true }, { label: 'GPS ✅' }],
    description: (
      <>
        nRF-плата с TFT 1.14″ и GPS (в версиях с GPS) для портативных автономных сборок.
        Часто выбирают как энергоэффективную основу для походных устройств.
      </>
    ),
    price: '≈ 3 300 ₽',
    href: 'https://trk.ppdu.ru/click/i33IoX8q?erid=2SDnjcM2X3K&tl=https://aliexpress.ru/item/1005009187736693.html?sku_id=12000050903276936',
    tech: 'NRF',
  },
  {
    title: 'Heltec T114 Naked',
    image: '/img/wiki/heltec-t114-naked.png',
    alt: 'Heltec T114 Naked',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ❌', off: true }, { label: 'GPS ❌', off: true }],
    description: (
      <>
        Упрощенная версия T114 без корпуса и GPS для более бюджетной сборки.
        Подходит для проектов, где важны цена и автономность nRF-платформы.
      </>
    ),
    price: '≈ 2 200 ₽',
    href: 'https://trk.ppdu.ru/click/i33IoX8q?erid=2SDnjcM2X3K&tl=https://aliexpress.ru/item/1005009187736693.html',
    tech: 'NRF',
  },
  {
    title: 'Wio Tracker L1 E-ink',
    image: '/img/wiki/wio-tracker-l1-eink.png',
    alt: 'Wio Tracker L1 E-ink',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ❌', off: true }, { label: 'GPS ✅' }],
    description: (
      <>
        Плата на nRF с E-Ink и GPS для мобильных и походных сценариев.
        Сочетает хорошую автономность, компактность и удобство чтения на солнце.
      </>
    ),
    price: '≈ 3 900 ₽',
    href: 'https://trk.ppdu.ru/click/i33IoX8q?erid=2SDnjcM2X3K&tl=https://aliexpress.ru/item/1005009761846970.html',
    tech: 'NRF',
  },
  {
    title: 'LILYGO TTGO T-Beam',
    image: '/img/wiki/lilygo-ttgo-t-beam.png',
    alt: 'LILYGO TTGO T-Beam',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ✅' }, { label: 'GPS ✅' }],
    description: (
      <>
        Классическая ESP-плата со встроенным GPS и питанием от 18650.
        Удобна для полевых узлов, автомобильных станций и тестов с полной автономностью.
      </>
    ),
    price: '≈ 3 500 ₽',
    href: 'https://trk.ppdu.ru/click/i33IoX8q?erid=2SDnjcM2X3K&tl=https://aliexpress.ru/item/1005005854982382.html',
    tech: 'ESP',
  },
  {
    title: 'Heltec Wireless Stick Lite / Mesh Nod',
    image: '/img/wiki/heltec-wireless-stick-lite.png',
    alt: 'Heltec Wireless Stick Lite',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ✅' }, { label: 'GPS ❌', off: true }],
    description: (
      <>
        Упрощенная ESP-плата без GPS/дисплея для сенсорных станций и ретрансляторов.
        Простая интеграция и компактный размер делают её удобной для стационарных сборок.
      </>
    ),
    price: '≈ 1 300 ₽',
    href: 'https://trk.ppdu.ru/click/i33IoX8q?erid=2SDnjcM2X3K&tl=https://aliexpress.ru/item/1005005443311259.html',
    tech: 'ESP',
  },
  {
    title: 'Heltec LoRa Wireless Paper',
    image: '/img/wiki/heltec-wireless-paper.png',
    alt: 'Heltec LoRa Wireless Paper',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ✅' }, { label: 'GPS ❌', off: true }],
    description: (
      <>
        ESP-плата с E-Ink 2.9″ и SX1262 для автономных компактных нод.
        Подходит, когда нужен дисплей с отличной читаемостью и умеренным энергопотреблением.
      </>
    ),
    price: '≈ 1 500 ₽',
    href: 'https://trk.ppdu.ru/click/i33IoX8q?erid=2SDnjcM2X3K&tl=https://aliexpress.ru/item/1005007747207784.html?sku_id=12000042077885822',
    tech: 'ESP',
  },
  {
    title: 'Heltec Stick /GPS',
    image: '/img/wiki/heltec-stick-gps.png',
    alt: 'Heltec Stick GPS',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ✅' }, { label: 'GPS ✅' }],
    description: (
      <>
        ESP-версия Heltec Stick со встроенным GPS для мобильных и тестовых сценариев.
        Хороший компромисс между компактностью, функциональностью и стоимостью.
      </>
    ),
    price: '≈ 1 800 ₽',
    href: 'https://trk.ppdu.ru/click/i33IoX8q?erid=2SDnjcM2X3K&tl=https://aliexpress.ru/item/1005009295030670.html?sku_id=12000050554954565',
    tech: 'ESP',
  },
  {
    title: 'LoRa 32 LILYGO / LILYGO T3 S3',
    image: '/img/wiki/lilygo-lora32-t3.png',
    alt: 'LoRa 32 LILYGO T3 S3',
    badges: [{ label: 'Bluetooth ✅' }, { label: 'Wi-Fi ✅' }, { label: 'GPS ❌', off: true }],
    description: (
      <>
        Компактная ESP-плата с OLED и LoRa, проверенная в DIY-проектах.
        Подходит для переносных и стационарных узлов, сенсорных станций и выездных стендов.
      </>
    ),
    price: '≈ 2 000 ₽',
    href: 'https://trk.ppdu.ru/click/i33IoX8q?erid=2SDnjcM2X3K&tl=https://aliexpress.ru/item/1005004627139838.html',
    tech: 'ESP',
  },
];

function renderDeviceCard(device: Device) {
  const techClass = device.tech === 'NRF' ? 'deviceTechNRF' : 'deviceTechESP';
  const cardClasses = ['deviceCardRT', techClass, device.popular ? 'deviceCardPopularRT' : ''].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} key={`${device.title}-${device.href}`}>
      <div className="deviceImageRT">
        <img src={device.image} alt={device.alt} />
      </div>

      <div className="deviceBodyRT">
        <h3 className="deviceTitleRT">{device.title}</h3>
        <div className="deviceSpecsRT">
          <span className="badgeRT">{`Чип: ${device.tech}`}</span>
          {device.badges.map((badge) => (
            <span className={`badgeRT${badge.off ? ' badgeOffRT' : ''}`} key={`${device.title}-${badge.label}`}>
              {badge.label}
            </span>
          ))}
        </div>
        <p className="deviceDescRT">{device.description}</p>
        <div className="deviceFooterRT">
          <div className="priceRT">{device.price}</div>
        </div>
      </div>

      <a className="ctaRT" href={device.href} target="_blank" rel="noopener noreferrer">
        ЗАКАЗАТЬ НА ALIEXPRESS
      </a>
    </div>
  );
}

export default function PortableCopyCatalog(): ReactNode {
  return (
    <div className="deviceFilterTabsRT">
      <p className="deviceHeroIntroRT">
        <span className="deviceHeroLineRT">Здесь вы можете подобрать ноду под свои задачи.</span>
        <span className="deviceHeroLineRT">От бюджетных плат без корпуса до полноразмерных нод с клавиатурой и цветным дисплеем.</span>
        <span className="deviceHeroLineRT">Фильтры позволяют выбрать тип ноды и тип чипа.</span>
      </p>
      <div className="deviceHeroDividerRT" />
      <input className="deviceFilterInputRT" type="checkbox" id="filter-universal" />
      <input className="deviceFilterInputRT" type="checkbox" id="filter-solar" />
      <input className="deviceFilterInputRT" type="checkbox" id="filter-boards" />
      <input className="deviceFilterInputRT" type="checkbox" id="filter-nrf" />
      <input className="deviceFilterInputRT" type="checkbox" id="filter-esp" />

      <div className="deviceFilterRowRT">
        <div className="deviceFilterGroupLabelRT">Тип</div>
        <label className="deviceFilterHintRT deviceFilterHintUniversalRT" htmlFor="filter-universal">
          <div className="deviceFilterHintTitleRT">🧭 Универсальные</div>
          <div className="deviceFilterHintTextRT">Портативные ноды для повседневных сценариев и походов.</div>
        </label>
        <label className="deviceFilterHintRT deviceFilterHintSolarRT" htmlFor="filter-solar">
          <div className="deviceFilterHintTitleRT">☀️ Солнечные</div>
          <div className="deviceFilterHintTextRT">Автономные комплекты для стационарных и удалённых узлов.</div>
        </label>
        <label className="deviceFilterHintRT deviceFilterHintBoardsRT" htmlFor="filter-boards">
          <div className="deviceFilterHintTitleRT">🧩 Платы</div>
          <div className="deviceFilterHintTextRT">DIY-платы и проекты для самостоятельной сборки нод.</div>
        </label>
        <div className="deviceFilterRowSepRT" />
        <div className="deviceFilterGroupLabelRT">Чип</div>
        <label className="deviceFilterHintRT deviceFilterHintNRFRT" htmlFor="filter-nrf">
          <div className="deviceFilterHintTitleRT">🟢 NRF</div>
          <div className="deviceFilterHintTextRT">Меньше мощности, зато дольше работает от батареи.</div>
        </label>
        <label className="deviceFilterHintRT deviceFilterHintESPRT" htmlFor="filter-esp">
          <div className="deviceFilterHintTitleRT">⚡ ESP</div>
          <div className="deviceFilterHintTextRT">Больше производительность и функций, но выше расход энергии.</div>
        </label>
      </div>

      <aside className="deviceSideHelpRT">
        <p className="deviceSideHelpTitleRT">Что означают фильтры</p>
        <ul className="deviceSideHelpListRT">
          <li>
            <strong>🧭 Универсальные</strong> - готовые переносные ноды.
          </li>
          <li>
            <strong>☀️ Солнечные</strong> - автономные комплекты для стационара.
          </li>
          <li>
            <strong>🧩 Платы</strong> - DIY-платы для самостоятельной сборки.
          </li>
        </ul>
        <div className="deviceSideHelpSepRT" />
        <p className="deviceSideHelpSubTitleRT">Чип-платформы</p>
        <ul className="deviceSideHelpListRT">
          <li>
            <strong>🟢 NRF</strong> - ниже мощность, выше автономность, лучше для батарейных узлов.
          </li>
          <li>
            <strong>⚡ ESP</strong> - выше производительность и функции, но быстрее расходует батарею.
          </li>
        </ul>
      </aside>

      <div className="devicePanelRT devicePanelUniversalRT">{UNIVERSAL_DEVICES.map(renderDeviceCard)}</div>
      <div className="devicePanelRT devicePanelSolarRT">{SOLAR_DEVICES.map(renderDeviceCard)}</div>
      <div className="devicePanelRT devicePanelBoardsRT">{BOARDS_DEVICES.map(renderDeviceCard)}</div>
    </div>
  );
}
