"use client"
import Image from "next/image";
import StaggeredMenu from './components/menu';
import CurvedLoop from './components/CurvedLoop';
import SplitText from "./components/SplitText";
import ScrollVelocity from './components/ScrollText';
import LogoLoop from './components/LogoLoop';
import LogisticBifurcation from './components/Log'
import Card from './components/Card'

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiWordpress, SiPython, SiFigma, SiGit, SiFirebase } from 'react-icons/si';
import { useEffect, useRef, useState } from "react";
import { DiJava } from "react-icons/di";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";


const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node", href: "" },
  { node: <SiMongodb />, title: "Mongo DB", href: "" },
  { node: <SiWordpress />, title: "Wordpress", href: "" },
  { node: <SiPython />, title: "Python", href: "" },
  { node: <SiFigma />, title: "Figma", href: "" },
  { node: <DiJava />, title: "Java", href: "" },
  { node: <FaHtml5 />, title: "HTML", href: "" },
  { node: <FaCss3Alt />, title: "CSS", href: "" },
  { node: <SiGit />, title: "CSS", href: "" },
  { node: <SiFirebase />, title: "CSS", href: "" },


];



// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];


const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Skills', ariaLabel: 'View our services', link: '/services' },
  { label: 'Works', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];


export default function Home() {
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

 
  return (
    <div className="flex justify-center bg-ivory w-100vw h-full">
     <div className="h-screen w-screen">
      <StaggeredMenu 
      
        accentColor="#d7fb91"
        isFixed = {true}
        items = {menuItems}
        socialItems = {socialItems}
      />

      <div className="w-full flex items-start justify-center">
      <CurvedLoop 
        marqueeText="Welcome ✦ To ✦ My ✦ Portfolio ✦ Website ✦ ≽^•⩊•^≼"
        speed={2}
        curveAmount={500}
        direction="left"
        interactive={true}
        className="custom-text-style"

      />
      </div>

      <div className="flex flex-col align-center mt-10 md:mt-30 lg:mt-30 lg:flex-row justify-between 
      items-center mb-10
">
     
      <img src="/assets/flowers.PNG" alt="" 
      max-width={700}
      className=""
      width="50%"
    	></img>


      <SplitText
        text="Hey! I'm Awangran"
        className="text-4xl md:text-6xl md:text-right lg:text-8xl font-semibold text-wrap wrap-anywhere lg:mr-20
        text-prettyp p-4"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
      
      </div>

      <div className="my-5 bg-prettyp h-lg p-2 mt-5 flex gap-5 flex-col">
  
      <ScrollVelocity
        texts={['°❀ DESIGN ⋆. WEBDEV *: UI･° ENVIRONMENT ❀⋆. PURPOSE *:･']} 
        velocity={70} 
        className="custom-scroll-text text-brightg"

      />

      
      

      <div className=" flex items-center justify-center ">
      <LogisticBifurcation />
      
      </div>

      

      <div className="">
    
      <h1 className=" text-center font-bold text-6xl text-lightp mb-10" >TOOLSTACK</h1>

      <LogoLoop
        logos={techLogos}
        speed={70}
        direction="left"
        logoHeight={75}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#F8A2BF"
        ariaLabel="Skills"
        className="text-brightg"
      />
      </div>
      </div>

      <div>
      <h1 className=" text-center font-bold text-6xl text-prettyp my-10" >RECENT PROJECTS</h1>

      <div className="flex flex-wrap flex-row gap-4 justify-center w-full p-5">

      
      <Card
        title="Logistic Bifurcation Explorer"
        category="Creative Coding"
        skill="WebGL / Chaos"
        description="An interactive GPU-powered visualization of the logistic map bifurcation diagram, exploring nonlinear dynamics and emergent behavior."
        imagesrc="/assets/flowers.PNG"
      />

      <Card
              title="Logistic Bifurcation Explorer"
              category="Creative Coding"
              skill="WebGL / Chaos"
              description="An interactive GPU-powered visualization of the logistic map bifurcation diagram, exploring nonlinear dynamics and emergent behavior."
              imagesrc="/assets/flowers.PNG"
            />

      <Card
              title="Logistic Bifurcation Explorer"
              category="Creative Coding"
              skill="WebGL / Chaos"
              description="An interactive GPU-powered visualization of the logistic map bifurcation diagram, exploring nonlinear dynamics and emergent behavior."
              imagesrc="/assets/flowers.PNG"
           />
      </div>


      </div>
      
      

      
      
      
    </div>
    
    
    </div>
  );
}
