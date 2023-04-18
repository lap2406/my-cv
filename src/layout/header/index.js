import { Input, QRCode } from 'antd';
import React from "react";

const Header = () => {
  const [text, setText] = React.useState('');

  return (
    <div className="w-screen h-10 flex bg-slate-300">
    <div className="text-xl font-bold text-center">
          Header
        </div>
    </div>
  );
}
export default Header;