"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Landing de Negocio",
    description: "Este proyecto está enfocado en construir una página landing para un negocio",
    image: "/images/projects/p1Land.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jaferrand/landingPagefinal.git",
    previewUrl: "https://jaferrand.github.io/landingPagefinal/",
  },
  {
    id: 2,
    title: "Aplicación CRUD",
    description: " crear una aplicación similar que cumpla con las 4 operaciones CRUD (crear, leer, actualizar, borrar).",
    image: "/images/projects/p2CRUD.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jaferrand/crudLocalstorage.git",
    previewUrl: "https://jaferrand.github.io/crudLocalstorage/",
  },
  {
    id: 3,
    title: "Aplicación Restaurante",
    description: "Este proyecto está enfocado en construir una aplicación web para un restaurante.",
    image: "/images/projects/p3RestAPP.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jaferrand/restDemo.git",
    previewUrl: "https://jaferrand.github.io/restDemo/",
  },
  {
    id: 4,
    title: "Aplicación de Comercio Electrónico",
    description: "Este proyecto está enfocado en construir una aplicación de eCommerce",
    image: "/images/projects/p4SitioCarrito.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jaferrand/vintageCaptureP5.git",
    previewUrl: "https://652d4c95a9536c2058777c42--benevolent-daifuku-bb969d.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
