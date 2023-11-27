import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/mynavbar/MyNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Contacto from "./views/Contacto/Contacto";
import Error from "./views/Error/Error";

const App = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
};

export default App;
