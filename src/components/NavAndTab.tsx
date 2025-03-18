import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
  galleryCreative,
  galleryDesign,
  galleryImages,
  galleryImagesAnmaite,
} from "../data";

function NavAndTab() {
  return (
    <TabGroup className={"mt-4"}>
      <TabList
        className={
          "flex justify-center items-center gap-9  font-bold text-lg  flex-wrap    "
        }
      >
        <Tab>
          {" "}
          <p className="p-2 relative cursor-pointer group ">
            <a className="relative py-1 text-lg">
              All
              <span className="absolute left-0 bottom-0 block h-[2px] w-0 bg-[#43a5fe] transition-all duration-500 group-hover:w-full"></span>
            </a>
          </p>
        </Tab>
        <Tab>
          {" "}
          <p className="p-2 relative cursor-pointer group ">
            <a className="relative py-1 text-lg">
              Creative
              <span className="absolute left-0 bottom-0 block h-[2px] w-0 bg-[#43a5fe] transition-all duration-500 group-hover:w-full"></span>
            </a>
          </p>
        </Tab>
        <Tab>
          {" "}
          <p className="p-2 relative cursor-pointer group ">
            <a className="relative py-1 text-lg">
              Anmiate
              <span className="absolute left-0 bottom-0 block h-[2px] w-0 bg-[#43a5fe] transition-all duration-500 group-hover:w-full"></span>
            </a>
          </p>
        </Tab>
        <Tab>
          {" "}
          <p className="p-2 relative cursor-pointer group ">
            <a className="relative py-1 text-lg">
              Design
              <span className="absolute left-0 bottom-0 block h-[2px] w-0 bg-[#43a5fe] transition-all duration-500 group-hover:w-full"></span>
            </a>
          </p>
        </Tab>
      </TabList>
      <TabPanels className={"mt-7"}>
        <TabPanel>
          <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((el, idx) => (
              <div key={idx} className="overflow-hidden">
                <img
                  src={el}
                  loading="lazy"
                  className="block hover:scale-125  transition-all duration-500 ease-in cursor-pointer w-full "
                />
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {" "}
          <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {galleryCreative.map((el, idx) => (
              <div key={idx} className="overflow-hidden">
                <img
                  src={el}
                  loading="lazy"
                  className="block hover:scale-125  transition-all duration-500 ease-in cursor-pointer w-full "
                />
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {" "}
          <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {galleryImagesAnmaite.map((el, idx) => (
              <div key={idx} className="overflow-hidden">
                <img
                  src={el}
                  loading="lazy"
                  className="block hover:scale-125  transition-all duration-500 ease-in cursor-pointer w-full "
                />
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {" "}
          <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {galleryDesign.map((el, idx) => (
              <div key={idx} className="overflow-hidden">
                <img
                  src={el}
                  loading="lazy"
                  className="block hover:scale-125  transition-all duration-500 ease-in cursor-pointer w-full "
                />
              </div>
            ))}
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

export default NavAndTab;
