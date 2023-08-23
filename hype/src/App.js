import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "./entry/entry";
import Login from "./login/login";
import Register from "./register/register";
// import Todo from "./todo/todo";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
