import React, { useContext } from 'react';
import {AllAction} from '../../../public/Context/Context'
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const Status = () => {
    const { actions } = useContext(AllAction);
    const textData = actions.filter(action => action.whichOne === "text").length;
    const callData = actions.filter(action => action.whichOne === "call").length;
    const videoData = actions.filter(action => action.whichOne === "video").length;

    const data = [
        { name: 'Text', value: textData },
        { name: 'Call', value: callData },
        { name: 'Video', value: videoData }
    ]


    return (
        <div className='container mx-auto'>
            <div className='my-10 mt-15'>
                <h2 className='text-4xl font-bold' >Friendship Analytics</h2>
                <div className='p-5 rounded-2xl shadow-sm'>
                    <p className='text-[#244d3f]'>By Interaction Type</p>

                    <div className='flex justify-center items-center'>
                        <PieChart width={300} height={300}>
                            <Pie
                                data={data}
                                dataKey={'value'}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                innerRadius={60}
                                paddingAngle={5}
                                cornerRadius={10}
                            >
                                <Cell fill='#7C3AED'></Cell>
                                <Cell fill='#1F4D3A'></Cell>
                                <Cell fill='#22C55E'></Cell>
                            </Pie>
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                        </PieChart>
                        
                    </div>
                    <p className='text-center text-xl font-semibold text-red-400'>{textData === 0 ? callData === 0 ? videoData === 0 ? "Your contact Data is Empty" : '' : '' : ''}</p>
                </div>
            </div>
        </div>
    );
};

export default Status;