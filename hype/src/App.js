import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Entry from "./entry/entry";
import Login from "./login/login";
import Register from "./register/register";
import Layout from "./todo/layout";
import Todo from "./todo/todo";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Entry />} /> */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Todo />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/todo" element={<Layout />}>
            <Route index element={<Todo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
