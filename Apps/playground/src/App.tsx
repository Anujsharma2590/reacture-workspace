import React from "react";
import { Button, ReactureProvider } from "@reacture/core";

const App: React.FC = () => (
  <ReactureProvider>
    <div style={{ padding: "20px" }}>
      <h1>Hello from Playground App</h1>
      <Button label="Click Me!" primary />
    </div>
  </ReactureProvider>
);

export default App;
