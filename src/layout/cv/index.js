import "./index.less";

import React from "react";
import Social from "./social";
import { Tabs } from 'antd';
import { CodeFilled, FundFilled, IdcardFilled, ProjectFilled } from "@ant-design/icons";
import Profile from "./tabs/profile";
import WorkExperience from "./tabs/work-experience";
import Projects from "./tabs/projects";
import Orther from "./tabs/orther";

const CV = () => {

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: (
        <div className="flex justify-center items-center">
          <IdcardFilled />Profile
        </div>
      ),
      children: <Profile />,
    },
    
    {
      key: '2',
      label: (
        <div className="flex justify-center items-center">
          <CodeFilled />Work experience
        </div>
      ),
      children: <WorkExperience />,
    },
    {
      key: '3',
      label: (
        <div className="flex justify-center items-center">
          <ProjectFilled />Projects
        </div>
      ),
      children: <Projects />,
    },
    {
      key: '4',
      label: (
        <div className="flex justify-center items-center">
          <FundFilled />Orther
        </div>
      ),
      children: <Orther />,
    },
    
  ]

  return (
    <div className="w-screen md:h-screen h-auto md:overflow-hidden snap-y flex cv bg-cover fixed top-0 left-0 right-0 bottom-0 backdrop-blur intro-x">
      <div className="md:w-9/12 w-full md:h-4/6 h-auto p-2 md:p-0 md:absolute md:-translate-x-2/4 md:-translate-y-2/4 top-1/2 left-1/2 bg-white rounded-sm bg-opacity-60 shadow-md">
        <div className="w-full md:h-full h-auto overflow-auto relative grid grid-cols-3">
          <div className="md:col-span-1 col-span-3 md:h-auto h-64">
            <Social />
          </div>
          <div className="md:col-span-2 col-span-3 h-full overflow-auto">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CV;