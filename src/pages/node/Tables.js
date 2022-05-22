import StatusCard from '../../components/StatusCard';
import TableCard from './TableCard';
import React from 'react';

export default function Dashboard() {
    return (
        <>

            

            <div className="px-3 md:px-8 h-auto mt-20">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 px-4 mb-16">
                        <TableCard />
                    </div>
                </div>
            </div>
        </>
    );
}
