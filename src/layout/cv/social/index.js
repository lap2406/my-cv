import React from "react";
import "./index.less";
import facebookIcon from "assets/icon/facebook.svg";
import githubIcon from "assets/icon/github.svg";

const Social = () => {

  const socialLink = {
    "facebook": "https://www.facebook.com/vtl2406/",
    "github": "https://github.com/lap2406",
  }
  const handleSocial = (type) => {
    window.location.href = socialLink[type]
  }

  return (
    <div className="flex justify-center items-center  overflow-hidden h-full w-full">
      <div className="group w-full h-full relative overflow-hidden rounded-sm ">
        <div className="avatar blur-none group-hover:blur-sm transition ease-in-out delay-150 avatar w-full h-full bg-cover">
          {/* <Image src={avatarImg} /> */}
        </div>
        <div className="flex absolute -bottom-10 translate-y-6 group-hover:-translate-y-32 justify-center gap-4 w-full  transition ease-in-out delay-150">
          <div className="w-10 cursor-pointer" onClick={() => handleSocial("facebook")}>
            <img className=" text-black" src={facebookIcon} alt="" />
          </div>
          <div className="w-10 cursor-pointer" onClick={() => handleSocial("github")}>
            <img className=" text-black" src={githubIcon} alt="" />
          </div>
        </div>
      </div>

    </div>
  );
}
export default Social;
