import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Users from "./pages/users";
import Dashboard from "./pages/dashboard";
import Admin from "./pages/admin";
import Employees from "./pages/employees";
import Projects from "./pages/projects";
import Repositories from "./pages/repositories";
import { useState } from "react";
import CounterContextProvider from "./context/counter-context";
function App() {
  // const props = {title:'some title', description:'some description', link:'/'}
  // const {title, description, link} = props
  // const [counter, setCounter] = useState(0);

  return (
    <BrowserRouter>
    <CounterContextProvider>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/users" element={<Users />} />
        <Route path="/repos/:login" element={<Repositories />} />
        {/* <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='users' element={<Users/>}/>
          <Route path='admin' element={<Admin/>}/>
          <Route path='employees' element={<Employees/>}/>
        </Route> */}
      </Routes>
    </CounterContextProvider>
      {/* <h1>This is footer</h1> */}
    </BrowserRouter>
  );
}

export default App;
