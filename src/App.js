import React from 'react';
import { Button } from 'antd';
import("./App.less");

function App() {
  return (
    <div className="App">
      <Button type="primary" >Button</Button>
      <button className="font-light text-red">Button</button>
      <h1 className="text-3xl font-bold underline">
        Hello world!
    </h1>
    </div>
  );
}

export default App;
