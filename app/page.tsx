import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";
import { Services } from "@/components/sections/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <About />
      <Contact />
    </>
  );
}
