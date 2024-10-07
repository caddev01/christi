import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import BottomCanvas from '../Components/BottomCanvas';
import questions from './Quizer/HeroesQuestions';
import Badge from 'react-bootstrap/Badge';
import Countdown from './Countdown';
import Carousel from 'react-bootstrap/Carousel';

function Gamedeck ({mark, timing, setMark, setTiming}) {
    
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [showText, setShowText] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [startQuizer, setStartQuizer] = useState(false);

    const handleStartQuizer = () => {
        setMark('60'); setTiming('01:00');
        setStartQuizer(true) && setCurrentQuestion(1);
    };

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    const handleAnswerOptionClick = (selectedAnswer) => {
        selectedAnswer === questions[currentQuestion].correctAnswer && setScore(score + 1);
        const nextQuestion = currentQuestion + 1;
        handleClose();
        console.log(score);
        if (nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            // console.log(mark);
            setScore(score * mark);
            setShowScore(true);
            score == (questions.length - 1) * 50 && setShowText(true);
        }
    };

    const handleRestartQuizer = () => {
        setScore(0); setShowScore(false); setShowText(false); setCurrentQuestion(0); setStartQuizer(false);
        setMark('60'); setTiming('01:00');
    }

    return(

        <div>
            {/* Start Quizer */}
            {startQuizer ? (
                <div>
                    {showScore ? (
                        <div className="container border border-secondary rounded mx-auto mt-5 h-100 mb-5 text-center" style={{width:'70%'}}>
                            <div className='score-section'>
                                <p className='mt-1'><i>A {score} in {questions.length * 50} score for you saint</i></p>
                                {showText && <h4>Agalio! High scorer!</h4>}
                                <div className="btn-group mb-2" role="group" aria-label="Basic mixed styles example">
                                    <button type="button" className="btn btn-danger" onClick={()=>handleRestartQuizer()}>Again</button>
                                    <button type="button" className="btn btn-success">Next</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Question deck
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
                                    <span className='text-primary'>Timer</span> - <span className='text-danger'>Score</span>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><span className="text-primary">{timing}</span> <span className="text-danger">{mark}</span></h5>
                                </div>
                                <div className="card-footer text-body-secondary">
                                    <span className='text-primary'>Ques</span> - <span className='text-danger'>{questions.length - currentQuestion - 1} more</span>
                                </div>
                            </div>
                        </div>

                        {/* Options */}
                        {/* Bottom Canvas */}
                        <div className='mt-1'>
                            <Button variant="primary" onClick={() => handleShow()}>
                                Attempt
                            </Button>

                            <Offcanvas show={show} onHide={handleClose} placement='bottom' className='text-bg-dark'>
                                <Offcanvas.Body>
                                    {/* Insert Answer Carousel */}
                                    <Carousel controls={false} indicators={false}>  
                                        {questions[currentQuestion].imageOption.map((imageOption) =>(
                                        <Carousel.Item interval={1000}>
                                            {/* First Slide */}
                                            <img 
                                                className='d-block mx-auto'
                                                key={imageOption}
                                                src= {imageOption}
                                                onClick={() => handleAnswerOptionClick(imageOption)}
                                                alt='first slide'
                                                style={{width: "300px", height: "180px"}}
                                            />
                                            <Carousel.Caption>
                                            {/* <h3>First slide label</h3> */}
                                            <p></p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>
                    )}
                </div>
                
                
            ):(
                <div className='d-flex text-center'>
                    <div className="d-flex row align-items-center justify-contents-center mt-3 mb-2 mx-auto">
                        <div className="flex-shrink-0 col-md">
                            <img src="https://i.pinimg.com/236x/31/40/bb/3140bbe68d99cb693a1fc7a950d9d035.jpg" alt="..." className="img-fluid rounded" />
                        </div>
                        <div className="flex-grow-1 col-md ms-3">
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