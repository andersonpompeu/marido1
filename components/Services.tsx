
import React from 'react';
import { Zap, Droplets, Paintbrush, Armchair, Hammer, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets?: string[];
  isSpecial?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, bullets, isSpecial }) => {
  if (isSpecial) {
    return (
      <div className="bg-brand-yellow/10 border border-brand-yellow/30 p-8 rounded-[2rem] flex flex-col justify-between h-full group hover:shadow-xl transition-all">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-brand-dark leading-tight">{title}</h3>
          <p className="text-brand-muted mb-8 leading-relaxed">{description}</p>
        </div>
        <button className="w-full bg-brand-yellow hover:bg-yellow-400 py-3.5 rounded-full font-bold transition-colors">
          Pedir Orçamento
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-brand-border p-8 rounded-[2rem] group hover:border-brand-yellow hover:shadow-xl transition-all duration-300">
      <div className="bg-brand-yellow w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <span className="text-brand-dark">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-brand-muted text-sm mb-6 leading-relaxed">
        {description}
      </p>
      {bullets && (
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-brand-dark">
              <CheckCircle2 className="w-4 h-4 text-brand-yellow fill-brand-yellow text-white" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-muted mb-3">O Que Fazemos</p>
          <h2 className="text-4xl font-bold leading-tight">Serviços Especializados para sua Casa ou Empresa</h2>
        </div>
        <a href="#contato" className="text-brand-dark font-bold border-b-2 border-brand-yellow px-1 py-1 hover:bg-brand-yellow/10 transition-colors">
          Ver todos os serviços
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard 
          icon={<Zap className="w-6 h-6" />}
          title="Elétrica Residencial"
          description="Troca de fiação, instalação de chuveiros, tomadas, luminárias, ventiladores de teto e reparos em quadros de distribuição."
          bullets={["Instalação de Ar Condicionado", "Troca de Resistência"]}
        />
        <ServiceCard 
          icon={<Droplets className="w-6 h-6" />}
          title="Hidráulica"
          description="Conserto de vazamentos, troca de torneiras, sifões, válvulas de descarga, instalação de máquinas de lavar e desentupimentos."
          bullets={["Caça Vazamentos", "Limpeza de Caixa D'água"]}
        />
        <ServiceCard 
          icon={<Paintbrush className="w-6 h-6" />}
          title="Pintura e Acabamento"
          description="Pintura interna e externa, tratamento de infiltrações, aplicação de papel de parede e pequenos reparos em alvenaria."
          bullets={["Retoque de Gesso", "Texturas e Grafiatos"]}
        />
        <ServiceCard 
          icon={<Armchair className="w-6 h-6" />}
          title="Montagem de Móveis"
          description="Montagem e desmontagem de móveis comprados na internet, regulagem de portas de armários, instalação de prateleiras e cortinas."
        />
        <ServiceCard 
          icon={<Hammer className="w-6 h-6" />}
          title="Pequenos Reparos"
          description="Troca de fechaduras, instalação de suportes de TV, quadros, varal de teto, olho mágico e acessórios de banheiro."
        />
        <ServiceCard 
          isSpecial
          title="Precisa de outra coisa?"
          description="Realizamos diversos tipos de serviços personalizados. Entre em contato e descreva sua necessidade."
        />
      </div>
    </section>
  );
};

export default Services;
