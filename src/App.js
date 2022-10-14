import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Trash from "./Pages/Trash";
import CreateContact from "./Pages/CreateContact/CreateContact";
import UpdateContact from "./Pages/Contact/UpdateContact";
import Label from "./Pages/Contact/Label";
import GetLebelData from "./Pages/Contact/GetLebelData";
import Bin from "./Pages/Bin/Bin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Contact />}></Route>
          <Route path="/trash" element={<Trash />}></Route>
          <Route path="/createContact" element={<CreateContact />}></Route>
          <Route path="/updateContact" element={<UpdateContact />}></Route>
          <Route path="/label" element={<Label />}></Route>
          <Route path="/getLebelData" element={<GetLebelData />}></Route>
          <Route path="/bin" element={<Bin />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
