import { Outlet } from "react-router-dom"
import SideBar from "../components/sidebar"

function Dashboard(){
    return <div className="flex">
        <SideBar/>

        <div className="p-4">
            <Outlet/>
        </div>
    </div>
}

export default Dashboard