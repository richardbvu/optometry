import { useState } from "react";
import Navbar from "././scenes/navbar";
import Home from "./scenes/home";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      {/* <Home /> */}
    </div>
  );
}

export default App;
