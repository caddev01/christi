import Progress from 'react-bootstrap/ProgressBar';

export default function Progressbar () {
    return(
        <div className='container-fluid mt-3 mx-auto' style={{width: '70%'}}>
            <div class="progress bg-transparent mb-2" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar progress-bar-striped bg-success fst-italic" style={{width: '35%'}}>Anointed</div>
            </div>
            <div class="progress bg-transparent mb-2" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar progress-bar-striped bg-info fst-italic" style={{width: '50%'}}>Leaders</div>
            </div>
            <div class="progress bg-transparent mb-2" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar progress-bar-striped bg-warning fst-italic" style={{width: '75%'}}>Saints</div>
            </div>
            <div class="progress bg-transparent mb-2" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar progress-bar-striped bg-danger fst-italic" style={{width: '100%'}}>Converts</div>
            </div>
        </div>
    );
};