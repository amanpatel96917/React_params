import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Params from "./Component/Params";
import User from "./Component/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/params" element={<Params /> } />
          <Route path="/user/:name" element={<User /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
