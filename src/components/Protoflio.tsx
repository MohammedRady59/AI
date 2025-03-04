import photo from "../assets/imgs/testimonial-1.png";
import photo2 from "../assets/imgs/testimonial-2.png";
import photo3 from "../assets/imgs/testimonial-3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideTestimonial } from "../data";

function Protoflio() {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    appendDots: (dots: any) => (
      <div>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    customPaging: (i: any) => {
      const isActive = i;
      return (
        <div
          style={{
            width: "10px",
            marginTop: "20px",
            height: "10px",
            borderRadius: "50%",
            border: `2px solid ${isActive ? "#fff" : "#43a5fe"}`,
          }}
        ></div>
      );
    },
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
    { src: photo, alt: "testimonial-1" },
    { src: photo2, alt: "estimonial-2" },
    { src: photo3, alt: "testimonial-3" },
  ];

  return (
    <div className="portfolio ">
      <div className="container ">
        <div className="slider-container">
          <Slider {...settings}>
            {slideTestimonial.map((el, idx) => (
              <div key={idx} className="px-2">
                <div className="flex flex-col lg:flex-row  shadow-lg rounded-lg overflow-hidden">
                  <div className="lg:w-1/2 p-6 flex flex-col justify-center  bg-[#d68cff14]">
                    <p className=" text-lg">{el.parargraph}</p>
                    <h2 className="text-2xl font-bold mt-4">{el.name}</h2>
                    <p className="">{el.jop}</p>
                  </div>
                  <div className="lg:w-1/2">
                    <img
                      src={photos[idx].src}
                      alt={photos[idx].alt}
                      loading="lazy"
                      className="w-full h-64 lg:h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Protoflio;
