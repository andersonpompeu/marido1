
import React from 'react';
import { ShieldCheck, BadgeDollarSign, Sparkles, Map } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Profissionais Verificados",
      desc: "Todos os nossos profissionais passam por rigorosa checagem de antecedentes e testes técnicos."
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6" />,
      title: "Preço Justo e Transparente",
      desc: "Sem surpresas na hora de pagar. Orçamentos claros antes do início do serviço."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Limpeza e Organização",
      desc: "Deixamos o local limpo após o serviço. Respeitamos sua casa como se fosse nossa."
    }
  ];

  const neighborhoods = [
    "Zona 1 (Centro)", "Zona 7", "Zona 3", "Zona 5", "Jardim Alvorada", "Vila Operária",
    "Jardim Ingá", "Gleba Palhano", "Parque do Japão", "Sarandi (Centro)"
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-10 leading-tight">Por que escolher o Marido de Aluguel Maringá?</h2>
          <div className="space-y-10">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-full bg-white border border-brand-border flex items-center justify-center text-brand-yellow">
                  {b.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                  <p className="text-brand-muted leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 bg-white border border-brand-border rounded-[3rem] p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-brand-yellow/5">
            <Map className="w-48 h-48" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Map className="w-6 h-6 text-brand-yellow" />
              Bairros Atendidos
            </h3>
            <p className="text-brand-muted mb-8 leading-relaxed">
              Estamos prontos para chegar rapidamente em qualquer região de Maringá e cidades vizinhas.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {neighborhoods.map((n, i) => (
                <span key={i} className="px-4 py-2 bg-brand-bg rounded-full text-sm font-medium border border-brand-border">
                  {n}
                </span>
              ))}
            </div>
            
            <div className="relative h-56 rounded-2xl bg-gray-100 overflow-hidden group">
              <img 
                src="https://picsum.photos/id/10/600/300?grayscale" 
                alt="Mapa da Região" 
                className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/20 backdrop-blur-[1px]">
                <button className="bg-brand-yellow text-brand-dark px-6 py-3 rounded-full font-bold shadow-xl transition-transform hover:scale-105">
                  Ver Área no Mapa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
