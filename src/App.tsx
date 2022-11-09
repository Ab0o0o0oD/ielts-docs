import React from 'react';
import './App.css';
import pdf from './First.pdf'

function App() {
    return (
        <div className="App">
            <iframe src={pdf} className="pdf-container"/>
        </div>
    );
}

export default App;
