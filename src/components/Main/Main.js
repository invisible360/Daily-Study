import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Activity from './Activity';

const Main = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])


    return (
        <main className='col-span-3'>
            <header>
                <FontAwesomeIcon icon={faCoffee} />
                <h1>Daily Study Activity</h1>
                <h3>Select today's Practice</h3>
            </header>

            {/* card section */}
            <section className='grid grid-cols-3 gap-5'>
                {
                    activities.map (activity => <Activity></Activity>)
                }
                
            </section>


        </main>
    );
};

export default Main;