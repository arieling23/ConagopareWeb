// Importaciones básicas (obligatorias para Next.js)
import Image from 'next/image'; // Para optimizar imágenes
import Head from 'next/head'; // Para metadatos como el título de la página
import Link from 'next/link'; // Para navegar entre páginas
import Sections from './Inicio/sections';
import Hero from './Inicio/hero';


export default function Home() {
  return (
    <>
      <Head>
        <title>Identidad Rural</title>
        <meta name="description" content="Platform on rural issues in Ecuador" />
      </Head>
      <main >
         <Hero    />        
        <Sections />
      </main>
    </>
  );
}

