
import React from 'react';

const projects = [
  {
    title: "Instalação de Luminárias LED",
    category: "Elétrica",
    location: "Zona 3, Maringá",
    img: "https://picsum.photos/id/119/800/600",
    size: "normal"
  },
  {
    title: "Montagem de Cozinha Planejada",
    category: "Montagem",
    location: "Jardim Alvorada",
    img: "https://picsum.photos/id/20/800/1200",
    size: "tall"
  },
  {
    title: "Renovação de Sala de Estar",
    category: "Pintura",
    location: "Centro",
    img: "https://picsum.photos/id/122/800/600",
    size: "normal"
  },
  {
    title: "Reparo de Vazamento Oculto",
    category: "Hidráulica",
    location: "Gleba Palhano",
    img: "https://picsum.photos/id/133/800/600",
    size: "normal"
  },
  {
    title: "Manutenção de Deck Externo",
    category: "Reparos",
    location: "Zona 7",
    img: "https://picsum.photos/id/164/800/600",
    size: "normal"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projetos Realizados</h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos recentes em Maringá. Qualidade e limpeza garantidas em cada serviço.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[auto] md:h-[650px]">
          {/* Item 1 */}
          <ProjectItem project={projects[0]} />
          
          {/* Item 2 (Tall) */}
          <ProjectItem project={projects[1]} className="lg:row-span-2" />

          {/* Item 3 */}
          <ProjectItem project={projects[2]} />

          {/* Item 4 */}
          <ProjectItem project={projects[3]} />

          {/* Item 5 */}
          <ProjectItem project={projects[4]} />
        </div>
      </div>
    </section>
  );
};

const ProjectItem: React.FC<{ project: typeof projects[0], className?: string }> = ({ project, className }) => (
  <div className={`relative group rounded-2xl overflow-hidden cursor-pointer h-full min-h-[300px] ${className}`}>
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url(${project.img})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-80" />
    <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform group-hover:-translate-y-2">
      <span className="inline-block px-3 py-1 bg-brand-yellow text-brand-dark text-[10px] font-bold rounded-full mb-3 uppercase">
        {project.category}
      </span>
      <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
      <p className="text-gray-300 text-sm">{project.location}</p>
    </div>
  </div>
);

export default Projects;
