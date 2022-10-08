const createQuestion = (data, index, questionsAmount) => {
    const
        question : string = data.question,
        correctAnswer : string = data.correctAnswer,
        incorrectAnswers : Array<string> = data.incorrectAnswers,
        category : string = data.category;

    // Concat the answers and shuffle them
    const allAnswers : Array<string> = [correctAnswer, ...incorrectAnswers]
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    const $question : HTMLElement = document.createElement('div');
    $question.classList.add("app__container");

    // Here you will need to modify the code
    // Add an element with id "questionCategory" to the HTML and set the value to based on the category property

    $question.innerHTML = `        
        <form id="questionForm" class="question-panel__question-options question-options" action="">
            <h2 class="question-panel__title">Question: ${question}</h2>
            <span id="questionCategory" class="question-panel__category">Category: ${category}</span>
            <span class="question-panel__difficulty">Difficulty: ${data?.difficulty}</span>            
            <span class="question-panel__score">Score: ${index + 1} / ${questionsAmount}</span>
            
              ${allAnswers.map((answer, index) => 
                `<input type="radio" name="answer" id="answer${index+1}" value="${answer}" hidden>
                 <label for="answer${index+1}">${answer}</label><br>`
              ).join("")}

            <div class="question-panel__buttons">
              <input class="question-panel__button button bitton--submit" id="submitAnswer" type="submit" value="Check the answer" />   
              <span class="question-panel__question-response"></span>           
            </div>
        </form>
    `;

    // Handle the submission of the form and validate the answer
    const $form : HTMLFormElement = $question.querySelector('.question-options');
    $form.addEventListener('submit', (event) :void => {
        event.preventDefault();
        let answer : HTMLInputElement;
        answer = $form.querySelector('input[name="answer"]:checked');
        const nextButton: HTMLButtonElement = document.querySelector("#nextButton");
        let $response: HTMLElement = $form.querySelector('.question-panel__question-response');

        if (answer === null) {
            $response.innerHTML = 'Select the answer';
        } if (answer!= null && answer.value !== correctAnswer) {
            $response.innerHTML = 'Checking . . .';
            setTimeout(() =>{
                $response.innerHTML = 'Incorrect answer, choose another one';
            }, 1000);
        } if (answer!= null && answer.value === correctAnswer) {
            $response.innerHTML = 'Correct !!!';
            nextButton.disabled = index >= questionsAmount - 1;
        }  else {
            nextButton.disabled = true;
        }
    });

    return $question;
}

export { createQuestion };