import React from "react";
import Navbar from "../../Component/Sheared/Navbar/Navbar";

const ErrorFallback = ({ error }) => {
    return (
       <div>
        <Navbar></Navbar>

        <div className="w-full h-[90vh] flex flex-col justify-center items-center">
            <h3 className="text-[#1a8862] text-5xl font-bold italic">404</h3>
            <p className="text-[#1a8862] text-[12px] font-">Page not found</p>
            <p className="text-[#64748b] font-medium">{error?.message || "An unexpected error occur"}</p>
        </div>
       </div>
    );
};

export default ErrorFallback;