import Feature from "@/components/Feature";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Slider />
        <Feature />
        <Offer />
      </main>
    </div>
  );
}
