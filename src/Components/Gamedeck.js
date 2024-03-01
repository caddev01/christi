const Gamedeck = () => {
    return(

        // Question deck
        <div className="container border border-secondary rounded mx-auto mt-5 h-100 mb-5" style={{width:'70%'}}>
            <div className='row'>
            {/* Question Card */}
            <div className='col-md-8'>
            <div className="card mb-3 mt-2" style={{maxWidth: '700px'}}>
                <div className="row g-0">
                    <div className="col-md-7">
                    <img src="https://plus.unsplash.com/premium_photo-1698170370655-d89aa9eba01f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtuaWdodHxlbnwwfHwwfHx8MA%3D%3D" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-5">
                    <div className="card-body">
                        <h5 className="card-title">Philistine Giant</h5>
                        <p className="card-text">He fought Goliath with a sling and five smooth stones, the weapons of a shepherd boy. He wins, and Goliath is slain.</p>
                        <p className="card-text"><small className="text-body-secondary">not a disciple or prophet</small></p>
                    </div>
                    </div>
                </div>
            </div>
            </div>

            {/* Response elements */}
            <div className='col-md-4 d-flex align-items-center justify-content-sm-center'>
            <div className='d-flex mb-3 justify-content-center align-items-center vstack'>

                {/* Timer */}
                <div className="card text-center mt-2" style={{maxWidth:'150px'}}>
                    <div className="card-header">
                        Timer
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">30s</h5>
                    </div>
                    <div className="card-footer text-body-secondary">
                        Points to get
                    </div>
                </div>

                {/* Answer link for offcanvas */}
                {/* <span className='d-flex align-items-center mx-1 mt-2'><a href="#offcanvasBottom" role="button"  aria-controls="offcanvasBottom" data-bs-toggle="offcanvas" className="">Answer</a></span> */}

                {/* Answer button for offcanvas */}
                <span className='d-flex align-items-center mx-1 mt-2'><button type="button" data-bs-toggle='offcanvas' data-bs-target='#offcanvasBottom' aria-controls="offcanvasBottom" className="btn btn-primary btn-lg">Attempt</button></span>

                {/* Offcanvas button & div */}
                <button className="btn btn-primary mt-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Bottom offcanvas</button>

                <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body small">
                    ...
                </div>
                </div>

            </div>
            </div>
            </div>

        </div>

    );
}

export default Gamedeck;