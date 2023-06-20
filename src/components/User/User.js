import { useState } from 'react';
import './User.css'

const initialInputs = {
    'user-name': '',
    'age': ''
}

function User(props){
    const [userInput, setUserInput] = useState(initialInputs)

    function submitHandler(event) {
        event.preventDefault();

        props.onCalculate(userInput)
        setUserInput(initialInputs)
    }

    function changeHandler(input, value) {
        setUserInput((prevUserInputs) => {
            return{
                ...prevUserInputs,
                [input]: value
            }
        });
    }
    return(
        <form onSubmit={submitHandler} className='form'>
            <div className='info'>
                <label htmlFor="user-name">Inserisci il tuo nome</label>
                <input 
                    onChange={(event) => changeHandler('user-name', event.target.value)} 
                    value={userInput['user-name']}
                    type="text" 
                    id="user-name">
                </input>
            </div>

            <div className='info'>
                <label htmlFor="age">Qual è la tua età?</label>
                <input 
                    onChange={(event) => changeHandler('age', event.target.value)} 
                    value={userInput['age']} 
                    type="number" 
                    id="age">
                </input>
            </div>

            <div className='btn'>
                <button type='sumbit'>Registrati</button>
            </div>
        </form>
    )
}

export default User;