export default function TopSaint () {
    return(
        <div className="mt-3 mx-auto mt-3" style={{width:'95%'}}>
            <p className="fs-3 text-center">Saint of the day</p>
            <div className="row row-cols-xxs-2">
                <div className="col text-center">
                    <img src="https://i.pinimg.com/236x/bb/9d/a4/bb9da404a092fdba1538bfb3f6f1d502.jpg" className="rounded-circle" alt="Saint Image" style={{height:'200px'}} />
                </div>
                <div className="col">
                    <ul class="list-group mt-5 border border-danger border-top-0">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <p className="fw-bold">Nuel_Demy</p>
                                <p>Anointed</p>
                            </div>
                            <span class="badge text-bg-danger rounded-pill">6.5</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};