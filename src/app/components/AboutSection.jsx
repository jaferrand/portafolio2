"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Photoshop</li>
        <li>Premier</li>
      </ul>
    ),
  },
  {
    title: "Educación",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Desarrollador FullStack, Universidad del Desarrollo</li>
        <li>Fotografo Profesional Motivarte, Buenos Aires, Argentina</li>
        <li>Diplomado en Docencia, DUOC UC</li>
        <li>Curso Dirección de Fotografía, Escuela de Cine de Chile</li>
      </ul>
    ),
  },
  {
    title: "Certificación",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/sobreMi4.png" width={700} height={700} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mi</h2>
          <p className="text-base lg:text-lg text-justify">
            ¡Hola! Soy un creativo apasionado con más de 16 años de experiencia en el mundo visual. Mi sólida trayectoria abarca desde dirigir la presencia en redes sociales hasta liderar estrategias creativas y efectivas en anuncios publicitarios, fotografía y contenido para diversos medios, empresas y agencias. Destacando con un primer lugar en el concurso del Día Nacional de Fotografía en 2010, mi camino profesional incluye roles como fotógrafo, Videógrafo y Creativo en distintas empresas y editoriales. Recientemente, me gradué como Desarrollador Full Stack en la Universidad del Desarrollo. Mi compromiso con el aprendizaje continuo y mi experiencia diversa me permiten aportar un enfoque versátil y actualizado a cada proyecto.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              {" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      <div className="text-right mt-8">
        <p className="text-lg text-white mb-4">
          Si quieres ver mi trabajo audiovisual, haz clic aquí.
        </p>
        <a
          href="https://visorpro.cl/" 
          rel="noopener noreferrer"
          className="bg-blue-500 text-white py-2 px-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Ver mi trabajo
        </a>
      </div>
      <div className="mb-40"></div>
    </section>
  );
};

export default AboutSection;
