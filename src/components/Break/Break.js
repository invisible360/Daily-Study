import React from 'react';

const Break = () => {
    const breakTime = [5, 10, 15, 20, 55];
    return (
        <div className='pb-10'>
            <h2 className='font-bold text-lg pb-5'>Add a Break</h2>

            <div className='grid grid-cols-5 p-3 bg-base-100 rounded-lg'>
                {
                    breakTime.map(time => <button className="btn btn-circle btn-warning text-xs hover:btn-info">{time} min</button>)
                }

            </div>
        </div>
    );
};

export default Break;