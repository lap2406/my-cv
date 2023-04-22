import React from "react";
import About from './about';
import "./home.less";

const Home = () => {

  return (
    <div className="w-screen h-screen overflow-hidden snap-y flex home bg-cover">
        <About />
    </div>
  );
}
export default Home;