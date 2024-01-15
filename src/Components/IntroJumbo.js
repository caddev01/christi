const IntroJumbo = () => {
    return(

        <div class="jumbotron border border-dark rounded mx-auto mt-3 text-white my-auto" style={{width:'70%',height:'500px', backgroundImage:`url('https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=1617&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
            <div class="row h-100 text-center align-items-center mx-2" >
                <div class='col'>
                    <h1 class="display-4" style={{fontFamily:'monospace'}}>Christianity's Super Heroes</h1>
                        <p class="lead"><strong>Tell us which character saved the day</strong></p>
                    <button type="button" class="btn btn-success btn-lg mt-3" style={{width:'160px', height:'50px', fontFamily:'calibri'}}><p class='h3'>Start!</p></button>
                </div>
            </div>
        </div>   

    );
}

export default IntroJumbo;