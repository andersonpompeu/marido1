
import React from 'react';
import { Hammer, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-footer text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-yellow p-1.5 rounded-full">
                <Hammer className="w-5 h-5 text-brand-dark" />
              </div>
              <span className="font-bold text-xl">Marido de Aluguel</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Soluções práticas e profissionais para sua casa ou escritório em Maringá. Qualidade, confiança e preço justo sempre em primeiro lugar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-brand-yellow font-bold mb-6">Serviços</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Eletricista</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Encanador</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pintor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Montador de Móveis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instalações em Geral</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-yellow font-bold mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projetos Realizados</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-yellow font-bold mb-6">Atendimento</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400 leading-relaxed">
                  Av. Brasil, 1234 - Zona 01<br />Maringá - PR, 87000-000
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-yellow shrink-0" />
                <p className="text-sm text-gray-400">(44) 99876-5432</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-yellow shrink-0" />
                <p className="text-sm text-gray-400">contato@maridomaringa.com.br</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 uppercase tracking-widest font-medium">
          <p>© 2024 Marido de Aluguel Maringá. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
