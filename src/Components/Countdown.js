import { getSeconds } from "date-fns";
import { useState, useRef, useEffect } from "react";

function Countdown () {
    const [timer, setTimer] = useState("00:00:00")
    const [newTime, setNewTime] = useState("00")
    const Ref = useRef()

    function getTimeRemaining(e) {
        const total = Date.parse(e) - Date.parse(new Date())
        const hour = Math.floor((total / (1000 * 60 * 60)) % 24);
        const minute = Math.floor((total / 1000 / 60) % 60);
        const second = Math.floor((total / 1000) % 60);

        return{total, hour, minute, second};
    }

    function startTimer (e){
        let {total, hour, minute, second} = getTimeRemaining(e);
        if(total >= 0){
            setTimer(
                (hour > 9 ? hour : "0" + hour) + ":" +
                (minute > 9 ? minute : "0" + minute) + ":" +
                (second > 9 ? second : "0" + second)
            )
        }
    }

    function Add (e){
        var {total, hour, minute, second} = getTimeRemaining(e);
        setNewTime(getSeconds(second));
    }

    function clearTimer (e) {
        setTimer("00:00:30")
        if(Ref.current) clearInterval(Ref.current);
        const Id = setInterval(() => {
            startTimer(e)
        }, 1000)
    }

    function getDeadTime(){
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 30);
        return deadline;
    }

    function Reset() {
        clearTimer(getDeadTime())
    }

    useEffect(()=>{
        clearTimer(getDeadTime()) 
    }, [])

    return(
        <div className="card mx-auto mt-5 text-center" style={{width:"300px"}}>
            <h3>Timer</h3>
            <div className="card-body">
                {timer}
                {/* 00:00:00 */}
            </div>
            <span>
            <button className="btn btn-danger m-2 mx-auto" style={{width:"100px"}} onClick={Reset}>Reset</button>
            <button className="btn btn-danger ms-2 m-2 mx-auto" style={{width:"100px"}} onClick={Add}>Add</button>
            </span>
            <p className="text-danger m-1">{newTime}</p>
        </div>
    )
}

export default Countdown;