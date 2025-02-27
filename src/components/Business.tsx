import { useState } from "react";
import photo from "../assets/imgs/about-1.png";
import photo2 from "../assets/imgs/about-3.png";
import SliderBusiness from "./SliderBusiness";
import { Check } from "lucide-react";
import { business } from "../data";

function Business() {
  const [imgSrc, setImgSrc] = useState(photo2);

  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-5 items-center lg:items-start   ">
        <div>
          <img
            onMouseEnter={() => setImgSrc(photo)}
            onMouseLeave={() => setImgSrc(photo2)}
            loading="lazy"
            src={imgSrc}
            alt="photo"
            className="block w-5/6 h-5/6   "
          />
        </div>
        <div className=" flex flex-col lg:w-1/2 w-full  ">
          <p className="text-lg font-medium pt-10">
            I <span className="text-secandary">{business.name}</span>
          </p>
          <h2 className="text-2xl lg:text-6xl py-16  font-bold  ">
            {business.header}
          </h2>
          <p className="text-[#b9b9ba] text-lg">{business.parargraph}</p>
          <ul className="mt-8">
            <li className="flex gap-5 mt-2 items-center">
              {" "}
              <Check color="#43a5fe" />
              <span className="text-[#b9b9ba] text-lg">
                Natural Language Processing
              </span>
            </li>
            <li className="flex gap-5 mt-2 items-center">
              {" "}
              <Check color="#43a5fe" />
              <span className="text-[#b9b9ba] text-lg">
                AI refers to the simulation of human{" "}
              </span>
            </li>{" "}
            <li className="flex gap-5 mt-2 items-center">
              {" "}
              <Check color="#43a5fe" />
              <span className="text-[#b9b9ba] text-lg">
                Generating art, music, and literature.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <SliderBusiness />
      </div>
    </div>
  );
}

export default Business;
