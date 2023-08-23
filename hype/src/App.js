import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "./entry/entry";
import Login from "./login/login";
import Register from "./register/register";
import Layout from "./todo/layout";
import Todo from "./todo/todo";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/todo" element={<Layout />}>
          <Route index element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
