import Slider from "react-slick";
import photo2 from "../assets/imgs/white-brand-2.png";
import photo3 from "../assets/imgs/white-brand-3.png";
import photo4 from "../assets/imgs/white-brand-4.png";
import photo5 from "../assets/imgs/white-brand-5.png";

function SliderBusiness() {
  const photos = [
    { src: photo4, alt: "brand1" },
    { src: photo2, alt: "brand2" },
    { src: photo3, alt: "brand3" },
    { src: photo4, alt: "brand4" },
    { src: photo5, alt: "brand5" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="filter transition-all duration-300 hover:brightness-100 brightness-50 cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderBusiness;
