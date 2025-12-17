
import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Vocês cobram orçamento?",
    a: "Para a maioria dos serviços simples, podemos passar uma estimativa pelo WhatsApp com base em fotos e descrição. Para serviços maiores que exigem visita técnica, a visita pode ter uma taxa de deslocamento que é descontada caso o serviço seja fechado."
  },
  {
    q: "Aceitam cartão de crédito?",
    a: "Sim! Aceitamos pagamentos em dinheiro, PIX, cartões de débito e crédito. Parcelamos serviços acima de determinado valor."
  },
  {
    q: "Vocês dão garantia do serviço?",
    a: "Sim, oferecemos garantia de 90 dias (3 meses) para todos os serviços de mão de obra executados, conforme o Código de Defesa do Consumidor."
  },
  {
    q: "Atendem em horários de emergência?",
    a: "Sim, possuímos atendimento de plantão para emergências elétricas e hidráulicas fora do horário comercial (sujeito a taxa de urgência)."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 max-w-3xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="group bg-white border border-brand-border rounded-2xl transition-all">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-brand-dark">
              {f.q}
              <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="p-6 pt-0 text-brand-muted leading-relaxed text-sm">
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
