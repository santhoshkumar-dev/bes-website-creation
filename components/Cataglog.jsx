"use client";

import Carousel from "./Carousel";
import InfiniteParallaxCarousel from "./InfiniteParallaxCarousel";

function Catalog() {
  return (
    <section className="flex justify-between gap-12 flex-col md:flex-row py-12">
      <div className="flex flex-col gap-2 basis-1/2">
        <h2 className="text-4xl md:text-6xl font-bold">
          Property <br /> Catalog
        </h2>

        <p className="text-lg text-black/60">
          A wide selection of properties for your business
        </p>
      </div>

      {/* <InfiniteParallaxCarousel /> */}
      <Carousel />
    </section>
  );
}

export default Catalog;
