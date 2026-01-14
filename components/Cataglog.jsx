"use client";

import Carousel from "./Carousel";

function Catalog() {
  return (
    <section className="flex justify-between gap-12 flex-col md:flex-row py-12">
      <div className="flex flex-col gap-4 basis-1/2">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our Professional <br /> Services
        </h2>

        <p className="text-lg text-black/60">
          Comprehensive certification, training, and compliance solutions
        </p>
      </div>

      <Carousel />
    </section>
  );
}

export default Catalog;
