// import Hero from "@/app/home/Hero";
import Campaign from "./home/Campaign";
import Subscribe from "./home/Subscribe";
import Services from "./home/Services";
import Footer from "./home/footer/Footer";
import Nav from "./home/nav/Nav";
import Hero from "./home/Hero";
import About from "./about/about";

export default function Home() {
  return (
    <main>
      <Nav/>
      <Hero />
      <About/>
      <Campaign />
      <Subscribe />
      <Services />
      <Footer />
    </main>
  );
}
