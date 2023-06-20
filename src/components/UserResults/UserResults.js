import './UserResults.css'

function UserResults(props) {
    console.log(props);
    return( 
        <div className="result">
            <div className='name'>{props.name}</div>
            <div>{props.age}</div>
        </div>
    )
}

export default UserResults;