
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Ricardo Mendes",
    loc: "Jardim Aclimação",
    text: "Serviço excelente! O eletricista chegou no horário combinado, resolveu o problema do chuveiro rapidamente e ainda limpou a sujeira. Recomendo muito!",
    initials: "RM"
  },
  {
    name: "Ana Souza",
    loc: "Zona 7",
    text: "Contratei para montar um guarda-roupa e instalar umas prateleiras. Ficou perfeito. Profissional muito educado e prestativo. Preço justo.",
    initials: "AS"
  },
  {
    name: "Carlos Oliveira",
    loc: "Centro",
    text: "Me salvaram num domingo com um vazamento na pia da cozinha. Atendimento super rápido pelo WhatsApp. Muito obrigado!",
    initials: "CO"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-footer text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">O que dizem nossos clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
              <div className="flex gap-1 text-brand-yellow mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-yellow" />)}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-yellow text-brand-dark font-bold flex items-center justify-center">
                  {rev.initials}
                </div>
                <div>
                  <h4 className="font-bold">{rev.name}</h4>
                  <p className="text-sm text-gray-500">{rev.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
