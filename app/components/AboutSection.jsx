"use client"
import React, {useTransition, useState, startTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title:"Skills",
        id: "skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>C++</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>React.js</li>
                <li>Angular.js</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>PosgreSQL</li>
                <li>Streamlit</li>
                <li>numpy, pandas</li>
                <li>CNN</li>
                <li>NLP</li>
            </ul>
        )
    },
    {
        title:"Education",
        id: "education",
        content:(
            <ul className='list-disc pl-2'>
                <li>High School from J.N Tata Parsi Girls High School, Nagpur.</li>
                <li>Junior College from Hislop College, Nagpur.</li>
                <li>Graduating from Indian Institute of Information Technology (IIIT), Bhopal.</li>
            </ul>
        )
    },
    {
        title:"Certifications",
        id: "certifications",
        content:(
            <ul className='list-disc pl-2'>
                <li>Modern Front-end development course from Udemy.</li>
                <li>Google Skill Cloud Boost.</li>
            </ul>
        )
    },
]

const AboutSection = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }; 

  return (
    <section 
    id='about' 
    className='text-white mt-5'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image 
            src="/images/about-image.jpeg" 
            width={500} height={500}
            alt=""
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base md:text-lg'>I m a final-year student passionate about full-stack development using MERN and MEAN stack, with a strong focus on building clean, responsive, and user-friendly applications. 
                I also experience working with developer tools such as VS code, Figma, Git, Github, Postman, npm, Vercel, Render, Heroku, Netlify to maintain and test clean Web Applications as well as I experienced building projects on AI/ML technologies which helped me learn and implement machine learning concepts. Alongside development, I consistently practice Data Structures and Algorithms in C++ to improve my logic and problem-solving abilities. 
                I enjoy turning ideas into functional digital solutions while continuously learning and refining my craft
            </p>
            <div className='flex flex-row justify-start mt-8'>
                {/**Skills tab */}
                <TabButton 
                selectTab={() => handleTabChange("skills")} 
                active={tab === "skills"}
                >
                    {" "}
                    Skills{" "}
                </TabButton>

                {/**Education tab */}
                <TabButton 
                selectTab={() => handleTabChange("education")} 
                active={tab === "education"}
                >
                    {" "}
                    Education{" "}
                </TabButton>

                {/**Certification tab */}
                <TabButton 
                selectTab={() => handleTabChange("certifications")} 
                active={tab === "certifications"}
                >
                    {" "}
                    Certifications{" "}
                </TabButton>

            </div>
            <div className='mt-8'>
                {TAB_DATA.find((t) => t.id === tab).content}
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
