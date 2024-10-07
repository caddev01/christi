import { useState, useRef, useEffect, toString } from "react";
import Gamedeck from "./Gamedeck";

function Countdown ({setMark, setTiming}) {
    // const [timing, setTiming] = useState("01:00")
    // const [mark, setMark] = useState("60")
    const [grade, setGrade] = useState("0")
    const Ref = useRef()
    const Refmark = useRef()

    function getTimeRemaining(e) {
        const total = Date.parse(e) - Date.parse(new Date())
        const hour = Math.floor((total / (60 * 60 * 1000)) % 24);
        const minute = Math.floor((total / (60 * 1000)) % 60);
        const second = Math.floor((total / 1000) % 60);

        return{total, hour, minute, second};
    }

    function startTiming (e){
        let {total, hour, minute, second} = getTimeRemaining(e);
        if(total >= 0){
            setTiming(
                (minute > 9 ? minute : "0" + minute) + ":" +
                (second > 9 ? second : "0" + second)
            )
        }
    }

    function clearTiming (e) {
        setTiming("01:00")
        if(Ref.current) clearInterval(Ref.current);
        const Id = setInterval(() => {
            startTiming(e)
        }, 1000)
    }

    function getDeadTime(){
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 60);
        return deadline;
    }

    function getMarkRemaining(a) {
        const total = Date.parse(a) - Date.parse(new Date())
        const second = Math.floor((total / 1000) % 60);

        return{total, second};
    }

    function startMark (a){
        let {total, second} = getMarkRemaining(a);
        if(second >= 20){
            setMark(
                (second > 9 ? second : "0" + second)
            )
        }
    }

    function clearMark (a) {
        setTiming("01:00")
        if(Refmark.current) clearInterval(Refmark.current);
        const Id = setInterval(() => {
            startMark(a)
        }, 5000)
    }

    function getDeadMark(){
        let deadmark = new Date();
        deadmark.setSeconds(deadmark.getSeconds() + 60);
        return deadmark;
    }

//    function Add(){
//         setGrade(mark)
//     }

    function Reset() {
        clearTiming(getDeadTime())
    }

    useEffect(()=>{
        clearTiming(getDeadTime());
        clearMark(getDeadMark());
    }, [])

    return(

        <div>
            {/* <span className="text-primary">{timing}</span> <span className="text-danger">{mark}</span> */}
            {/* <Gamedeck mark = {mark} /> */}
        </div>
    )
}

export default Countdown;