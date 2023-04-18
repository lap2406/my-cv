import React from 'react';
import Root from "./routes/root";


import("./App.less");

function App() {
  // const navigate = useNavigate();

  return (
    <div className="App">
      {/* <button className="font-light text-red" onClick={()=> navigate(routerLinks("QR"))}>Button</button> */}
      <Routers>
          <Route path="/" exact component={Home()} />
          <Route path="/qr" component={QRcodeGenerate()} />
          {/* <Route component={} /> */}
      </Routers>
    </div>
  );
}

export default App;
