import Business from "./components/Business";
import Feature from "./components/Feature";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Developers from "./components/Developers";
import Model from "./components/Model";
import Protoflio from "./components/Protoflio";
import Articles from "./components/Articles";
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="mt-28 space-y-12">
          <Home />
          <Feature />
          <Business />
          <Developers />
          <Model />
          <Protoflio />
          <Articles />
        </div>
      </div>
    </>
  );
}

export default App;
