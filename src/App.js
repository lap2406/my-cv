import React from 'react';
import { Button } from 'antd';
// import { useNavigate } from "react-router";
// import { routerLinks } from 'utils';
import QRcodeGenerate from 'layout/qrcode';
import("./App.less");

function App() {
  // const navigate = useNavigate();

  return (
    <div className="App">
      {/* <button className="font-light text-red" onClick={()=> navigate(routerLinks("QR"))}>Button</button> */}
      {QRcodeGenerate()}
    </div>
  );
}

export default App;
