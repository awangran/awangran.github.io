import { useEffect, useRef } from 'react';
import './App.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import PreLoader from './component/PreLoader.jsx'

function App() {
  useEffect(()=>{
    Aos.init({
      duration:2000
    });
  }, [])
  

  const ref = useRef<HTMLDivElement | null>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };


  return (
    <>
    <PreLoader/>


    <div id='main'>
      <div id="inner">

    <section id='landing' data-aos='fade-up'>
      {/* <h1 className='text-9xl	mt-4'>awangran</h1> */}
      <img className='title' src='src/assets/title.png'></img>
      <h3 className='text-4xl	m-3'>hi! im ash. i like cats and creating stuff.  </h3>
      <p className='underline'>page under construction</p>
      <button className="btn m-5" onClick={handleClick}>get to know me</button>
    </section>

    <section data-aos='fade-up'>
      <div id='about-me' ref={ref}>
       <h2 className='text-6xl'>about me</h2>
        <p className='text-xl mx-6'>im a freshman comp sci student @ universidad de los andes. im into front-end development, quantum computing and electronics. i like doing hackathons and reading wuxia novels. i hope to learn more about cybersec and do more hardware projects. <br></br> in my free time i normally play violin, water plants, draw or cultivate to go beyond mortal limits.</p>
      </div>
    </section>

    <section id='skills' data-aos='fade-up'>
    <h2 className='text-6xl wow bounceIn'>skills</h2>

    <div className="logo-slider" id='logo-slider'>
      <div className="logos-slide" id='logos-slide'>
        <img src="/src/assets/icons/css.png" />
        <img src="/src/assets/icons/figma.png" />
        <img src="/src/assets/icons/html.png" />
        <img src="/src/assets/icons/js.png"/>
        <img src="/src/assets/icons/mongo.png" />
        <img src="/src/assets/icons/node.png" />
        <img src="/src/assets/icons/python.png" />
        <img src="/src/assets/icons/reacy.png" />
        <img src="/src/assets/icons/ts.png" />
        {/* <img src="/src/assets/icons/git.png" /> */}

      </div>
    </div>


    </section>

    <section id='proyects'>
    <h2 className='text-6xl' data-aos='fade-up'>projects</h2>
    <div className='cards'>

      <div className='card text-4xl text-center bg-pink my-6' data-aos="fade-left">
        <img className='banner' src='src/assets/banners/1.png'></img>
        
            <h3 className='mt-4 ml-6 text-yellow'>Niveles de Niveles</h3>
            <p className='text-xl ml-6 text-yellow'>An early warning application that mitigate the consequences of natural disasters. This project won the XVII Concurso Nacional de Programación in Colombia. It is made with react-native with the use of websockets to provide aid to people in disaster prone areas. The app is free and published to the App Store and Google Play store.</p>
            <div>
              <a href='https://github.com/NotARoomba/NivelesDeNiveles' target='_blank'><i className="text-yellow icon mx-6 fa-brands fa-github"></i></a>
              <a href='https://nivelesdeniveles.org/' target='_blank'><i className="text-yellow icon mx-6 fa-solid fa-link"></i></a>
            

            </div>
      </div>

      <div className='card text-4xl text-center bg-salmon my-6' data-aos="fade-right">
        <img className='banner' src='src/assets/banners/2.png'></img>
        
            <h3 className='mt-4 ml-6 text-pink'>Devoided</h3>
            <p className='text-xl ml-6 text-pink'>Devoided is an RPG game developed in a hackathon about quantum engineer that explores space-time in search of traces of a deck of ancient Earth, but in his search he becomes trapped in the past. Developed with Unity, and sprites were digitally drawn.</p>
            <div>
            <a href='https://github.com/NotARoomba/Devoided' target='_blank'><i className="text-pink icon mx-6 fa-brands fa-github"></i></a>
            <a href='https://devoided.notaroomba.dev/' target='_blank'></a>
            <i className="text-pink icon mx-6 fa-solid fa-link"></i>

            </div>
      </div>

      <div className='card text-4xl text-center bg-yellow my-6' data-aos="fade-left">
        <img className='banner' src='src/assets/banners/3.png'></img>
        
            <h3 className='mt-4 ml-6 text-orange'>Flower pcb nfc card</h3>
            <p className='text-xl ml-6 text-orange'>Flower shaped pcb with nfc chip. Design focused electronics project that works as a presentation card and keychain. Inspired by Hack Club Hacker card tutorial.</p>
            <div>
              <a href='https://github.com/awangran/flowerPCB' target='_blank'><i className="text-orange icon mx-6 fa-brands fa-github"></i></a>
            
            </div>
      </div>

      <div className='card text-4xl text-center bg-lime my-6' data-aos="fade-right">
        <img className='banner' src='src/assets/banners/4.png'></img>
        
            <h3 className='mt-4 ml-6 text-orange'>Hackathon projects</h3>
            <p className='text-xl ml-6 text-orange'>Devpost hackathons portofolio. Hackathon projects that are created based on problematics like food oasis, reading disabilities, cerebral palsy research, etc. </p>
            <div>
              <a href='https://devpost.com/awangran' target='_blank'> <i className="text-orange icon mx-6 fa-solid fa-link"></i></a>
           
            </div>
      </div>

      <div className='card text-4xl text-center bg-green my-6' data-aos="fade-left">
        <img className='banner' src='src/assets/banners/5.png'></img>
        
            <h3 className='mt-4 ml-6 text-pink'>Shu</h3>
            <p className='text-xl ml-6 text-pink'>Local media library with a twist. Coming soon...</p>
            
            <div>
            {/* <i className="text-orange icon mx-6 fa-brands fa-github"></i> */}
            </div>
      </div>

    </div>


    </section>

    <section id='awards' data-aos='fade-up'>
    <h2 className='text-6xl overflow'>awards / experience</h2>
    <div>
      <ul className='px-6'>
        <li>1st Place VI Colombian National High School Programming Contest </li>
        <li>1st LIT Enviromental Engineering Contest Anahuac Merida University</li>
        <li>Bow Seat Future Blue Youth Council Member '22</li>
        <li>Bow Seat Ocean Awareness program Fellowship Grant</li>
        <li>1st Overall Do-Re-Mi-Hacks, Major Hacking League</li>
        <li>1st Katy Youth Hacks hackathon, Girls Who Code </li>
        <li>2nd Place LIT Game Jam Anahuac Merida University</li>
        <li>2nd Place Data Science Competition 2023, Universidad del Norte</li>
        <li>2nd Place Advanced Category International Girls Only Hackathon, Shooting Star Foundation</li>
        <li>Intro to Quantum Computing Year Long course scholarship w/ Qubit x Qubit & IBM</li>
        <li>Complex Network Engineering Summer Academy @ UPenn</li>

      </ul> 
    </div>
    <img className='clouds' src='src/assets/clouds.png'></img>

    </section>


    <section id='socials' data-aos='fade-up'>
    <h2 className='text-6xl'>socials</h2>
    <p className=''>interested in what i do? send an email to work together <br></br>or stalk my social media</p>
    <div className='my-socials my-10'>
      <div className='socialdiv'>
        <div className='headshot'>
          <img src='src/assets/mishuheadshot.png'></img>
          
        </div>
        <div className='socialbar'>
          <a href='github.com/awangran/' target='_blank'><i className="text-yellow iconbar mx-4 fa-brands fa-github"></i></a>
        <a href='' target='_blank'><i className="text-yellow iconbar mx-4 fa-regular fa-envelope"></i></a>
        <a href='https://www.linkedin.com/in/ashlee-yin-romero-63204223a/' target='_blank'><i className="text-yellow iconbar mx-4 fa-brands fa-linkedin-in"></i></a>
        <a href='' target='_blank'><i className="text-yellow iconbar mx-4 fa-brands fa-slack"></i></a>

        </div>

      </div>
      <div className='spotify'>
      <iframe src="https://open.spotify.com/embed/playlist/0RM391APrQSsUMHiFkYsRH?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>

    </div>


    </section>
    
    </div>
    </div>
    </>
  )
}

export default App
