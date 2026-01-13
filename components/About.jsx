"use client";

function About() {
  return (
    <section className="flex justify-around gap-12 flex-col md:flex-row py-12">
      <div className="flex flex-col gap-2 basis-1/2">
        <h2 className="text-4xl md:text-6xl font-bold">About Us</h2>

        <p className="text-lg text-black/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit
          laudantium dignissimos. Ducimus voluptate exercitationem laborum
          atque, voluptatibus ullam officiis a nulla, vero voluptatem ad odit
          corporis repellendus? Consequuntur, nisi. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Inventore, molestiae!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 basis-1/2">
        <div className="flex flex-col ">
          <p className="text-6xl font-extrabold">10+</p>
          <p className="text-black/60">Years of Experience</p>
        </div>

        <div className="flex flex-col ">
          <p className="text-6xl font-extrabold">10+</p>
          <p className="text-black/60">Years of Experience</p>
        </div>

        <div className="flex flex-col ">
          <p className="text-6xl font-extrabold">1000+</p>
          <p className="text-black/60">Properties in our database</p>
        </div>

        <div className="flex flex-col ">
          <p className="text-6xl font-extrabold">95%</p>
          <p className="text-black/60">Satisfied Clients</p>
        </div>
      </div>
    </section>
  );
}

export default About;
