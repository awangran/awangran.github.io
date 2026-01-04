"use client"
import Image from "next/image";
import StaggeredMenu from './components/menu';
import CurvedLoop from './components/CurvedLoop';



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
  return (
    <div className="flex justify-center bg-ivory w-100vw">
     <div style={{ height: '100vh' }}>
      <StaggeredMenu 
        accentColor="#d7fb91"
        isFixed = {true}
        items = {menuItems}
        socialItems = {socialItems}
      />
      <div className="w-xl flex align-top">
      <CurvedLoop 
        marqueeText="Welcome ✦ To ✦ My ✦ Portfolio ✦ Website ✦"
        speed={2}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="custom-text-style"
      />

      </div>
      
    </div>
    </div>
  );
}
