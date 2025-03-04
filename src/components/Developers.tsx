import { developers, slideDevelopers } from "../data";
import photo2 from "../assets/imgs/team-1.png";
import photo3 from "../assets/imgs/team-2.png";
import photo4 from "../assets/imgs/team-3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Developers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const photos = [
    { src: photo4, alt: "team1" },
    { src: photo2, alt: "team2" },
    { src: photo3, alt: "team3" },
  ];

  return (
    <div className="developer">
      <div className="container flex flex-col md:flex-row gap-5">
        <div className="flex flex-col md:w-1/2">
          <p className="text-lg font-medium pt-5">
            I <span className="text-secandary">{developers.name}</span>
          </p>
          <h2 className="text-2xl lg:text-6xl py-10 font-bold">
            {developers.header}
          </h2>
          <p className="text-[#b9b9ba] text-lg">{developers.parargraph}</p>
        </div>
        <div className="md:w-1/2">
          <div className="slider-container">
            <Slider {...settings}>
              {slideDevelopers.map((el, idx) => (
                <div
                  className="relative overflow-hidden w-fit group "
                  key={idx}
                >
                  <img
                    src={photos[idx].src}
                    alt={photos[idx].alt}
                    className="w-full md:w-[350px] object-cover"
                  />
                  <div className="absolute bottom-0 z-20 px-3 translate-y-[75%] group-hover:translate-y-0 transition-transform duration-300 group-hover:bg-[#00000070] h-full">
                    <p className="text-2xl font-medium py-4">{el.name}</p>
                    <p className="font-medium text-secandary">{el.jop}</p>
                    <hr />
                    <p className="text-[#ffffff] text-lg py-2">
                      {el.parargraph}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developers;
