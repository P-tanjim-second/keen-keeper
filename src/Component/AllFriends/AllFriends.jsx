import React, { Suspense } from 'react';
import { Await } from 'react-router';
import FriendCard from '../Sheared/FriendCard/FriendCard';
import FriendLoader from './FriendLoader/FriendLoader';

const AllFriends = ({ friends }) => {
    return (
        <div className='container mx-auto space-y-5 pb-20'>
            <h4 className='text-2xl font-bold'>Your Friends</h4>


            <Suspense fallback={<FriendLoader></FriendLoader>}>
                <Await resolve={friends}>

                    {
                        (resoledFriend) => {
                            return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                                {
                                    resoledFriend.map((friend) => {
                                       return <FriendCard key={friend.id} friend={friend}></FriendCard>
                                    })
                                }
                            </div>
                        }
                    }

                </Await>
            </Suspense>
        </div>
    );
};

export default AllFriends;