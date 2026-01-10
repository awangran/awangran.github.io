"use client"
import Image from "next/image";
import StaggeredMenu from './components/menu';
import CurvedLoop from './components/CurvedLoop';
import SplitText from "./components/SplitText";
import ScrollVelocity from './components/ScrollText';
import LogoLoop from './components/LogoLoop';
import LogisticBifurcation from './components/Log'
import CardGlass from './components/Card'
import CardSwap, { Card } from './components/CardSwap'


import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiWordpress, SiPython, SiFigma, SiGit, SiFirebase, SiMailboxdotorg } from 'react-icons/si';
import { useEffect, useRef, useState } from "react";
import { DiJava } from "react-icons/di";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoIosMail, IoLogoLinkedin } from "react-icons/io";



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
  { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
  { label: 'Skills', ariaLabel: 'skills', link: '#skills' },
  { label: 'Works', ariaLabel: 'works', link: '#works' },
  { label: 'Experience', ariaLabel: 'experience', link: '#experience' }

];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

const projects = [
 
  { title: 'Niveles de Niveles', category: 'Web Dev / Mobile', skill: 'React Native', description: 'An early warning application that mitigate the consequences of natural disasters. This project won the XVII Concurso Nacional de Programación in Colombia. It is made with react-native with the use of websockets to provide aid to people in disaster prone areas. The app is free and published to the App Store and Google Play store.'
  , imagesrc: '/assets/niveles.webp', link: 'https://github.com/NotARoomba/NivelesDeNiveles'},
  {title: 'Mommaharbour', category: 'Ecommerce / Freelance', skill:'Wordpress.org', description: 'A simple ecommerce website for a clothing brand. Payment integration done with Wompi API and development done with Wordpress.org.'
  ,imagesrc:'/assets/momma.webp', link:'https://mommaharbour.com'},
  {title: 'Pragma', category: 'Web Dev / Mobile', skill:'NextJS / Expo / Figma', description: 'WIP A webapp designed for the 2026 Colombian presidential elections in order for youth to get to know better candidates for different political positions, their proposals, news and guides related to make the voting process more transparent for the younger generation.'
  ,imagesrc:'/assets/pragma.webp', link:''},
  {title: 'LetMeCook', category: 'Web Dev', skill:'React / MongoDB / NodeJS', description: 'Since I do not know how to cook and have terrible meal planning skills, I developed an app that takes in all your fridge items, keeps track how fresh they are, and generates recipes based on them. '
  ,imagesrc:'/assets/letmecook.webp', link:'https://github.com/awangran/letmecook'},
  {title: 'HearingAid', category: 'Web Dev', skill:'React / MUI / NodeJS', description: 'Digital notebook designed for people with hearing limitations that depend on interpreters for understanding and participating in classes. Shows subtitles for lessons, allows to ask questions to teacher, and creates summaries with AI.'
  ,imagesrc:'/assets/hearingaid.webp', link:'https://github.com/awangran/hearingAId'},
  {title: 'Devoided', category: 'Game Dev', skill:'Unity / Digital Drawing', description: 'Devoided is an RPG game developed in a hackathon about quantum engineer that explores space-time in search of traces of a deck of ancient Earth, but in his search he becomes trapped in the past. Developed with Unity, and sprites were digitally drawn by me.'
  ,imagesrc:'/assets/devoided.webp', link:'https://github.com/NotARoomba/Devoided'},
  {title: 'Shu', category: 'Web Dev', skill:'React / MUI / NodeJS', description: 'Simple React app library to store your embarrasing taste in media.'
  ,imagesrc:'/assets/shu.webp', link:''},
  {title: 'Flower PCB Card', category: 'Electronics', skill:'EasyEDA', description: 'Flower shaped pcb with nfc chip. Design focused electronics project that works as a presentation card and keychain. Inspired by Hack Club Hacker card tutorial. Design and wireframe done by myself with EasyEDA. Manufactured with JLCPCB!'
  ,imagesrc:'/assets/flowerpcb.webp', link:'https://github.com/awangran/shu-app'},
  {title: 'FitConnect', category: 'Mockup / Freelance', skill:'Vanilla JS', description: 'Gym website mockup with simple auth, classes reservations, posts, account info, etc. Comissioned.'
  ,imagesrc:'/assets/fitconnect.webp', link:'https://the-fit-connect.vercel.app'},
  {title: 'Hackathons', category: 'Others', skill:'Others', description: 'Past fun hackathon projects done through devpost in my highschool days. Hackathon projects that are created based on problematics like food oasis, reading disabilities, cerebral palsy research, etc.'
  ,imagesrc:'/assets/hackaton.webp', link:'https://devpost.com/awangran'}
 
 
 
];



