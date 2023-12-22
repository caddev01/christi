const Jumbotron = () => {
    return(

        <div class="jumbotron border border-dark rounded m-4 text-white justify-content-center" style={{width:'98%',height:'300px', backgroundImage:`url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlibGV8ZW58MHx8MHx8fDA%3D')`}}>
            <div class="container">
                <h1 class="display-4" style={{fontFamily:'monospace'}}>Mind Blowing Bible Games</h1>
                <p class="lead">Nine awesome church games to test your spirituality</p>
            </div>
        </div>

    );
}

export default Jumbotron;