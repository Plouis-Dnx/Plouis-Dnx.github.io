function Home() {
  return (
    <section id="home" className="min-h-screen bg-violet-600 relative overflow-hidden">
      {/* Formes géométriques en arrière-plan */}
      <img src="/assets/icons/cube.png" alt="" className="absolute top-10 left-10 w-50 h-50 opacity-20 blur-sm" />
      <img src="/assets/icons/sphere.png" alt="" className="absolute top-32 right-50 w-15 h-15 opacity-30 blur-sm" />
      <img src="/assets/icons/sphere.png" alt="" className="absolute bottom-40 left-1/4 w-55 h-55 opacity-15 blur" />
      <img src="/assets/icons/sphere.png" alt="" className="absolute bottom-20 right-10 w-34 h-34 opacity-25 blur-md" />
      <img src="/assets/icons/cube.png" alt="" className="absolute top-60 right-1/3 w-80 h-80 opacity-30 blur-sm" />
      
      {/* Contenu principal */}
      <div className="container mx-auto px-4 min-h-screen flex items-center py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          
          {/* Partie gauche - Texte */}
          <div className="text-white flex flex-col justify-center text-center md:text-left order-2 md:order-1">
            <p className="text-xl md:text-lg mb-2">Bienvenue, je suis</p>
            <h2 className="text-4xl md:text-3xl font-semibold mb-6">Pierre-Louis</h2>
            
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              DÉVELOPPEUR<br />
              FULL STACK<br />
              JUNIOR
            </h1>
            
            <p className="text-2xl md:text-xl mb-8 text-violet-100">
              <em>Apprendre, créer, innover</em>
            </p>
            
            <div>
              <a 
                href="/files/CV.pdf" 
                target="_blank"
                className="inline-block bg-white text-violet-600 px-8 py-4 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-violet-50 transition-colors text-lg"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
          
          {/* Partie droite - Photo */}
          <div className="flex justify-center order-1 md:order-2 z-1">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-6 md:border-8 border-white shadow-2xl">
              <img 
                src="/assets/photo_de_profil.jpg"
                alt="Photo de profil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Home