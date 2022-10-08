
// Fetch a set of questions from https://the-trivia-api.com/api/questions?limit=5
// Filter out any questions with tag "film"
// Sort them according to the difficulty
// Log the output to the user

// Sample Output:
// Who succeeded Winston Churchill when he resigned in 1955?
// Which author wrote 'The Left Hand of Darkness'?
// Who was the first female American astronaut?

import { fetchQuestion } from './modules/question.api';
import type Question from './modules/question.api'
import { createQuestion } from './modules/question.component';
import { pagination } from "./modules/pagination";

let index: number = 0;
const questionsAmount: number = 5;
let questions : Array<typeof Question> = await fetchQuestion(questionsAmount);
let $question : HTMLElement = createQuestion(questions[index], index, questionsAmount);
let $pagination : HTMLElement = pagination();

class Component {
    componentId: string;
    component: HTMLElement;

    constructor(componentId, component) {
        this.componentId = componentId;
        this.component = component;
    }
    createComponent() {
        const componentInDom = document.getElementById(this.componentId);
        componentInDom.innerHTML="";
        componentInDom.appendChild(this.component);
    }
}

let formComponent = new Component('FormComponent', $question);
let paginationComponent = new Component('PaginationComponent', $pagination);
formComponent.createComponent();
paginationComponent.createComponent();

const renderQuestion = () => {
    $question = createQuestion(questions[index], index, questionsAmount);
    nextButton.disabled = true;
}

const nextButton: HTMLButtonElement = document.querySelector('#nextButton');
if( index < questionsAmount ) {
    nextButton.addEventListener('click', () => {
        index += 1;
        renderQuestion();
        formComponent = new Component('FormComponent', $question);
        formComponent.createComponent();
    });
}




