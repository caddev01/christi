const Carousel = () => {
    return(

        <div id="carouselExampleSlidesOnly" className="carousel slide m-4" data-bs-ride="carousel" style={{width:'98%',height:'300px'}}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlibGV8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt=""/>
                </div>
                <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1555696958-c5049b866f6f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt=""/>
                </div>
                <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1543183501-7df0144a6753?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBvc3RsZXN8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt=""/>
                </div>
            </div>
        </div>

    );
}

export default Carousel;