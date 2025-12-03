import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-violet-600 relative overflow-hidden py-20"
    >
      {/* Formes géométriques en arrière-plan */}
      <img src="/assets/icons/cube.png" alt="" className="absolute top-16 left-1/4 w-76 h-76 opacity-25 blur-md" />
      <img src="/assets/icons/sphere.png" alt="" className="absolute top-1/2 left-10 w-60 h-60 opacity-15 blur" />
      <img src="/assets/icons/cube.png" alt="" className="absolute bottom-32 right-10 w-44 h-44 opacity-30 blur-sm" />

  {/* Contenu principal */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            MES PROJETS
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Liste des projets */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <ProjectCard
            title="Portfolio"
            description="
                  Eh oui ! Ce portfolio a été créé avec React et Tailwind CSS ! Il m'a permis d'avoir un code plus propre à la version que j'avais avant ou je n'utilisais
                  que du HTML/CSS pur. De plus, ce petit projet, développé en 1 petite journée seulement, m'a permis de développer mes compétences en React 
                  et d'apprendre les bases de Tailwind !"
            technologies={["React", "Tailwind CSS"]}
            github="https://github.com/Plouis-Dnx/Plouis-Dnx.github.io"
          />

          <ProjectCard 
            images={[
              "/assets/projects/superheromanager_home.png",
              "/assets/projects/superheromanager_heropresentation.png",
              "/assets/projects/superheromanager_addhero.png"
            ]}
            title="SuperHero Manager"
            description="
                  SuperHero Manager est une application FullStack de gestion de super-héros, développée avec React/TypeScript (frontend) et 
                  Express/TypeScript + MongoDB (backend). Ce projet universitaire m'a permis de maîtriser les hooks et composants React, l'architecture 
                  backend (routes, contrôleurs, middlewares), ainsi que des outils comme bcrypt (sécurité) et multer (upload d'images). Fonctionnalités clés : 
                  CRUD complet, authentification par rôles (admin/utilisateur), gestion d'images et statistiques de pouvoir — le tout en appliquant une structure 
                  de code propre et maintenable."
            technologies={["TypeScript", "React", "Express", "Node.js", "Bootstrap"]}
            github="https://github.com/Plouis-Dnx/miniprojet"
          />

          <ProjectCard
            images={[
              "/assets/projects/QuickTalk_connection.png",
              "/assets/projects/QuickTalk_messages.png",
              "/assets/projects/QuickTalk_settings.png"
            ]}
            title="LowTalk"
            description="
                  LowTalk représente ma première version de QuickTalk, une application de messagerie en ligne, 
                  un projet personnel conçu pour me former au développement fullstack.
                  Débutant à l'époque, j'ai privilégié des technologies simples et accessibles (détaillées ci-dessous). Bien que le code ne
                  soir pas parfait (j'apprenais les bases du développement fullstack), ce projet a été une étape clé pour consolider mes 
                  connaissances et gagner en expérience pratique."
            technologies={["Node.js", "Express", "Bootstrap", "Javascript", "HTML5/CSS3", "SQLite"]}
            github="https://github.com/Plouis-Dnx/LowTalk"
          />

          <ProjectCard
            images={["/assets/projects/quicktalk_logo.png"]}
            title="QuickTalk"
            description="
                  (En cours de développement) Cette seconde version de QuickTalk illustre mes progrès en développement FullStack avec une stack professionnelle : NestJS pour le backend, 
                  qui offre une architecture modulaire, une gestion optimisée des WebSockets (Socket.io) pour la communication instantanée, et une intégration 
                  fluide avec des services tiers ; Angular pour le frontend, garantissant une interface réactive et scalable grâce à ses modules et son système 
                  de routing avancé. L'authentification sécurisée via OAuth Google simplifie la connexion tout en renforçant la sécurité, tandis que Socket.io 
                  permet des échanges en temps réel avec une latence minimale. Ce projet reflète une approche plus mature, axée sur la maintenabilité, la performance 
                  et l'évolutivité, avec un code structuré et des bonnes pratiques appliquées. (Démo à venir !)"
            technologies={["Nest.js", "Fastify", "Angular", "Socket.io", "Tailwind CSS", "MongoDB", "BackEnd Unit Tests : Jest", "FrontEnd Unit Tests : Karma/Jasmine"]}
            github="https://github.com/Plouis-Dnx/QuickTalk"
          />

          <ProjectCard
            title="StreamSa"
            description="
                  StreamSa est un prototype d'application de streaming musical développé en Java, dans le cadre d'un projet universitaire. 
                  Ce projet a été une expérience clé pour maîtriser les principes SOLID et les appliquer à la création d'un code propre, structuré 
                  et maintenable — une approche qui influence désormais systématiquement ma façon de coder. Au-delà de la théorie, il m'a permis de 
                  consolider mes compétences en Java et de les mettre en pratique sur un cas concret, renforçant ainsi ma rigueur et mon efficacité en développement."
            technologies={["Java"]}
            github="https://github.com/Plouis-Dnx/StreamSa"
          />
          
        </div>
      </div>
    </section>
  );
}

export default Projects;