import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = () => {

    function loveIt(){
        alert("Everything is Better When Made by Scratch!");
        return
    }

    return (<>
        <h1>Hello from React!</h1>
        <img className='pic' height="800px" width="auto" src="red.jpg" alt="red chair"/>
        <div className='popup'>
            <button onClick={loveIt}>Love it!</button>
        </div>
        </>) 

}

ReactDOM.render(<App />, document.getElementById('app'));