import { Input, QRCode } from 'antd';
import React from "react";

const QRcodeGenerate = () => {
  const [text, setText] = React.useState('');
  const [number, setNumber] = React.useState();
  

  return (
    <div className="w-screen h-screen flex">
    <div className="grid grid-cols-1 m-auto w-96 gap-5">
        <div className="text-xl font-bold text-center">
          QR Code Generation
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
        <Input value={text}
          onChange={(e) => setNumber(Number(e.target.value) - 3600000)}
        />
        {number}
    </div>
    </div>
  );
}
export default QRcodeGenerate;