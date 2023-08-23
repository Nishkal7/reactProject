import React from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = () => {

    const navigate = useNavigate();

    const logout = () => {
        navigate("/", { replace: true })

    }
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/todo">Todo</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={logout}>Logout</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;