
import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://picsum.photos/id/192/1920/1080')` 
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <span className="bg-brand-yellow text-brand-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
          Atendimento em toda Maringá e Região
        </span>
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          Consertos Rápidos e Profissionais sem Dor de Cabeça
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Sua solução confiável para reparos residenciais e comerciais. Elétrica, hidráulica, pintura, montagem de móveis e muito mais. Garantia de serviço limpo e preço justo.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-brand-yellow hover:bg-yellow-400 text-brand-dark px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-xl">
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </button>
          <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-brand-dark px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-xl">
            <ExternalLink className="w-5 h-5" />
            Ver Serviços
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
