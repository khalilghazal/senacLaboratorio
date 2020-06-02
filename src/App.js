import React from 'react';
import Home from './components/home/'
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
