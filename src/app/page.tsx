import Image from "next/image";
import Homes from "./home/page";
import Footer from "./footer/page";
import Populares from "./populares/page";
import MaisVendidos from "./maisVendidos/page";
import Banner from "./banner/page";
import Descontos from "./descontos/page";
import { JogosTiro } from "@/components/constants";

import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-black w-[100vw]">
      <Homes />
      <MaisVendidos sliders={JogosTiro} title="Most played games"/>
      <MaisVendidos sliders={JogosTiro} title="Shoot games"/>
      <Banner />
      <MaisVendidos sliders={JogosTiro} title="cute games"/>
      <Descontos />
      <MaisVendidos sliders={JogosTiro} title="Popular"/>
      <Footer />
    </main>
  );
}
