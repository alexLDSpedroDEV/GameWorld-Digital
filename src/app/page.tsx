import Image from "next/image";
import Homes from "./home/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <main className=" overflow-x-hidden bg-black w-[100vw]">
      <Homes />
      <Footer />
    </main>
  );
}
  