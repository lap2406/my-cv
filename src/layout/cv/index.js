import "./index.less";

import React from "react";
import Social from "./social";
import { Tabs } from 'antd';
import profileImg from "assets/icon/profile.svg"
import { UserOutlined } from "@ant-design/icons";
import Profile from "./tabs/profile";

const CV = () => {

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: (
        <div className="flex justify-center items-center gap-2">
          Profile <UserOutlined />
        </div>
      ),
      children: <Profile />,
    },
    {
      key: '2',
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ]

  return (
    <div className="w-screen h-screen overflow-hidden snap-y flex cv bg-cover fixed top-0 left-0 right-0 bottom-0 backdrop-blur">
      <div className="md:w-9/12 w-full md:h-4/6 h-full p-2 md:p-0 absolute -translate-x-2/4 -translate-y-2/4 top-1/2 left-1/2 bg-white rounded-sm bg-opacity-60 shadow-md">
        <div className="w-full h-full relative grid grid-cols-3">
          <div className="md:col-span-1 col-span-3">
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