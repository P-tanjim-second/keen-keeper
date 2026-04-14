import { ChartLine, Clock4, House } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <a className="text-xl font-bold">Keen<span className='text-[#244d3f] font-semibold'>Keeper</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-1">
                        <li className='text-[#64748b]'><NavLink to={'/'} className={({isActive}) => `p-0.5 sm:p-2 gap-0.5 sm:gap-1 ${isActive ? "bg-[#244d3f] font-semibold text-white" : "bg-white text-[#64748b]"}`}><House size={18} />Home</NavLink></li>

                        <li className='text-[#64748b]'><NavLink to={'/timeline'} className={({isActive}) => `p-0.5 sm:p-2 gap-0.5 sm:gap-1 ${isActive ? "bg-[#244d3f] font-semibold text-white" : "bg-white text-[#64748b]"}`}><Clock4 size={18}/>Timeline</NavLink></li>
                        
                        <li className='text-[#64748b]'><NavLink to={'/status'} className={({isActive}) => `p-0.5 sm:p-2 gap-0.5 sm:gap-1 ${isActive ? "bg-[#244d3f] font-semibold text-white" : "bg-white text-[#64748b]"}`}><ChartLine size={18}/>Status</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;