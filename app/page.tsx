import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Reasons from "@/components/sections/Reasons";
import Message from "@/components/sections/Message";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Reasons />
        <Message />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
