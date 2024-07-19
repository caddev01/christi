import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Badge from 'react-bootstrap/Badge';

// Quiz Template

function QuizerApp () {

    // const [checked, setChecked] = useState(false);
    // const [radioValue, setRadioValue] = useState('1');
  
    // const radios = [
    //   { name: 'Active', value: '1' },
    //   { name: 'Radio', value: '2' },
    //   { name: 'Radio', value: '3' },
    //   { name: 'Radio', value: '4' },
    // ];

    return (

        <div className="container border border-secondary rounded mx-auto mt-5 text-center" style={{width:'70%'}}>
            {/* <h3 className="text-center my-2">Lets Go!</h3> */}
            <Badge bg='danger' pill>1/4</Badge>
            <p className="text-center mt-2">The Israelites were reminded of how they betrayed Jesus the son of God who was promised. He encouraged them not to be surprised by miracles because it was the work of the almighty God of Israel</p>
            {/* <div className='text-center'>
                <ButtonGroup className=''>
                    {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                    ))}
                </ButtonGroup>
            </div> */}
            <div className="btn-group row mx-2" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-danger col-sm-3">Option 1</button>
                <button type="button" className="btn btn-outline-danger col-sm-3">Option 2</button>
                <button type="button" className="btn btn-outline-danger col-sm-3">Option 3</button>
                <button type="button" className="btn btn-outline-danger col-sm-3">Option 4</button>
            </div>
            <hr/>
            <h3 className="text-center text-secondary">Apostle ______?</h3>
            
        </div>

    );
};

export default QuizerApp;