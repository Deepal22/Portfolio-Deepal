"use client";
import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    id:1,
    title:"Movie Recommendation System",
    description:"Content-based Movie Recommender using BoW vectorization and Cosine similarity.",
    image: "/images/projects/img1.png",
    gitUrl: "https://github.com/Deepal22/Movie-recommendation-system",
    previewUrl: "https://movie-recommendation-system-3-mopy.onrender.com",
  },  
  {
    id:2,
    title:"AI Saas Application",
    description: "Full-stack AI powered application using PERN stack.",
    image: "/images/projects/img3.png",
    gitUrl: "https://github.com/Deepal22/QuickAi",
    previewUrl: "https://quick-ai-xi-nine.vercel.app/", 
  },
  {
    id:3,
    title:"Tasty burger",
    description:"Burger delivery application using React.js.",
    image: "/images/projects/img2.png",
    gitUrl: "https://github.com/Deepal22/TastyBurger",
    previewUrl: "https://tasty-burger-orcin.vercel.app/", 
  },
]

const ProjectSection = () => {
  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4'>
        My Projects
      </h2>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12 py-8'>
        {projectData.map((project) => (
        <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image} 
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
        />
        ))}
      </div>
      <div className='text-center text-white'>
        <button onClick={() => window.open("https://github.com/Deepal22?tab=repositories", "_blank")} className="px-6 py-3 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-pink-500 hover:bg-slate-200 text-white">
          More Projects
        </button>
      </div>
    </section>
  )
}

export default ProjectSection;
