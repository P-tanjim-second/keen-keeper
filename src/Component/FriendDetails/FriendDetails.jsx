import { Archive, BellOff, MessageSquareMore, PhoneCall, ShoppingBasket, Trash2, Video } from 'lucide-react';
import React, { use, useContext } from 'react';
import { useLoaderData, useLocation } from 'react-router';
import { AllAction } from '../../../public/Context/Context';
import { toast, ToastContainer } from 'react-toastify';

const FriendDetails = () => {
    const { friends } = useLoaderData()
    const AllFriend = use(friends);
    const {actions, setActions} = useContext(AllAction)
    const location = useLocation()
    const { id } = location.state || {}

    const friend = AllFriend.find(friend => friend.id == id)

    const currentDate = (dateStr) => {
        const date = new Date(dateStr);

        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        })
    }

    const showToast = (text) => {
        if (text == "text") {
            toast.success("A text contact add successfully");
        }
        else if(text == "call") {
            toast.success("A call contact add successfully")
        }
        else if(text == "video") {
            toast.success("A video contact add successfully")
        }
    }

    const saveAction = (whichOne, name) => {
        showToast(whichOne)

        const now = new Date();
        const date = now.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        })
        const time = {
            hours: now.getHours(),
            minute: now.getMinutes(),
            second: now.getSeconds(),
        }

        setActions([...actions, {
            name,
            whichOne,
            date,
            time
        }])
    }

    return (
        <div className='flex justify-center items-center p-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-full xl:w-[80%] my-7'>
                <div className='space-y-5 md:col-span-1 '>
                    <div className='rounded-lg text-center space-y-2.5 py-3 px-2 flex flex-col justify-center items-center shadow-[0px_0px_10px_10px_rgba(244,244,244,1)]'>
                        <div className='h-20 w-20 bg-gray-200 rounded-full overflow-clip'>
                            <img src={friend.picture} alt={friend.name} />
                        </div>
                        <h4 className='text-2xl font-semibold text-[#1f2937]'>{friend.name}</h4>
                        <div className={`py-0.5 px-2 rounded-full ${friend.status === "almost due" ? "bg-[#efad44]" : friend.status === "overdue" ? "bg-[#ef4444]" : "bg-[#244d3f]"} text-white font-medium`}>{friend.status}</div>
                        <div className='flex flex-wrap gap-2 items-center justify-center'>
                            {
                                friend.tags.map((tag, i) => <div key={i} className='py-0.5 px-2.5 text-[14px] rounded-full bg-[#cbfadb] text-[#244d3f] uppercase font-medium'>{tag}</div>)
                            }
                        </div>
                        <p className='text-[#64748b] text-[14px] lg:text-base text-base italic w-[80%] text-center font-medium'>"{friend.bio}"</p>
                        <p className='text-[#64748b] text-[14px]'>Preferred: {friend.email}</p>
                    </div>
                    <div className='space-y-2'>
                        <div className='rounded-md flex justify-center items-center font-medium cursor-pointer gap-2 py-3.5 w-full shadow-sm'><BellOff strokeWidth={2.75} size={18} /> Snooze 2 Weeks</div>
                        <div className='rounded-md flex justify-center items-center font-medium cursor-pointer gap-2 py-3.5 w-full shadow-sm'><Archive strokeWidth={2.75} size={18} /> Archive</div>
                        <div className='rounded-md flex justify-center items-center font-medium cursor-pointer gap-2 py-3.5 w-full shadow-sm text-red-500'><Trash2 strokeWidth={2.75} size={18} /> Delete</div>
                    </div>
                </div>
                <div className='md:col-span-2 space-y-7 h-full flex flex-col justify-between'>
                    <div className='flex flex-1 gap-5'>
                        <div className='flex-1 flex flex-col justify-center items-center rounded-lg text-center py-6 px-2 shadow-[0px_0px_8px_5px_rgba(244,244,244,1)]'>
                            <h3 className='text-xl sm:text-2xl lg:text-3xl font-semibold text-[#244d3f] mb-1'>{friend.days_since_contact}</h3>
                            <p className='text-[#64748b] text-[13px] sm:text-base'>Days Since Contact</p>
                        </div>
                        <div className='flex-1 flex flex-col justify-center items-center rounded-lg text-center py-6 px-2 shadow-[0px_0px_8px_5px_rgba(244,244,244,1)]'>
                            <h3 className='text-xl sm:text-2xl lg:text-3xl font-semibold text-[#244d3f] mb-1'>{friend.goal}</h3>
                            <p className='text-[#64748b]  text-[13px] sm:text-base'>Goals (Days)</p>
                        </div>
                        <div className='flex-1 flex flex-col justify-center items-center rounded-lg text-center py-6 px-2 shadow-[0px_0px_8px_5px_rgba(244,244,244,1)]'>
                            <h3 className='text-xl sm:text-2xl lg:text-3xl font-semibold text-[#244d3f] mb-1'>{currentDate(friend.next_due_date)}</h3>
                            <p className='text-[#64748b]  text-[13px] sm:text-base'>Next Due</p>
                        </div>

                    </div>
                    <div className='w-full flex-1 rounded-lg p-6 shadow-[0px_0px_8px_5px_rgba(244,244,244,1)]'>
                        <div className='flex justify-between mb-2'>
                            <h4 className='text-[#244d3f] font-medium text-xl'>Relationship Goal</h4>
                            <button className='btn'>Edit</button>
                        </div>
                        <p className='text-[#64748b]'>Connect every <span className='font-semibold text-black'>{friend.goal} days</span></p>
                    </div>
                    <div className='w-full flex-1 space-y-3 rounded-lg p-6 shadow-[0px_0px_8px_5px_rgba(244,244,244,1)]'>
                        <h4 className='text-[#244d3f] font-medium text-xl'>Quick Check-In</h4>
                        <div className='w-full flex gap-3'>
                            <div onClick={() => saveAction("call", friend.name)} className='bg-[#f8fafc] flex-1 cursor-pointer gap-1 text-[15px] text-[#1f2937] border border-[#e9e9e9] rounded-lg py-5 px-2 flex flex-col justify-center items-center'>
                                <PhoneCall strokeWidth={2.5} />
                                Call
                            </div>
                            <div onClick={() => saveAction("text", friend.name)} className='bg-[#f8fafc] flex-1 cursor-pointer gap-1 text-[15px] text-[#1f2937] border border-[#e9e9e9] rounded-lg py-5 px-2 flex flex-col justify-center items-center'>
                                <MessageSquareMore strokeWidth={2.5} />
                                Text
                            </div>
                            <div onClick={() => saveAction("video", friend.name)} className='bg-[#f8fafc] flex-1 cursor-pointer gap-1 text-[15px] text-[#1f2937] border border-[#e9e9e9] rounded-lg py-5 px-2 flex flex-col justify-center items-center'>
                                <Video strokeWidth={2.5} />
                                Video
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <ToastContainer position="bottom-right"></ToastContainer>
        </div>
    );
};

export default FriendDetails;