import React from 'react';
import StatusCard from './StatusCard';

export default function analysis(props) {
    return (
        <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                <StatusCard
                    color="pink"
                    icon="groups"
                    title="Sensors"
                    amount={props.sensor.ScannedCount}
                    percentage={props.sensor.Count}
                    percentageColor="green"
                    date="Sensors Not Used"
                />
                <StatusCard
                    color="orange"
                    icon="groups"
                    title="Nodes"
                    amount={props.node.ScannedCount}
                    percentage={props.node.Count}
                    percentageColor="green"
                    date="Nodes Not Used"
                />
                <StatusCard
                    color="purple"
                    icon="groups"
                    title="Users"
                    amount={props.user.ScannedCount}
                    percentage={props.user.Count}
                    percentageColor="green"
                    date="New Users"
                />
                <StatusCard
                    color="blue"
                    icon="trending_up"
                    title="Visits"
                    amount="924"
                    percentage="1.10"
                    percentageIcon="arrow_downward"
                    percentageColor="orange"
                    date="Since yesterday"
                />
            </div>
        </div>
    </div>
    );
}
