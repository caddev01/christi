import { useState, useRef, useEffect} from "react";

const Counter = () => {

    const [timerDays, setTImerDays] = useState("00");
    const [timerHours, setTImerHours] = useState("00");
    const [timerMinutes, setTImerMinutes] = useState("00");
    const [timerSeconds, setTImerSeconds] = useState("00");

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date(30000);

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60) / 1000))
    
            if (distance < 0) {
                //stop timer
            }else{
                //updateTimer
                setTImerDays(days);
                setTImerHours(hours);
                setTImerMinutes(minutes);
                setTImerSeconds(seconds);
            }

        }, 1000);
    }; 

    function getDeadTime(){
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 30);
        return deadline;
    }
    
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    })

    return(
        <div className="card mx-auto mt-5 text-center" style={{width:"300px"}}>
            <h3>Timer</h3>
            <div className="card-body">
                {timerDays} : {timerHours} : {timerMinutes} : {timerSeconds}
            </div>
            <span>
            {/* <button className="btn btn-danger m-2 mx-auto" style={{width:"100px"}} onClick={}>Reset</button>
            <button className="btn btn-danger ms-2 m-2 mx-auto" style={{width:"100px"}} onClick={}>Add</button> */}
            </span>
            <p className="text-danger m-1">New Time</p>
            <p className="text-danger m-1">Score: 00</p>
        </div>
    )
}

export default Counter;