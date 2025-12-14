"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const projects = [
  { id: 1, title: "Residência Vila Nova", type: "Exterior", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { id: 2, title: "Apartamento Jardins", type: "Interior", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" },
  { id: 3, title: "Loja Conceito", type: "Comercial", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
  // Adicione mais fotos aqui
];

export default function ArchPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8">
      {/* Botão Voltar */}
      <Link href="/" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-12 transition-colors">
        <ArrowLeft size={20} /> Voltar para Home
      </Link>

      <header className="mb-20">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Portfolio <span className="text-orange-500">3D</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl font-light">
          Especializado em visualização arquitetônica fotorrealista. 
          Transformando plantas baixas em sonhos tangíveis.
        </p>
      </header>

      {/* Grid de Galeria */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-800 cursor-pointer"
          >
            <img 
              src={project.img} 
              alt={project.title} 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-orange-400 text-sm uppercase tracking-wider">{project.type}</span>
              <h3 className="text-2xl font-serif">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}