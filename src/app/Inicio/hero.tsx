"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[100vh] -mt-16 flex flex-col justify-center items-center text-center text-white overflow-hidden">
      
      {/* Imagen de fondo */}
      <Image
        src="/images/inicio/inicio1.jpeg"
        alt="Paisaje Rural"
        fill
        priority
        className="object-cover object-[center_30%] brightness-75"
      />

      {/* Contenido centrado */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="h-32 md:h-40 lg:h-48 mx-auto relative w-48 md:w-56 lg:w-60"
        >
          <Image
            src="/images/inicio/logo2.png"
            alt="Logo Identidad Rural"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-lg"
        >
          {/* Puedes escribir aquí un mensaje breve si lo necesitas */}
        </motion.p>
      </div>
    </section>
  );
}
