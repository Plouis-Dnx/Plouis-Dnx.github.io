import { 
  SiTypescript,  
  SiHtml5,
  SiC, 
  SiPython,
  SiExpress,
  SiNestjs,
  SiVuedotjs,
  SiReact,
  SiBootstrap,
  SiMongodb,
  SiSqlite,
  SiGit,
  SiIntellijidea,
  SiTailwindcss
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa' 
import { VscVscode } from "react-icons/vsc";

function Skills() {
  // Données des compétences organisées par catégorie
  const skills = {
    "Langages": [
      { name: "TypeScript/JavaScript", icon: SiTypescript, level: 60, color: "#3178C6" },
      { name: "Java", icon: FaJava, level: 60, color: "#a05805ff" },
      { name: "HTML/CSS", icon: SiHtml5, level: 85, color: "#E34F26" },
      { name: "C", icon: SiC, level: 50, color: "#A8B9CC" },
      { name: "Python", icon: SiPython, level: 30, color: "#3776AB" },
    ],
    "Frameworks Back-End": [
      { name: "Express (Node.js)", icon: SiExpress, level: 60, color: "#000000" },
      { name: "NestJS", icon: SiNestjs, level: 30, color: "#E0234E" },
    ],
    "Frameworks Front-End": [
      { name: "Vue.js", icon: SiVuedotjs, level: 40, color: "#4FC08D" },
      { name: "React", icon: SiReact, level: 20, color: "#61DAFB" },
      { name: "Bootstrap", icon: SiBootstrap, level: 75, color: "#7952B3" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 20, color: "#38BDF8" }
    ],
    "Bases de Données": [
      { name: "MongoDB", icon: SiMongodb, level: 50, color: "#47A248" },
      { name: "SQLite", icon: SiSqlite, level: 65, color: "#003B57" },
    ],
    "Outils": [
      { name: "Git", icon: SiGit, level: 85, color: "#F05032" },
      { name: "VS Code", icon: VscVscode, level: 90, color: "#007ACC" },
      { name: "IntelliJ", icon: SiIntellijidea, level: 75, color: "#000000" },
    ],
  }

  return (
    <section id="skills" className="min-h-screen bg-violet-600 relative overflow-hidden py-20">
      {/* Formes géométriques en arrière-plan */}
      <img src="/assets/icons/sphere.png" alt="" className="absolute top-20 left-20 w-66 h-66 opacity-25 blur-md" />
      <img src="/assets/icons/cube.png" alt="" className="absolute bottom-32 right-20 w-42 h-42 opacity-20 blur-sm" />
      <img src="/assets/icons/sphere.png" alt="" className="absolute top-1/3 right-1/4 w-44 h-44 opacity-30 blur" />
      <img src="/assets/icons/cube.png" alt="" className="absolute bottom-10 left-1/3 w-60 h-60 opacity-30 blur-sm" />
      <img src="/assets/icons/sphere.png" alt="" className="absolute top-2/3 left-10 w-36 h-36 opacity-20 blur-md" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            COMPÉTENCES
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Contenu des compétences */}
        <div className="max-w-6xl mx-auto space-y-12">
          
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category}>
              {/* Titre de catégorie */}
              <h3 className="text-2xl font-bold text-white mb-6">{category}</h3>
              
              {/* Grille de compétences */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categorySkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    {/* Icône + Nom */}
                    <div className="flex items-center mb-4">
                      <skill.icon 
                        className="text-4xl mr-4" 
                        style={{ color: skill.color }}
                      />
                      <span className="text-lg font-semibold text-gray-800">
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Barre de progression */}
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: skill.color
                          }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-600 mt-2 inline-block">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills