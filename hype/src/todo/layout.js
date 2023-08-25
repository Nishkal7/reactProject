import React from 'react';
import { Outlet } from "react-router-dom";
import './layout.css'

const Layout = () => {

    // const navigate = useNavigate();

    // const logout = () => {
    //     navigate("/", { replace: true })
    // }

    return (
        <div>
            <div className='todoTitle'>
                <div className='todoTitleInnerView'>
                    <div className='title'>
                       <div style={{color: 'white', paddingRight:'10px'}}>TODO</div>
                       <div style={{color: 'skyblue'}}>LIST</div> 
                        </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
};

export default Layout;