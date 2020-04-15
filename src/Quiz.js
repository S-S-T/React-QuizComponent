import React, { Component } from 'react'
import './App.css'
import Quiz from './Quiz.js'
import { render } from 'enzyme'

let quizData = require('./quiz_data.json')
class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = { quiz_data: 1 }

    }
}



render() {
    return (
        <div>QUIZ</div>   
    );
}





export default Quiz