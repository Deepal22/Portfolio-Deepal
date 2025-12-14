"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
       <div className="grid grid-cols-1 sm:grid-cols-12"> 
            {/*Left Section */}
            <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Hello, I&apos;m{" "}
                  </span> 
                  <br></br>  
                    <TypeAnimation
                    sequence={[
                        'Deepal Tembhurne',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Web Developer',
                        1000,
                        'UI/UX Designer',
                        1000,
                        'C++ Developer',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Final-year IT student at IIIT Bhopal, passionate about clean code and continuous learning. 
                </p>

                {/*Buttons*/}
                <div>
                    <Link
                        href="/#contact"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-200 text-white"
                        >
                        Hire Me
                    </Link>
                    <Link
                        href="https://docs.google.com/document/d/1gtV-1o3SgA8b24DSLlCQQfE-VzVM3lj9/edit?usp=drive_link&ouid=103472568420285813067&rtpof=true&sd=true"
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
                        >
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            Download CV
                        </span>
                    </Link>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image 
                    src="/images/hero-image.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
