import { useState, useRef, useEffect, toString } from "react";
import Gamedeck from "./Gamedeck";

function Countier () {

    function Countdown () {
        const [timing, setTiming] = useState("00:00:00")
        const [mark, setMark] = useState("30")
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
                    (hour > 9 ? hour : "0" + hour) + ":" +
                    (minute > 9 ? minute : "0" + minute) + ":" +
                    (second > 9 ? second : "0" + second)
                )
            }
        }
    
        function clearTiming (e) {
            setTiming("00:00:30")
            if(Ref.current) clearInterval(Ref.current);
            const Id = setInterval(() => {
                startTiming(e)
            }, 1000)
        }
    
        function getDeadTime(){
            let deadline = new Date();
            deadline.setSeconds(deadline.getSeconds() + 30);
            return deadline;
        }
    
        function getMarkRemaining(a) {
            const total = Date.parse(a) - Date.parse(new Date())
            const second = Math.floor((total / 1000) % 60);
    
            return{total, second};
        }
    
        function startMark (a){
            let {total, second} = getMarkRemaining(a);
            if(total >= 0){
                setMark(
                    (second > 9 ? second : "0" + second)
                )
            }
        }
    
        function clearMark (a) {
            setTiming("00:00:30")
            if(Refmark.current) clearInterval(Refmark.current);
            const Id = setInterval(() => {
                startMark(a)
            }, 5000)
        }
    
        function getDeadMark(){
            let deadmark = new Date();
            deadmark.setSeconds(deadmark.getSeconds() + 30);
            return deadmark;
        }
    
       function Add(){
            setGrade(mark)
        }
    
        function Reset() {
            clearTiming(getDeadTime())
        }
    
        useEffect(()=>{
            clearTiming(getDeadTime());
            clearMark(getDeadMark());
        }, [])
        
        return{ timing }
    }

    let timing = timing;

    return(
        
        <div>
            <Gamedeck downcount = {Countdown} timing = {timing} />
        </div>
        
        // <div className="card mx-auto mt-5 text-center" style={{width:"300px"}}>
        //     <h3>Timing</h3>
        //     <div className="card-body">
        //         {timing}
        //     </div>
        //     <span>
        //     <button className="btn btn-danger m-2 mx-auto" style={{width:"100px"}} onClick={Reset}>Reset</button>
        //     <button className="btn btn-danger ms-2 m-2 mx-auto" style={{width:"100px"}} onClick={Add}>Add</button>
        //     </span>
        //     <p className="text-danger m-1">{grade}</p>
        //     <p className="text-danger m-1">Mark: {mark}</p>
        //     <Gamedeck timing = {timing} />
        // </div>
    )

}



export default Countier;