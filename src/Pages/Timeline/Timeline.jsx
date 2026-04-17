import React, { useState } from 'react';
import { AllAction } from '../../../public/Context/Context';
import TimelineList from '../../Component/TimelineList/TimelineList';
import { ToastContainer } from 'react-toastify';

const Timeline = () => {
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('')
    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-5xl font-bold mb-5'>Timeline</h1>
            <div className='flex gap-8'>
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className="select">
                    <option disabled value={''}>Filter timeline</option>
                    <option value={'text'}>Text</option>
                    <option value={'call'}>Call</option>
                    <option value={'video'}>Video</option>
                    <option value={'new'}>New</option>
                    <option value={'old'}>Old</option>
                    <option value={''}>Reset</option>
                </select>


                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" className="grow" placeholder="Search by name" onChange={(e) => 
                        setSearch(e.target.value.trim().toLowerCase()) }/>
                </label>
            </div>

            <TimelineList filter={filter} search={search}></TimelineList>
        </div>
    );
};

export default Timeline;