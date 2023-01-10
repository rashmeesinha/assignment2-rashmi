import "./App.css";
import Navbar from "./Navbar/Navbar";
import Component1 from "./Component1/Component1";
import Component2 from "./Component2/Component2";
import Component3 from "./Component3/Component3";
import Component4 from "./Component4/Component4";
import Footer from "./Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4/>
      <Footer/>
    </div>
  );
}

export default App;
