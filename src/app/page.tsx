import Image from "next/image";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import SpaceCard from "@/components/SpaceCard";
import Footer from "@/components/Footer";
import HowitWork from "@/components/HowitWork";

export default function Home() {
  return (
      <main>
        <Banner />
        <Features />
        <HowitWork />
        <Footer />

       
      </main>
  );
}
