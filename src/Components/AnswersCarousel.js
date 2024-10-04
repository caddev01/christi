import Carousel from 'react-bootstrap/Carousel';
import Gamedeck from './Gamedeck';
import questions from './Quizer/HeroesQuestions';
import CurrQuestionComponent from './Gamedeck';


function AnswersCarousel({currentQuestion, handleAnswerOptionClick}) {
  return (
    <CurrQuestionComponent>
      <Carousel controls={false} indicators={false}>  
        {questions[currentQuestion].options.map((option) => (
            <Carousel.Item interval={1000}>
            <img 
              className='d-block mx-auto'
              key={option}
              src={option}
              onClick={() => handleAnswerOptionClick(option)}
              alt='first slide'
              style={{width: "300px", height: "180px"}}
            />
            <Carousel.Caption>
              <p>Pharoah to the Nile</p>
            </Carousel.Caption>
          </Carousel.Item>
        ) ) }
      </Carousel>
    </CurrQuestionComponent>
    
  );
}

export default AnswersCarousel;