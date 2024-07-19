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
                {/* <button type="button" className="btn btn-outline-danger col-sm-3">Option 1</button>
                <button type="button" className="btn btn-outline-danger col-sm-3">Option 2</button>
                <button type="button" className="btn btn-outline-danger col-sm-3">Option 3</button>
                <button type="button" className="btn btn-outline-danger col-sm-3">Option 4</button> */}

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