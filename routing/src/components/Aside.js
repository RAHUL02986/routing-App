import React from "react";
import {NavLink } from 'react-router-dom'

class Aside extends React.Component{
    render(){
        return(
            <>
        <div className="aside">
            <ul>
                <NavLink activeHouseClass="active" to="/"><li className="aside-li"><i class="fa-solid fa-house"></i><span>Home</span></li></NavLink>
                <NavLink activeHouseClass="active" to="/article"><li className="aside-li"><i class="fa-regular fa-newspaper"></i><span>Articles</span></li></NavLink>
                <NavLink activeHouseClass="active" to="/people"><li className="aside-li"><i class="fa-solid fa-people-robbery"></i><span>People</span></li></NavLink>
                <NavLink activeHouseClass="active" to="/book"><li className="aside-li"><i class="fa-solid fa-book"></i><span>Books</span></li></NavLink>
                <NavLink activeHouseClass="active" to="/help"><li className="aside-li"><i class="fa-solid fa-phone"></i><span>Help & Support</span></li></NavLink>

            </ul>
</div>
            
            </>
        )
    }
}
export  default Aside ;