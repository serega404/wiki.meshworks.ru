import { HomePageContent } from "@/components/homepage/homepage-content";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React from "react";

import "../css/meshtastic-home.css";

export default function Home() {
  return (
    <Layout
      title="Связь без интернета — MeshWorks Wiki"
      description="MeshWorks Wiki — база знаний о mesh-связи и сетях без интернета: технологии, инструменты, карта сети, устройства и инструкции."
    >
      <Head>
        <meta property="og:title" content="Связь без интернета — MeshWorks Wiki" />
        <meta property="og:image" content="/img/social/wiki-share-1200x630.png" />
        <meta property="og:url" content="https://wiki.meshworks.ru/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <HomePageContent />
    </Layout>
  );
}
