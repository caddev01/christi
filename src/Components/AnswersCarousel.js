import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function AnswersCarousel() {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item interval={1000}>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img 
            className='d-block mx-auto'
            src='https://images.unsplash.com/photo-1595280102482-65d3cf5c1253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a25pZ2h0fGVufDB8fDB8fHww'
            alt='first slide'
            style={{width: "300px", height: "180px"}}
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          <p>Pharoah to the Nile</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img 
            className='d-block mx-auto'
            src='https://plus.unsplash.com/premium_photo-1698170370478-3732176aa7ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtuaWdodHxlbnwwfHwwfHx8MA%3D%3D'
            alt='first slide'
            style={{width: "300px", height: "180px"}}
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          <p>Joshua against giants</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img 
            className='d-block mx-auto'
            src='https://plus.unsplash.com/premium_photo-1698170370655-d89aa9eba01f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtuaWdodHxlbnwwfHwwfHx8MA%3D%3D'
            alt='first slide'
            style={{width: "300px", height: "180px"}}
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>
            David and his sling
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AnswersCarousel;