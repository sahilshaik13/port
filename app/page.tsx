import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import Enterprise from "@/components/enterprise";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Enterprise /> {/* Adding the enterprise section here */}
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}