import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";
import Gadgets from "@/components/Gadgets";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LineUp from "@/components/LineUp";
import Models from "@/components/Models";
import StoreDescription from "@/components/StoreDescription";
import Essentials from "@/components/Essentials";
import SignificantOthers from "@/components/SignificantOthers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Gadgets />
      <CTA />
      <Hero />
      <Features />
      <LineUp />
      <Models />
      <StoreDescription />
      {/* <Essentials />
      <SignificantOthers />
      <Footer /> */}
    </main>
  );
}
