import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar />
            <div style={{ flex: 1, padding: "20px" }}>
                <Outlet /> {/* This will render the nested routes */}
            </div>
        </div>
    );
}

// Remove the named export and use only default export
export default Layout;