import React from "react";
import { Timeline } from "antd";

const WorkExperience = () => {
  const data = [
    {
      label: '2018-07 - 2020-03',
      children: 'Studying at FPT Polytechnic',
    },
    {
      label: '2020-03',
      children: 'Internship at Unitest . Co., Ltd',
    },
    {
      label: '2020-05',
      children: 'Graduated with honors majoring in web design at FPT Polytechnic',
    },
    {
      label: '2020-06',
      children: 'Working at NINA website design company',
    },
    {
      label: '2021-07',
      children: 'Working at Levinci Co., Ltd',
    },
    {
      label: '2022-06 - Now',
      children: 'Working at Công ty TNHH Gameloft Co., Ltd',
    },
]

  return (
    <div className="h-full w-full overflow-hidden">
      <div className="intro-x h-full">
        <div className="text-base font-normal h-full grid grid-cols-1 justify-center items-center w-full">
        <Timeline
        mode={"alternate"}
        items={data}
      />
        </div>
      </div>

    </div>
  );
}
export default WorkExperience;