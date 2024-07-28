import { useState } from 'react'
import './App.css'

function App() {
 
  return (
    <div id='main'>
      <div id="inner" className="bg-[url('/assets/texture.png')]">

    <section id='landing'>
      <h1 className='text-9xl	mt-4'>awangran</h1>
      <h3 className='text-4xl	m-3'>hi! im ash. i like cats and creating stuff.  </h3>
      <button className="btn m-5">get to know me</button>
    </section>

    <section id='about-me'>
      <h2 className='text-6xl'>about me</h2>
      <p className='text-xl mx-20'>im a freshman comp sci student @ universidad de los andes. im into front-end development, quantum computing and electronics. i like doing hackathons and reading wuxia novels. i hope to learn more about cybersec and do more hardware projects. <br></br> in my free time i normally play violin, water plants, draw or cultivate to go beyond mortal limits.</p>
      
    </section>

    <section id='skills'>
    <h2 className='text-6xl'>skills</h2>

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
        <img src="/src/assets/icons/git.png" />

      </div>
    </div>


    </section>

    <section id='proyects'>
    <h2 className='text-6xl'>proyects</h2>
    <div className='cards'>

      <div className='card text-4xl text-center bg-pink my-6'>
        <img className='banner' src='src/assets/category-banner.png'></img>
        
            <h3 className='mt-4 ml-6 text-yellow'>Niveles de Niveles</h3>
            <p className='text-xl ml-6 text-yellow'>blablbllablal description</p>
            <div>
            <i className="text-yellow icon mx-6 fa-brands fa-github"></i>
            </div>
      </div>

      <div className='card text-4xl text-center bg-salmon my-6'>
        <img className='banner' src='src/assets/category-banner.png'></img>
        
            <h3 className='mt-4 ml-6 text-yellow'>Devoided</h3>
            <p className='text-xl ml-6 text-yellow'>blablbllablal description</p>
            <div>
            <i className="text-yellow icon mx-6 fa-brands fa-github"></i>
            </div>
      </div>

      <div className='card text-4xl text-center bg-yellow my-6'>
        <img className='banner' src='src/assets/category-banner.png'></img>
        
            <h3 className='mt-4 ml-6 text-green'>flower pcb nfc card</h3>
            <p className='text-xl ml-6 text-green'>blablbllablal description</p>
            <div>
            <i className="text-green icon mx-6 fa-brands fa-github"></i>
            </div>
      </div>

      <div className='card text-4xl text-center bg-lime my-6'>
        <img className='banner' src='src/assets/category-banner.png'></img>
        
            <h3 className='mt-4 ml-6 text-orange'>hackathon projects</h3>
            <p className='text-xl ml-6 text-orange'>blablbllablal description</p>
            <div>
            <i className="text-orange icon mx-6 fa-brands fa-github"></i>
            </div>
      </div>

      <div className='card text-4xl text-center bg-green my-6'>
        <img className='banner' src='src/assets/category-banner.png'></img>
        
            <h3 className='mt-4 ml-6 text-orange'>shu</h3>
            <p className='text-xl ml-6 text-orange'>coming soon...</p>
            <div>
            {/* <i className="text-orange icon mx-6 fa-brands fa-github"></i> */}
            </div>
      </div>

    </div>


    </section>

    <section id='awards'>
    <h2 className='text-6xl'>awards/experience</h2>


    </section>


    <section id='socials'>

    </section>
    
    </div>
    </div>
  )
}

export default App
