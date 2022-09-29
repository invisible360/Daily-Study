import React, { useEffect, useState } from 'react';
import Activity from './Activity';

const Main = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])


    return (
        <main className='col-span-3 mx-auto w-[90%]'>
            <header>
                <div className='flex items-center pt-10'>
                    <img className='w-1/12' src="https://chipngo.org/wp-content/uploads/2019/06/education-icon.png" alt="" />
                    <h1 className='text-4xl font-bold text-gray-600 pl-2'>DAILY-STUDY-ACTIVITY</h1>
                </div>
                <h3 className='text-3xl font-semibold py-10'>Select today's Practice</h3>
            </header>

            {/* card section */}
            <section className='grid grid-cols-3 gap-5'>
                {
                    activities.map(activity => <Activity activity={activity}></Activity>)
                }

            </section>

        </main>
    );
};

export default Main;