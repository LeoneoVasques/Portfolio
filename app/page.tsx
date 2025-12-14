"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Importante para navegação
import Image from 'next/image'; // Para sua foto
import { motion } from 'framer-motion';
import { Code2, Box, ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';

const PortfolioSplit = () => {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  // Configuração da animação
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <div className="relative flex flex-col md:flex-row h-screen w-full overflow-hidden bg-black">
      
      {/* --- CAMADA CENTRAL (NOME E FOTO) --- */}
      {/* Fica por cima de tudo (z-50), mas deixa o mouse passar (pointer-events-none) para detectar o hover nas laterais */}
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none">
        <motion.div 
          className="flex flex-col items-center text-center p-6"
          animate={{ 
            opacity: hoveredSide ? 0.4 : 1, // Fica transparente quando o usuário escolhe um lado
            y: hoveredSide ? -50 : 0 
          }}
          transition={transition as any}
        >
          {/* Foto de Perfil */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl mb-4 pointer-events-auto">
             {/* Substitua o src pela sua foto real na pasta public ou URL */}
             <img 
               src="https://github.com/shadcn.png" 
               alt="Leoneo Vasques" 
               className="object-cover w-full h-full"
             />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
            Leoneo Vasques
          </h1>
          <p className="text-white/80 mt-2 text-sm md:text-base font-light tracking-widest uppercase bg-black/50 px-3 py-1 rounded backdrop-blur-sm">
            Criativo & Técnico
          </p>
          
          {/* Redes Sociais (com pointer-events-auto para serem clicáveis) */}
          <div className="flex gap-4 mt-4 pointer-events-auto">
            <a href="#" className="text-white/60 hover:text-white transition-colors"><Github size={20}/></a>
            <a href="#" className="text-white/60 hover:text-blue-400 transition-colors"><Linkedin size={20}/></a>
            <a href="#" className="text-white/60 hover:text-pink-400 transition-colors"><Instagram size={20}/></a>
          </div>
        </motion.div>
      </div>

      {/* --- LADO ESQUERDO: 3D & ARQUITETURA --- */}
      <motion.div
        className="relative flex flex-col justify-center items-center h-1/2 md:h-full cursor-pointer group overflow-hidden"
        initial={false}
        animate={{
          flex: hoveredSide === 'left' ? 3 : hoveredSide === 'right' ? 1 : 1
        }}
        transition={transition as any}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop")',
            filter: hoveredSide === 'left' ? 'brightness(0.8)' : 'brightness(0.4)' 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />

        <div className="relative z-10 text-center px-6 mt-20 md:mt-0">
          <motion.div animate={{ scale: hoveredSide === 'left' ? 1.1 : 1 }} transition={transition as any}>
            <Box className="w-16 h-16 text-orange-400 mx-auto mb-4 drop-shadow-lg" />
          </motion.div>
          
          <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-2 tracking-wide drop-shadow-md">
            Visualizer 3D
          </h2>
          
          <motion.p 
            className="text-gray-300 text-xs md:text-lg font-light tracking-widest uppercase"
            animate={{ opacity: hoveredSide === 'right' ? 0 : 1 }}
          >
            Realismo & Atmosfera
          </motion.p>

          <Link href="/arquitetura">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: hoveredSide === 'left' ? 1 : 0,
                y: hoveredSide === 'left' ? 0 : 20
              }}
              transition={{ delay: 0.1 }}
              className="mt-8 px-8 py-3 bg-orange-600 text-white rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-orange-700 transition-all hover:scale-105 shadow-orange-900/50 shadow-lg"
            >
              Ver Portfolio <ArrowRight size={18} />
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* --- LADO DIREITO: DESENVOLVIMENTO --- */}
      <motion.div
        className="relative flex flex-col justify-center items-center h-1/2 md:h-full cursor-pointer bg-slate-950 border-l border-slate-800 overflow-hidden"
        initial={false}
        animate={{
          flex: hoveredSide === 'right' ? 3 : hoveredSide === 'left' ? 1 : 1
        }}
        transition={transition as any}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950" />

        <div className="relative z-10 text-center px-6 mt-20 md:mt-0">
          <motion.div animate={{ scale: hoveredSide === 'right' ? 1.1 : 1 }} transition={transition as any}>
            <Code2 className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
          </motion.div>

          <h2 className="text-3xl md:text-6xl font-mono font-bold text-white mb-2">
            {'<FrontEnd />'}
          </h2>
          
          <motion.p 
            className="text-indigo-200 text-xs md:text-lg font-mono"
            animate={{ opacity: hoveredSide === 'left' ? 0 : 1 }}
          >
            React • Next.js • UI/UX
          </motion.p>

          <Link href="/developer">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: hoveredSide === 'right' ? 1 : 0,
                y: hoveredSide === 'right' ? 0 : 20
              }}
              transition={{ delay: 0.1 }}
              className="mt-8 px-8 py-3 border border-indigo-500/50 bg-indigo-500/10 text-indigo-300 rounded hover:bg-indigo-500 hover:text-white transition-all hover:scale-105 flex items-center gap-2 mx-auto font-mono backdrop-blur-md"
            >
              Ver Código <ArrowRight size={18} />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioSplit;