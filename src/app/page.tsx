import Image from "next/image";
import Homes from "./home/page";
import Footer from "./footer/page";
import Populares from "./populares/page";
import MaisVendidos from "./maisVendidos/page";
import Banner from "./banner/page";
import Descontos from "./descontos/page";

import Link from "next/link";
export default function Home() {
  return (
    <main className=" overflow-x-hidden bg-black w-[100vw]">
      <Homes />
      <Populares title="Popular"/>
      <MaisVendidos title="Best sellers"/>
      <Banner />
      <MaisVendidos title="Popular"/>
      <Descontos />
      <MaisVendidos title="Popular"/>
      <Footer />
    </main>
  );
}
  