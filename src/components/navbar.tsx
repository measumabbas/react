import {Link} from 'react-router-dom'
function Navbar(){
    return <div className='mb-8'>
        <ul className="navbar">
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/services"><li>Services</li></Link>
            <Link to="/users"><li>Users</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
        </ul>
    </div>
}

export default Navbar