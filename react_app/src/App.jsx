import React from "react";
import { BrowserRouter } from "react-router-dom";
import Admin from "./pages/Admin";
import CareerPage from "./pages/CareerPage";

 

function App() {
  return (
    <BrowserRouter>
     <CareerPage></CareerPage>
    </BrowserRouter>
  );
}

export default App;
