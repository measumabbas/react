import { Link, useLocation } from "react-router-dom"

export default function SideBar()
{
    const location = useLocation()
    console.log(location.pathname)
    return <ul className="w-[200px] border-r border-black/20 h-[80vh] py-8">
        <Link to='/dashboard/users'><li className={`px-4 py-1 hover:bg-black/20 ${location.pathname === '/dashboard/users'?'bg-black/20':'bg-white'}`}>Users</li></Link>
        <Link to='/dashboard/admin'><li className={`px-4 py-1 hover:bg-black/20 ${location.pathname === '/dashboard/admin'?'bg-black/20':'bg-white'}`}>admin</li></Link>
        <Link to='/dashboard/employees'><li className={`px-4 py-1 hover:bg-black/20 ${location.pathname === '/dashboard/employees'?'bg-black/20':'bg-white'}`}>employees</li></Link>
    </ul>
}