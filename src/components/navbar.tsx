import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useCounter } from "../context/counter-context";

function Navbar() {
    const {counter} = useCounter()
  return (
    <div className="mb-8">
      <ul className="navbar">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
        <Link to="/users">
          <li>Users</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Button variant='outline'>{counter}</Button>
      </ul>
    </div>
  );
}

export default Navbar;
