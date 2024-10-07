import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import Gamedeck from './Gamedeck';

export default function GameParent () {
    const [mark, setMark] = useState('60');
    const [timing, setTiming] = useState("01:00");

    return(
        <div>
            <Gamedeck mark = {mark} timing = {timing}/>
            <Countdown setMark = {setMark} setTiming = {setTiming} />


        </div>
    );

}