export default function Home() {
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleCardClick = () => {
    
  }

 
  return (
    <div className="flex justify-center bg-ivory w-100vw h-full">
     <div className="h-screen w-screen">
      <StaggeredMenu 
      
        accentColor="#d7fb91"
        isFixed = {true}
        items = {menuItems}
        socialItems = {socialItems}
      />

      <div className="w-full flex items-start justify-center" id="home">
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
     
      <img src="/assets/flowers.webp" alt="" 
      max-width={700}
      className=""
      width="50%"
    	></img>


      <SplitText
        text="Hi! I'm Ashlee Yin"
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

      

      <div className="" id="skills">
    
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

      <div >
      <h1 id='works' className=" text-center font-bold text-6xl text-prettyp my-10 mb-5" >RECENT PROJECTS</h1>

      <div className="flex flex-wrap flex-row gap-4 justify-center w-full p-5 mb-10">

      {projects.map((item) => (
        <CardGlass
        key={item.title}
        title={item.title}
        category={item.category}
        skill={item.skill}
        description={item.description}
        imagesrc={item.imagesrc}
        link={item.link}
      />

      ))}

      
      </div>


          <div className="relative">
            {/* White fade-in gradient */}
            <div className="pointer-events-none absolute -top-5 left-0 right-0 h-32 z-10
            bg-gradient-to-b from-white via-white/70 to-transparent blur-sm" />

            <div className="bg-brightg flex flex-col lg:flex-row pt-32 pl-5" id="experience">
              <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-center ">
                <h1 className=" text-right font-bold text-6xl text-prettyp lg:py-10 md:py-10 py-2 px-2" >EXPERIENCE & AWARDS</h1>
                <p className="text-right text-xl text-prettyp  px-2 mb-5"> ✦ Click or hover to pause ✦ </p>
              </div>

              <div style={{ overflow: 'hidden', position: 'relative' }} className="w-full lg:h-[600px] md:h-[600px] h-[600px]">
                <CardSwap
                  width="clamp(300px, 90vw, 700px)"
                  height="clamp(350px, 50vh, 500px)"
                  cardDistance={40} 
                  verticalDistance={80} // Adjusted to fit tighter vertical space
                  easing="linear"
                  pauseOnHover
                  onCardClick={handleCardClick}
                  skewAmount={4}
                  

                >
                  <Card>
                    <h2> ≽^•⩊•^≼ Work Experience</h2>
                    <div className="context">
                      <ul>
                        <li>Freelance Web Developer '21 - Present</li>
                        <li>Research Assistant Andes University Cupitaller '26</li>
                        <li>TA Andes University Intro to Programming Honors '25</li>
                        <li>TA Andes University Mathematical Foundations of Computation '25</li>
                        <li>Bow Seat <a href="https://bowseat.org/programs/future-blue-youth-council/fbyc-alumni/" target="_blank">Future Blue Youth Council Member</a> '22</li>
                        
                      </ul>
                    </div>
                  </Card>
                  <Card>
                    <h2> ฅ^•⩊•^ฅ Awards </h2>
                    <div className="context">
                      <ul>
                        <li>1st Place VI Colombian National <a href="https://www.colombiaaprende.edu.co/agenda/eventos/barranquilla-san-gil-y-canasgordas-son-los-ganadores-del-vii-concurso-nacional-de" target="_blank">Programming Contest</a></li>
                        <li>1st Place <a href="https://ingenieria.uniandes.edu.co/es/ganadores-semana-de-la-innovacion" target="_blank">ExpoAndes</a> Engineering Projects Andes University</li>
                        <li>1st LIT Enviromental Engineering Contest Anahuac University</li>
                        <li>1st Overall Do-Re-Mi-Hacks, Major Hacking League</li>
                        <li>1st Katy Youth Hacks hackathon, Girls Who Code</li>
                        <li>2nd Place LIT Game Jam Anahuac Merida University</li>
                        <li>2nd Place <a href="https://www.uninorte.edu.co/es/web/grupo-prensa/w/ganadores-del-data-challenge-crean-soluciones-a-partir-de-la-ciencia-de-datos" target="_blank"></a>Data Science Competition 2023, Universidad del Norte</li>
                      </ul>
                    </div>
                  </Card>
                  <Card>
                    <h2> /ᐠ - ˕ -マ ᶻ 𝗓 𐰁 Extra</h2>
                    <div className="context">
                      <ul>
                        <li><a href="https://barranquilla.gov.co/mi-barranquilla/daydream-barranquilla-2025-tres-estudiantes-de-la-humboldt-ganaron-primer-puesto" target="_blank">Daydream Hackathon</a> Organizer w/ Hack Club</li>
                        <li><a href="https://icarusclub.org" target="_blank">Icarus Club Embassador Barranquilla Tech Club</a></li>
                        <li>Bow Seat Ocean Awareness program Fellowship Grant Winner</li>
                        <li>Intro to Quantum Computing Year scholarship w/ Qubit x Qubit & IBM</li>
                        <li><a href="https://www.linkedin.com/posts/ashlee-yin-romero-63204223a_xxiv-national-mathematics-congress-2025-in-activity-7347718411830919169-v5k5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtzNQYBonAl99KsI66xJkr_k-gKUJ859IE" target="_blank">Quantum Poster</a> presentation @ Colombia's National Mathematics Congress</li>
                        <li><a href="https://youtu.be/tVggh02uWec" target="_blank">Complex Network</a> Engineering Summer Academy @ UPenn</li>
                        <li>I do digital drawing as a hobby!</li>
                      </ul>
                    </div>
                  </Card>
                  

                </CardSwap>
              </div>
            </div>
          </div>

          <div className="bg-prettyp p-6 md:p-12 lg:p-18 flex flex-col lg:flex-row w-full gap-8 items-start">

          <h2 className="text-left font-bold text-4xl md:text-5xl lg:text-6xl text-lightp whitespace-nowrap">
            GET IN TOUCH
          </h2>
          
          <div className="flex flex-col gap-6">
            <p className="text-lightp text-base md:text-lg max-w-2xl">
              Thank you for visiting my portfolio. I'm always open to discussing new opportunities, potential collaborations, or challenging projects that align with my skills!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              
              <span className="flex items-center gap-2 bg-lightp w-fit p-2 rounded-md shadow-lg">
                <IoIosMail className="text-2xl md:text-4xl text-prettyp shrink-0" /> 
                <p className="text-sm md:text-xl text-prettyp break-all">inquiries.ayin@gmail.com</p>
              </span>

              <a 
                href="https://www.linkedin.com/in/ashlee-yin-romero-63204223a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <span className="flex items-center gap-2 bg-lightp w-fit p-2 rounded-md shadow-lg hover:scale-105 transition-transform">
                  <IoLogoLinkedin className="text-2xl md:text-4xl text-prettyp shrink-0" /> 
                  <p className="text-sm md:text-xl text-prettyp">Ashlee Yin</p>
                </span>
              </a>

            </div>
          </div>
        </div>

          


        </div>
      
      

      
      <div className="p-2 bg-prettyp text-bold text-lightp">@Awangran 2026 All rights reserved</div>
      
    </div>
    
    
    </div>
  );
}
