import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import NavBar from "./components/NavBar/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* <Header /> */}
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
