import React from 'react';
import Banner from '../../Component/Banner/Banner';
import AllFriends from '../../Component/AllFriends/AllFriends';
import { useLoaderData } from 'react-router';

const Homepage = () => {
    const {friends} = useLoaderData()


    return (
        <div className='bg-[#f8fafc]'>
            <Banner></Banner>
            <AllFriends friends={friends}></AllFriends>
        </div>
    );
};

export default Homepage;