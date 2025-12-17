
import React from 'react';
import { MessageCircle, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-[3.5rem] p-8 md:p-16 border border-brand-border shadow-xl flex flex-col lg:flex-row gap-16 relative overflow-hidden">
        {/* Decor */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="lg:w-1/2 flex flex-col justify-center">
          <span className="bg-brand-yellow/20 text-brand-dark px-4 py-1 rounded-full text-xs font-bold w-fit mb-6">Contato Rápido</span>
          <h2 className="text-5xl font-black mb-6 leading-tight">Precisa de ajuda agora?</h2>
          <p className="text-xl text-brand-muted mb-12 leading-relaxed">
            Preencha o formulário ou chame no WhatsApp para um orçamento sem compromisso. Respondemos em até 30 minutos.
          </p>
          
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center transition-transform group-hover:scale-110">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <p className="font-bold text-xl">WhatsApp</p>
                <p className="text-brand-muted">(44) 99876-5432</p>
              </div>
            </a>
            
            <a href="mailto:contato@maridomaringa.com.br" className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-full bg-brand-dark text-white flex items-center justify-center transition-transform group-hover:scale-110">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <p className="font-bold text-xl">Email</p>
                <p className="text-brand-muted">contato@maridomaringa.com.br</p>
              </div>
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 bg-brand-bg rounded-[2.5rem] p-8 md:p-10 border border-brand-border">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold mb-2">Nome Completo</label>
              <input 
                type="text" 
                placeholder="Seu nome"
                className="w-full px-5 py-4 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow outline-none transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2">Telefone</label>
              <input 
                type="tel" 
                placeholder="(44) 99999-9999"
                className="w-full px-5 py-4 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Serviço Necessário</label>
              <select className="w-full px-5 py-4 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow outline-none transition-all bg-white appearance-none">
                <option>Selecione um serviço</option>
                <option>Elétrica</option>
                <option>Hidráulica</option>
                <option>Pintura</option>
                <option>Montagem de Móveis</option>
                <option>Pequenos Reparos</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Mensagem</label>
              <textarea 
                rows={3}
                placeholder="Descreva brevemente sua necessidade..."
                className="w-full px-5 py-4 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow outline-none transition-all"
              ></textarea>
            </div>

            <button className="w-full bg-brand-yellow hover:bg-yellow-400 text-brand-dark py-5 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95">
              <Send className="w-4 h-4" />
              Solicitar Orçamento
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
