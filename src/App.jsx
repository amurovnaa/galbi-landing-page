import { useState } from "react";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Footer />
    </div>
  );
}

export default App;
