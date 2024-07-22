import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Badge from 'react-bootstrap/Badge';
import questions from './Questions';

// Quiz Template

function QuizerApp () {

    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [showText, setShowText] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [startQuizer, setStartQuizer] = useState(false);
    const [selecter, setSelecter] = useState(false);

    const handleStartQuizer = (selecter) => {
        selecter === true && setCurrentQuestion(1);
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

    return (

        <div className="container border border-secondary rounded mx-auto mt-5 text-center" style={{width:'70%'}}>

            {/* {startQuizer ? (
                <div>
                
                </div>
            ) : (
                <div>
                    <h3>The Apostles</h3>
                    <button 
                    className='button button-secondary'
                    key={setSelecter(true)}
                    onClick={
                        () => handleStartQuizer(selecter)
                    }
                    >
                        Start!
                    </button>
                </div>
            )}; */}

            {showScore ? (
                <div className='score-section'>
                    <i>A {score} in {questions.length} score for you saint</i>
                    {showText && <h4>Agalio! Perfect score!</h4>}
                </div>
            ) : (
                <div>
                    {/* <h3 className="text-center my-2">Lets Go!</h3> */}
            <Badge bg='danger' pill>{currentQuestion +1}/{questions.length}</Badge>
            <p className="text-center mt-2">{questions[currentQuestion].question}</p>
            <div className="btn-group row mx-2" role="group" aria-label="Basic outlined example">

                {questions[currentQuestion].options.map((option) =>(
                    <button
                        className="btn btn-outline-danger col-sm-3"
                        key = {option}
                        onClick={() => handleAnswerOptionClick(option)}
                    >
                        {option}
                    </button>
                ) )}
            </div>
            <hr/>
            <h3 className="text-center text-secondary">Apostle ______?</h3>
                </div>
            )}
            
        </div>

    );
};

export default QuizerApp;