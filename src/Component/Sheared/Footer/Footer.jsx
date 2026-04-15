import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center bg-[#244d3f] pt-20 px-3'>
            <div className='space-y-4 pb-15'>
                <h1 className='font-bold text-white text-6xl'>Keen<span className='font-medium'>Keeper</span></h1>
                <p className='text-white opacity-80'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div className='space-y-3'>
                    <p className='font-semibold text-white text-xl'>Social Links</p>
                    <div className='flex justify-center items-center gap-2'>
                        <img src="/assets/instagram.png" alt="" />
                        <img src="/assets/facebook.png" alt="" />
                        <img src="/assets/twitter.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='text-[#fafafa] opacity-50 w-[80%] flex flex-col md:flex-row gap-3 md:gap-0 justify-between pb-5'>
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex gap-3 md:gap-10 text-[14px] justify-center items-center'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;