import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import BottomCanvas from '../Components/BottomCanvas';
import questions from './Quizer/HeroesQuestions';
import Badge from 'react-bootstrap/Badge';


function Gamedeck () {
    
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [showText, setShowText] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [startQuizer, setStartQuizer] = useState(false);

    const handleStartQuizer = () => {
        setStartQuizer(true) && setCurrentQuestion(1) 
    };

    const handleAnswerOptionClick = (selectedAnswer) => {
        selectedAnswer === questions[currentQuestion].correctAnswer && setScore(score + 1);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            setShowScore(true);
            score == questions.length - 1 && setShowText(true);
        }
    };

    const handleRestartQuizer = () => {
        setScore(0); setShowScore(false); setShowText(false); setCurrentQuestion(0); setStartQuizer(false);
    }
    
    return(

        <div>
            {/* Start Quizer */}
            {startQuizer ? (
                /* Question deck */
                <div className="container border border-secondary rounded mx-auto mt-5 h-100 mb-5" style={{width:'70%'}}>
                <div className='row'>
                    {/* Question Card */}
                    <div className='col-md-8'>
                        <div className="card mb-3 mt-2" style={{maxWidth: '700px'}}>
                            <div className="row g-0">
                                <div className="col-md-7">
                                <img src="https://i.pinimg.com/564x/9b/3e/76/9b3e76280ec462ea5bc10037e1e23d3c.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-5">
                                <div className="card-body">
                                    <h5 className="card-title">{questions[currentQuestion].title}</h5>
                                    <p className="card-text">{questions[currentQuestion].question}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Response elements */}
                    <div className='col-md-4 d-flex align-items-center justify-content-sm-center'>
                        <div className='d-flex mb-3 justify-content-center align-items-center vstack'>

                            {/* Timer */}
                            <div className='card-group' style={{minWidth:'170px'}}>
                                <div className="card text-center mt-2">
                                    <div className="card-header">
                                        Timer
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">30s</h5>
                                    </div>
                                    <div className="card-footer text-body-secondary">
                                        Points
                                    </div>
                                </div>

                                <div className="card text-center mt-2">
                                    <div className="card-header">
                                        Score
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">5</h5>
                                    </div>
                                    <div className="card-footer text-body-secondary">
                                        {questions.length - currentQuestion - 1} more
                                    </div>
                                </div>
                            </div>

                            <div className='mt-1'><BottomCanvas /></div>                      

                        </div>
                    </div>
                </div>

                </div>
            ):(
                <div className='d-flex text-center'>
                    <div className="d-flex row align-items-center justify-contents-center mt-3 mb-2 mx-auto">
                        <div class="flex-shrink-0 col-md">
                            <img src="https://i.pinimg.com/236x/31/40/bb/3140bbe68d99cb693a1fc7a950d9d035.jpg" alt="..." className="img-fluid rounded" />
                        </div>
                        <div class="flex-grow-1 col-md ms-3">
                            <h2 className='josefin-sans mt-2'>Heroes</h2>
                            <button 
                            className='btn btn-danger josefin-sans'
                            onClick={()=> handleStartQuizer()} 
                            >Begin</button>
                        </div>
                    </div>
                </div>
            )}
            
            
            


        </div>

        

    );
}

export default Gamedeck;