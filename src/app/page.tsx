import Image from "next/image";
import Homes from "./home/page";
import Footer from "./footer/page";
import Populares from "./populares/page";
import MaisVendidos from "./maisVendidos/page";
import Link from "next/link";
export default function Home() {
  return (
    <main className=" overflow-x-hidden bg-black w-[100vw]">
      <Homes />
      <Populares/>
      <MaisVendidos />
      <Footer />
      
    </main>
  );
}
  