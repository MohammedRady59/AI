import { Models } from "../data";
import NavAndTab from "./NavAndTab";

function Model() {
  return (
    <div className="container">
      <p className="text-lg font-medium pt-5 text-center">
        I <span className="text-secandary">{Models.name}</span>
      </p>
      <h2 className="text-2xl lg:text-6xl py-7 font-bold text-center">
        Unveil New Creative <br /> Horizons with Models
      </h2>
      <NavAndTab />
    </div>
  );
}

export default Model;
