export type Question = {
    "id": string,
    "category": string,
    "correctAnswer": string,
    "incorrectAnswers": Array<string>,
    "question": Array<string>,
    "type": string,
    "difficulty": string
}

export const fetchQuestion = async (amount:number) :Promise<any> => {
    const url : string = `https://the-trivia-api.com/api/questions?limit=${amount}`;
    const response =  await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const questionsData : Array<Question> = await response.json();
    console.debug(questionsData);

    return questionsData;
}

export default { fetchQuestion };
