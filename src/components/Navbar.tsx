import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { navbarLink } from "../data";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` w-full  fixed top-0 left-0 z-[1000] duration-500 font-main border-b-[1px]  border-[#1A243D] bluritem ${
        scrolled ? "py-4" : "py-2"
      }`}
    >
      <div className="md:flex items-center justify-between container  py-2   ">
        <p className="font-bold text-4xl  text-white">
          <a href="#">AI</a>
        </p>

        <div
          onClick={() => setOpen(!open)}
          className=" absolute right-8 top-8 cursor-pointer md:hidden py-1  "
        >
          <Menu color="#fff" />
        </div>

        <ul
          className={`mainnav md:flex md:items-center md:pb-0 pb-12  absolute md:static  text-white  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="p-2 relative cursor-pointer group">
            <a className="relative py-1 text-lg">
              Home
              <span className="absolute left-0 bottom-0 block h-[2px] w-full bg-[#43a5fe] transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li>

          {navbarLink.map((el, idx) => (
            <li className="p-2 relative cursor-pointer group " key={idx}>
              <a className="relative py-1 text-lg">
                {el}
                <span className="absolute left-0 bottom-0 block h-[2px] w-0 bg-[#43a5fe] transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
