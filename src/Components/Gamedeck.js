const Gamedeck = () => {
    return(

        // Question deck
        <div className="container border border-secondary rounded mt-2" style={{width:'70%'}}>
            <div class='row'>
            {/* Question Card */}
            <div class='col-md-8'>
            <div class="card mb-3 mt-2" style={{maxWidth: '700px'}}>
                <div class="row g-0">
                    <div class="col-md-7">
                    <img src="https://plus.unsplash.com/premium_photo-1698170370655-d89aa9eba01f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtuaWdodHxlbnwwfHwwfHx8MA%3D%3D" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-5">
                    <div class="card-body">
                        <h5 class="card-title">Philistine Giant</h5>
                        <p class="card-text">He fought Goliath with a sling and five smooth stones, the weapons of a shepherd boy. He wins, and Goliath is slain.</p>
                        <p class="card-text"><small class="text-body-secondary">not a disciple or prophet</small></p>
                    </div>
                    </div>
                </div>
            </div>
            </div>

            {/* Response elements */}
            <div class='col-md-4'>
            <div class='d-flex mb-3 justify-content-center align-items-center vstack ms-5'>
                {/* Timer */}
                <div class="card text-center mt-2" style={{maxWidth:'150px'}}>
                    <div class="card-header">
                        Timer
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">30s</h5>
                    </div>
                    <div class="card-footer text-body-secondary">
                        Points to get
                    </div>
                </div>
                {/* Answer */}
                <span class='d-flex align-items-center mx-1 mt-2'><button type="button" class="btn btn-primary btn-lg">Answer</button></span>
            </div>
            </div>
            </div>

        </div>

    );
}

export default Gamedeck;