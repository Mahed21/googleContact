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
import AuthProvider from "./Context/AuthProvider";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Contact />}></Route>
            <Route path="/trash" element={<Trash />}></Route>
            <Route path="/createContact" element={<CreateContact />}></Route>
            <Route path="/updateContact" element={<UpdateContact />}></Route>
            <Route path="/label" element={<Label />}></Route>
            <Route path="/getLebelData" element={<GetLebelData />}></Route>
            <Route path="/bin" element={<Bin />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
