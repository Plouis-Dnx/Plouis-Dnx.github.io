import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

function ProjectCard({ images, title, description, technologies, github }) {
  return (
    <div className="bg-violet-100 rounded-lg shadow-lg overflow-hidden flex flex-col relative group">
      {/* Effet de remplissage au hover */}
      <div className="absolute bottom-0 left-0 w-full h-0 bg-violet-400 transition-all duration-700 ease-out group-hover:h-full"></div>

      {/* Carousel Swiper */}
      {images
        ? <div className="w-full relative z-10">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full h-64 md:h-80"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        : <div className="w-full relative z-10">
            <img
              src="/assets/project_example.avif"
              alt="default project image"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
      }

      {/* Texte en dessous */}
      <div className="w-full p-6 flex flex-col justify-center relative z-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 transition-colors duration-700 group-hover:text-white">
          {title}
        </h2>
        <p className="italic text-gray-600 transition-colors duration-700 group-hover:text-white group-hover:text-opacity-80">
          {description}
        </p>

        {/* Technologies */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {technologies?.map((tech, index) => (
            <li
              key={index}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700 transition-colors duration-700 group-hover:bg-violet-300 group-hover:text-white"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Lien GitHub */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-violet-600 font-semibold hover:underline transition-colors duration-700 group-hover:text-white"
          >
            Voir sur GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
