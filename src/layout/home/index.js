import { Input, QRCode } from 'antd';
import React from "react";

const Home = () => {
  const [text, setText] = React.useState('');

  return (
    <div className="w-screen h-screen flex">
    <div className="grid grid-cols-1 m-auto w-96 gap-5">
        <div className="text-xl font-bold">
          Home
        </div>
        <div className="m-auto">
          <QRCode size={300} value={text || '-'} />
        </div>
        <Input
          showCount={true}
          placeholder="Enter Link"
          maxLength={200}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
    </div>
    </div>
  );
}
export default Home;