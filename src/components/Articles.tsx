import { articles, articlesData } from "../data";
import photo1 from "../assets/imgs/blog-1.jpg";
import photo2 from "../assets/imgs/blog-2.jpg";
import photo3 from "../assets/imgs/blog-3.jpg";
import { Calculator, Timer } from "lucide-react";

function Articles() {
  const photos = [
    { src: photo1, alt: "testimonial-1" },
    { src: photo2, alt: "estimonial-2" },
    { src: photo3, alt: "testimonial-3" },
  ];
  return (
    <div className="container">
      <div className="flex md:items-center gap-3 flex-col md:flex-row  ">
        <div className="md:flex-1">
          <p className="text-lg font-medium ">
            I <span className="text-secandary">{articles.name}</span>
          </p>
          <h2 className="text-2xl lg:text-4xl py-4  font-bold  ">
            {articles.header}
          </h2>
          <p className=" w-1/2 text-lg">{articles.parargraph}</p>
        </div>
        <div>
          <button className="px-4 py-2 bg-secandary rounded-lg text-xl">
            Most Post
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {articlesData.map((el, idx) => (
          <div className="flex flex-col gap-3 " key={idx}>
            <div className="relative">
              <img
                src={photos[idx].src}
                alt={photos[idx].alt}
                loading="lazy"
                className="block  w-full"
              />
              <div className="absolute right-3 bottom-5 bg-[#05051e75] p-2 rounded-lg">
                <p className="flex gap-2 items-center">
                  {" "}
                  <Calculator size={"15px"} />
                  {el.name} <Timer size={"15px"} />
                  {el.jop}
                </p>
              </div>
            </div>{" "}
            <p className="text-3xl font-semibold  hover:text-secandary cursor-pointer">
              {el.parargraph}
            </p>
            <span className="text-lg  border-b-2 w-fit  cursor-pointer hover:border-b-0 hover:text-secandary">
              Read More
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
