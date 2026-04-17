import React, { useContext } from 'react';
import { AllAction } from '../../../public/Context/Context';

const TimelineList = ({filter, search}) => {
    const { actions } = useContext(AllAction);

    const setFilter = () => {
        let result = [...actions];
        
        if (search){
            result = result.filter(action => action.name.toLowerCase().includes(search))
        }
        if(filter === "text" || filter === 'call' || filter === "video"){
            result = result.filter(action => action.whichOne === filter)
        }
        if(filter === "new" || filter === "old"){
            const dateSort = result.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);

                return filter === "old" ? 
                dateB - dateA :
                dateA - dateB
            })

            const hourSort = [...dateSort].sort((a, b) => {
                return filter === "new" ?
                b.time.hours - a.time.hours :
                a.time.hours - b.time.hours
            })

            const minuteSort = [...hourSort].sort((a, b) => {
                return filter === "new" ?
                b.time.minute - a.time.minute :
                a.time.minute - b.time.minute
            })

            result =  [...minuteSort].sort((a, b) => {
                return filter === "new" ?
                b.time.second - a.time.second :
                a.time.second - b.time.second
            })
        }

        return result
    }
    
    const filteredList = setFilter();

    return (
        <div className='space-y-3 my-10 min-h-[10vh]'>
            {
                filteredList.length === 0 ?  <div className='shadow-sm text-center p-10 rounded-2xl font-medium text-2xl'>No Contacts Available</div> : 
                filteredList.map((action, i) => {
                    return <div key={i} className='border border-[#efefef] rounded-xl p-3 flex items-center gap-2 shadow-sm'>
                        <div className='w-8 h-8 rounded-full'>
                            <img src={action.whichOne === "text" ? '/assets/text.png' : action.whichOne === "call" ? '/assets/call.png' : '/assets/video.png'} alt="" />
                        </div>
                        <div>
                            <div className='w-full flex justify-between'>
                                <p className='text-[#64748b] capitalize'><span className='font-semibold text-black'>{action.whichOne}</span> with {action.name}</p>
                                <p className='text-[#64748b]'></p>
                            </div>
                            <p className='text-[#64748b]'>{action.date} at {action.time.hours}h:{action.time.minute}m:{action.time.second}s</p>
                        </div>
                    </div>
                })
            }

        </div>
    );
};

export default TimelineList;