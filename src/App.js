import React from 'react';
import { useState } from 'react';
import './index.css'
import User from './components/User/User';
import UserResults from './components/UserResults/UserResults';
import Card from './components/Card/Card';

function App() {
  const [usersList, setUsersList] = useState([])

  function showUserInputs(userInput) {
    setUsersList((prevUserInputs) => {
      return [
        ...prevUserInputs, {
          name: userInput['user-name'],
          age: userInput['age'],
          id: Math.random(1, 500000)
        }

      ]
    })
  }


  return (
    <div>
      <Card>
        <User onCalculate={showUserInputs}/>
      </Card>

      <Card>
        {usersList.map(user => 
          <UserResults key={user.id} name={user.name} age={user.age} />
      )}
        
      </Card>
    </div>
  );
}

export default App;

