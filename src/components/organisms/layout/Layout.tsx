import React from "react";
import { Outlet } from "react-router-dom";

const MasterLayout: React.FC = () => {
    return (
        <div>
            <div className="">
                <h1 className="bg-red-700">Master Layout</h1>
                <h2>Header</h2>
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <h2>How are U?</h2>
            </div>
        </div>

    );
}

export default MasterLayout;