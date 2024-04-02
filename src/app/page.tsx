import Image from "next/image";
import Homes from "./home/page";
import Footer from "./footer/page";
import MaisVendidos from "./maisVendidos/page";
import Banner from "./banner/page";
import Descontos from "./descontos/page";
import { JogosTiro, RpgGames, images, SurvavelGames} from "@/components/constants";

import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-black w-[100vw]">
      <Homes />
      <MaisVendidos sliders={JogosTiro} title="Most played games"/>
      <MaisVendidos sliders={RpgGames} title="Rpg Games"/>
      <Banner />
      <MaisVendidos sliders={JogosTiro} title="Shoot Games"/>
      <Descontos />
      <MaisVendidos sliders={SurvavelGames} title="Survavel Games"/>
      <MaisVendidos sliders={SurvavelGames} title="Survavel Games"/>
      <Footer />
    </main>
  );
}
