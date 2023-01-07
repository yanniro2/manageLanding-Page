import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Manage from "./Components/Manage";
import Testimonial from "./Components/Testimonial"
import Banner from "./Components/Banner"
import MobileNav from "./Components/MobileNav";
import { useState } from "react";


function App()
{

  const [hide, setHide] = useState(null);
  const menuClick = () =>
  {
    setHide(!hide);
  }
  return (
    <div className="App h-full w-full font-viet text-normal flex flex-col relative bg-White overflow-hidden  scroll-smooth Mobile:text-[14px] ">
      <Header menuClick={menuClick} />
      <HeroSection />
      <Manage />
      <Testimonial />
      <Banner />
      <Footer />
      {hide && <MobileNav menuClick={menuClick} />}
    </div>
  );
}

export default App;
