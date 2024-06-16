import "./App.css";
import AddTodo from "./components/AddTodo";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateTodo from "./components/UpdateTodo";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addtodo" element={<AddTodo />} />
          {/* <Route path="/update" element={<UpdateTodo />} /> */}
          <Route
            path="*"
            element={
              <div className="flex justify-center items-center">
                Hey man check the URL again
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
