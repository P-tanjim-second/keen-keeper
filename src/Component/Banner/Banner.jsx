import { Plus } from 'lucide-react';
import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto py-15 flex flex-col justify-center items-center text-center gap-5'>
            <h1 className='text-xl sm:text-4xl md:text-4xl lg:text-5xl font-bold'>Friends to keep close in your life</h1>
            <p className='text-[#64748b] text-[12px] md:text-base w-[90%] md:w-[60%] lg:w-[40%]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <button className='btn bg-[#244d3f] text-white px-2'><Plus /> Add a Friend</button>

            <div className='flex gap-7 flex-wrap mt-5 justify-center items-center'>
                <div className='py-7 shadow-[0px_0px_10px_10px_rgba(244,244,244,1)] min-w-65 rounded-xl space-y-1'>
                    <h3 className='text-[#244d3f] text-2xl font-bold'>10</h3>
                    <p className='text-[#64748b]'>Total Friends</p>
                </div>
                <div className='py-7 shadow-[0px_0px_10px_10px_rgba(244,244,244,1)] min-w-65 rounded-xl space-y-1'>
                    <h3 className='text-[#244d3f] text-2xl font-bold'>10</h3>
                    <p className='text-[#64748b]'>On Track</p>
                </div>
                <div className='py-7 shadow-[0px_0px_10px_10px_rgba(244,244,244,1)] min-w-65 rounded-xl space-y-1'>
                    <h3 className='text-[#244d3f] text-2xl font-bold'>10</h3>
                    <p className='text-[#64748b]'>Need Attention</p>
                </div>
                <div className='py-7 shadow-[0px_0px_10px_10px_rgba(244,244,244,1)] min-w-65 rounded-xl space-y-1'>
                    <h3 className='text-[#244d3f] text-2xl font-bold'>10</h3>
                    <p className='text-[#64748b]'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;