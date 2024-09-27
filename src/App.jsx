
import { useEffect, useState } from 'react'
import About from './components/About'
import Banner from './components/banner'
import Portfolio from './components/portfolio'
import Services from './components/services'
import Skills from './components/skills'
import Testimonials from './components/Testimonials'
import Works from './components/works'
import { Color, Title1, Title2 } from '../context/context'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {


  const [titel1,setTitle1]=useState('title1')
  const [titel2,setTitle2]=useState('title2')
  const [color,setColor]=useState('text-white')

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // When 60% of section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);


  return (
    <>
    <Title1.Provider value={{titel1,setTitle1}}>
      <Title2.Provider value={{titel2,setTitle2}}>
        <Color.Provider value={{color,setColor}}>
      <section id='home'>
     <Banner activeSection={activeSection}/>
     </section>
     <section id='about'>
     <About />
     </section>
     <section id='services'>
     <Services />
     </section>
     <section id='skills'>
     <Skills />
     </section>
     <section id='education'>
     <Works />
     </section>
     <section id='portfolio'>
     <Portfolio />
     </section>
     <section id='testimonials'>
     <Testimonials />
     </section>
     <section id='contact'>
     <Contact />
     </section>
     <section id='footer'>
     <Footer />
     </section>

     </Color.Provider>
     </Title2.Provider>
     </Title1.Provider>
    </>
  )
}

export default App
