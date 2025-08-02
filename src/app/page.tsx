import MotionWrap from "@/components/MotionWrap";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <MotionWrap>
        <Hero />
      </MotionWrap>
      <MotionWrap>
        <About />
      </MotionWrap>
      <MotionWrap>
        <Projects />
      </MotionWrap>
      <MotionWrap>
        <Skills />
      </MotionWrap>
      <MotionWrap>
        <Contact />
      </MotionWrap>
    </div>
  );
}
