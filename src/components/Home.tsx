import { useEffect } from "react";
import Typed from "typed.js";
import { hobby } from "../data";

function Home() {
  useEffect(() => {
    const options = {
      strings: ["Artificial Intelligence"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    };

    const typed = new Typed(".moveLetter", options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="home flex items-center flex-col justify-center text-center  ">
      <div className="space-y-5">
        {" "}
        <p className="text-lg font-medium ">
          I <span className="text-secandary">Aithm Image Generator</span>
        </p>
        <h1 className="text-3xl md:text-7xl py-16 font-extrabold">
          Create beautiful art with
          <br />
          <span className="moveLetter text-secandary"></span>
        </h1>
        <div className="relative">
          <input
            type="text"
            className="bg-[#ffffff0d] px-5 py-4 rounded-xl w-full focus:border-transparent focus:outline-0  "
            placeholder="Write your prompt and get you best ai artwork!"
          />
          <button className="bg-secandary md:px-4 px-2 md:py-3 py-1 rounded-lg md:absolute hidden right-3  md:top-1 top-3">
            Generate
          </button>
        </div>
        <div className="flex items-center justify-center flex-col md:flex-row">
          <p className="text-lg mr-3">Quick Try :</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {hobby.map((el, idx) => (
              <span
                className="px-3 py-2 bg-[#ffffff0d] rounded-md hover:bg-secandary cursor-pointer "
                key={idx}
              >
                {el}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
