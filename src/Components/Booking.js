import React from "react";

import { InlineWidget } from 'react-calendly';

function Booking(){
    return (
        <div>
        <h2 style={{padding: '10px', margin: '10px', color: 'blueviolet', }}>Schedule an appointment with us</h2>
        <InlineWidget url="https://calendly.com/mirwes210/60min" />

        
        
        </div>
    )
};

export default Booking;