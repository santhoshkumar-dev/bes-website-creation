import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import ScrollingBanner from "../components/ScrollingBanner";
import Cataglog from "../components/Cataglog";
import { Spacer } from "@heroui/react";
import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6 } from "../components/logos";

const logos = [
  {
    key: "logo-1",
    logo: Logo1,
  },
  {
    key: "logo-2",
    logo: Logo2,
  },
  {
    key: "logo-3",
    logo: Logo3,
  },
  {
    key: "logo-4",
    logo: Logo4,
  },
  {
    key: "logo-5",
    logo: Logo5,
  },
  {
    key: "logo-6",
    logo: Logo6,
  },
];

export default function Home() {
  return (
    <main className="space-y-6 md:space-y-12">
      <NavBar />
      <Hero />
      <About />

      <section className="mx-auto w-full px-6 md:px-12">
        <ScrollingBanner shouldPauseOnHover duration={50} gap="40px">
          {logos.map(({ key, logo }) => (
            <div
              key={key}
              className="flex items-center justify-center text-foreground"
            >
              {logo}
            </div>
          ))}
        </ScrollingBanner>
        <Spacer y={12} />
      </section>

      <Cataglog />
    </main>
  );
}
