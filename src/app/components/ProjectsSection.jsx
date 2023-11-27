"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title:'Pac-Man Clone',
        description: 'I developed a Java-script rendition inspired by Namcos beloved maze game. This project pays homage to the classic while incorporating modern elements and my unique approach to game design.',
        image: '/images/Projects/Pac-Man.png',
        tag: ['All', 'Games'],
        gitUrl: 'https://github.com/JettJagger/Pac-Man',
        previewUrl: 'https://jettjagger.github.io/Pac-Man/'
    },
    {
        id: 2,
        title:'Dice Game',
        description: 'During my immersive bootcamp experience at Code Nation, I crafted an engaging dice game from scratch using JavaScript. This project not only honed my coding skills but also served as a testament to my ability to create interactive and entertaining applications.',
        image: '/images/Projects/Dice.png',
        tag: ['All', 'Games'],
        gitUrl: 'https://github.com/JettJagger/arcadeDice',
        previewUrl: 'https://jettjagger.github.io/arcadeDice/'
    },
    {
        id: 3,
        title:'Rock, Paper, Scissors',
        description: 'I developed an interactive Rock, Paper, Scissors game using JavaScript, showcasing my programming proficiency in crafting engaging and intuitive user experiences. This project blends strategy and fun, highlighting my commitment to creating dynamic, interactive applications.',
        image: '/images/Projects/R,P,S.png',
        tag: ['All', "Games"],
        gitUrl: 'https://github.com/JettJagger/Rock-Paper-Scissors',
        previewUrl: 'https://jettjagger.github.io/Rock-Paper-Scissors/'
    },
    {
        id: 4,
        title:'Drum-Kit',
        description: 'I designed an interactive drum kit soundboard using JavaScript, showcasing my coding abilities in creating an immersive and responsive audio experience. This project not only demonstrates my technical skills but also embodies my passion for combining programming with engaging user interfaces',
        image: '/images/Projects/Drum-Kit.png',
        tag: ['All', "Games"],
        gitUrl: 'https://github.com/JettJagger/drumkit-',
        previewUrl: 'https://jettjagger.github.io/drumkit-/'
    },
    {
        id: 5,
        title:'Marvel Database',
        description: 'As a vital member of our Code Nation bootcamps final group project, I contributed to the creation and design of an impressive Marvel database. My role involved collaborative efforts in building and designing this comprehensive platform, showcasing our teams collective skills in development and design.',
        image: '/images/Projects/Marvel.png',
        tag: ['All', "Web"],
        gitUrl: 'https://github.com/gtinsley99/marvel',
        previewUrl: 'https://marvel-codenation.netlify.app/'
    },
    {
      id: 6,
      title:'Instagram Clone',
      description: 'As a culmination of my coursework at Code Nations bootcamp, I developed an Instagram clone using React, integrated with the Unsplash API, and backed by SQL. This project stands as a testament to my proficiency in leveraging cutting-edge technologies to replicate and innovate upon popular social media platforms.',
      image: '/images/Projects/Insta-Clone.png',
      tag: ['All', "Web"],
      gitUrl: 'https://github.com/JettJagger/react-insta',
      previewUrl: 'https://react-insta-sigma.vercel.app/'
  },
 




]

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
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
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