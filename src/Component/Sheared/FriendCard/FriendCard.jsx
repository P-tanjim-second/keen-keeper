import React from 'react';
import { Link } from 'react-router';
import { createSlug } from '../SlugFunction/SlugFunction';

const FriendCard = ({ friend }) => {
    return (
        <Link to={`/friend/${createSlug(friend.name)}`} state={{ id: friend.id }}>
            <div className='flex flex-col gap-2 justify-center items-center shadow-[0px_0px_10px_10px_rgba(244,244,244,1)] py-8 cursor-pointer'>
                <div className='rounded-full overflow-hidden w-25 h-25 shadow-[0px_0px_10px_10px_rgba(244,244,244,1)]'>
                    <img
                        src={friend.picture}
                        alt={friend.name}
                        className='w-full h-full object-none object-center'
                    />
                </div>
                <h4 className='text-2xl font-semibold text-[#1f2937]'>{friend.name}</h4>
                <p className='text-[#64748b] text-[14px]'>{friend.days_since_contact}day ago</p>
                <div className='flex gap-2'>
                    {
                        friend.tags.map((tag, i) => <div key={i} className='py-0.5 px-2.5 text-[14px] rounded-full bg-[#cbfadb] text-[#244d3f] uppercase font-medium'>{tag}</div>)
                    }
                </div>
                <div className={`py-0.5 px-2 rounded-full ${friend.status === "almost due" ? "bg-[#efad44]" : friend.status === "overdue" ? "bg-[#ef4444]" : "bg-[#244d3f]"} text-white font-medium`}>{friend.status}</div>
            </div>
        </Link>
    );
};

export default FriendCard;