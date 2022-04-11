import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {QuizProvider} from "./Context/quiz-context"

ReactDOM.render(
    <BrowserRouter>
    <QuizProvider>
    <App />
    </QuizProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

