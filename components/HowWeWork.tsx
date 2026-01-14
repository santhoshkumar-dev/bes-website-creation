import { HdIcon, Icon, MessageCircle } from "lucide-react";

const HowWeWork = () => {
  return (
    <section className="flex justify-between flex-col md:flex-row py-12 md:gap-18">
      <div className="flex flex-col gap-2 basis-1/3">
        <h2 className="text-4xl md:text-6xl font-bold">How we work</h2>

        <p className="text-lg text-black/60">
          A wide selection of properties for your business
        </p>

        <div className="h-[700px] hidden md:block">
          <img
            src="hero.jpg"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center py-4 gap-2 basis-1/2 divide-y divide-secondary-100 md:py-8">
        {[
          { title: "Consultation and needs analysis", icon: <HdIcon /> },
          { title: "Property search and selection", icon: <HdIcon /> },
          { title: "Negotiation and closing", icon: <MessageCircle /> },
          { title: "After-sales support", icon: <HdIcon /> },
          { title: "After-sales support", icon: <HdIcon /> },
        ].map((item, index) => (
          <div
            key={index}
            className="flex gap-6 p-6 transition-all duration-300 hover:bg-secondary-50 group cursor-pointer"
          >
            <div>
              <div className="p-4 rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-black/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                dolores consequatur iure asperiores ducimus totam molestias quos
                perspiciatis iusto eligendi, molestiae incidunt provident.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
