function About() {
  return (
    <section id="about" className="min-h-screen bg-violet-600 relative overflow-hidden py-20">
      {/* Formes géométriques en arrière-plan */}
      <img src="/assets/icons/cube.png" alt="" className="absolute top-10 left-10 w-52 h-52 opacity-20 blur-sm" />
      <img src="/assets/icons/sphere.png" alt="" className="absolute top-32 right-40 w-20 h-20 opacity-30 blur-sm" />
      <img src="/assets/icons/sphere.png" alt="" className="absolute bottom-40 left-15 w-60 h-60 opacity-20 blur" />
      <img src="/assets/icons/sphere.png" alt="" className="absolute bottom-20 right-10 w-36 h-36 opacity-25 blur-md" />
      <img src="/assets/icons/cube.png" alt="" className="absolute top-60 right-1/3 w-76 h-76 opacity-30 blur-sm" />
      <img src="/assets/icons/cube.png" alt="" className="absolute bottom-10 left-1/2 w-44 h-44 opacity-20 blur-md" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À PROPOS DE MOI
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Contenu principal */}
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Colonne de gauche - Cards Formation + Passions */}
            <div className="flex flex-col justify-center space-y-8">
              
              {/* Formation */}
              <div className="bg-violet-100 rounded-lg shadow-lg p-8 relative overflow-hidden group">
                {/* Effet de remplissage au hover */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-violet-400 transition-all duration-700 ease-out group-hover:h-full"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">🎓</span>
                    <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-700 group-hover:text-white">Formation</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-800 transition-colors duration-700 group-hover:text-white">Lience Informatique - 3<sup>e</sup> Année</p>
                      <p className="text-gray-600 transition-colors duration-700 group-hover:text-white group-hover:text-opacity-80">Université Polytechnique Hauts-de-France</p>
                      <p className="text-gray-500 text-sm transition-colors duration-700 group-hover:text-white group-hover:text-opacity-70">Depuis 2023</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 transition-colors duration-700 group-hover:text-white">Bac Général - Mention <em>Bien</em></p>
                      <p className="text-gray-600 transition-colors duration-700 group-hover:text-white group-hover:text-opacity-80">Lycée Niepce-Balleure</p>
                      <p className="text-gray-500 text-sm transition-colors duration-700 group-hover:text-white group-hover:text-opacity-70">2020 - 2023</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Passions Tech */}
              <div className="bg-violet-100 rounded-lg shadow-lg p-8 relative overflow-hidden group">
                {/* Effet de remplissage au hover */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-violet-400 transition-all duration-700 ease-out group-hover:h-full"></div>
                
                <div className="relative">
                    <div className="flex items-center mb-6">
                        <span className="text-4xl mr-4">💡</span>
                        <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-700 group-hover:text-white">Passions et Objectifs</h3>
                    </div>
                  
                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold text-gray-800 transition-colors duration-700 group-hover:text-white">Technologies que j'aime</p>
                            <p className="text-gray-600 transition-colors duration-700 group-hover:text-white group-hover:text-opacity-80">TypeScript, Java, VueJS, Bootstrap</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800 transition-colors duration-700 group-hover:text-white">Domaines qui me passionnent</p>
                            <p className="text-gray-600 transition-colors duration-700 group-hover:text-white group-hover:text-opacity-80">FullStack, Deep Learning, Génie Logiciel</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800 transition-colors duration-700 group-hover:text-white">Objectifs</p>
                            <p className="text-gray-600 transition-colors duration-700 group-hover:text-white group-hover:text-opacity-80">Devenir dev full stack, travailler sur des projets innovants</p>
                        </div>
                    </div>
                </div>
              </div>

            </div>
            
            {/* Colonne de droite - Qui suis-je */}
            <div className="text-white flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold mb-6">Qui suis-je ?</h3>

              <p className="text-lg mb-4 leading-relaxed">
                Étudiant en Licence Informatique à l'Université Polytechnique Hauts-de-France depuis 2023, je suis animé par une véritable passion pour 
                l'informatique et l'innovation technologique. Mon parcours reflète une curiosité constante pour le développement full stack et le génie 
                logiciel, des domaines qui structurent aujourd'hui mon apprentissage et mes projets.
              </p>
              
              <p className="text-lg mb-4 leading-relaxed">
                À travers mes expériences académiques et personnelles, j'explore et maîtrise des technologies telles que TypeScript, NestJS, 
                Express, VueJS, React ou encore MongoDB. Ces outils me permettent de donner vie à mes idées, de concevoir des applications 
                performantes et de relever des défis techniques toujours plus stimulants.
              </p>
              
              <p className="text-lg mb-4 leading-relaxed">
                Mon objectif : mettre mes compétences au service de projets innovants, tout en continuant à progresser et à élargir 
                mon expertise. Je m'engage à développer chaque jour mes connaissances et ma créativité pour contribuer à des solutions technologiques 
                ambitieuses et impactantes.
              </p>

              <p className="text-lg mb-4 leading-relaxed">
                En parallèle, je nourris ma curiosité et mon imagination à travers des passions variées comme la musique, les sciences, la science-fiction 
                et les jeux vidéo rétro, qui enrichissent mon univers personnel.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About