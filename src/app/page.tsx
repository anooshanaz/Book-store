import Navbar from "@/Components/Navbar";
import Image from "next/image";
import Hero from "@/Components/Hero";
import Card from "@/Components/Card";
import Footer from "@/Components/Footer";

export default function Home() {
  return(
    <main>
      <Navbar/>
      <Hero/>
      <Card/>
      <Footer/>
    </main>
  );
}
