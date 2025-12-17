
import React from 'react';
import { PhoneCall, MapPin, Clock } from 'lucide-react';

const InfoBar: React.FC = () => {
  return (
    <section className="bg-white border-b border-brand-border py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-5 p-4 rounded-2xl bg-brand-bg/50 border border-brand-border">
            <div className="bg-brand-yellow/20 p-3 rounded-full">
              <PhoneCall className="w-6 h-6 text-brand-dark" />
            </div>
            <div>
              <p className="text-sm font-bold text-brand-dark">Telefone / WhatsApp</p>
              <p className="text-brand-muted text-sm">(44) 99876-5432</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-4 rounded-2xl bg-brand-bg/50 border border-brand-border">
            <div className="bg-brand-yellow/20 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-brand-dark" />
            </div>
            <div>
              <p className="text-sm font-bold text-brand-dark">Área de Atendimento</p>
              <p className="text-brand-muted text-sm">Maringá, Sarandi e Paiçandu</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-4 rounded-2xl bg-brand-bg/50 border border-brand-border">
            <div className="bg-brand-yellow/20 p-3 rounded-full">
              <Clock className="w-6 h-6 text-brand-dark" />
            </div>
            <div>
              <p className="text-sm font-bold text-brand-dark">Horário</p>
              <p className="text-brand-muted text-sm">Seg - Sex: 08h às 18h | Sáb: 08h às 12h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBar;
