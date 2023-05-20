const question = [
    {
        'que': 'Which of the folowing is a markup language ?',
        'a': 'HTML',
        'b': 'JAVA',
        'c': 'PHP',
        'd': 'CSS',
        'correct': 'a'
    },
    {
        'que': 'Which of the folowing language is popular for AI/ML ?',
        'a': 'HTML',
        'b': 'JAVA',
        'c': 'PHP',
        'd': 'Python',
        'correct': 'd'
    },
    {
        'que': 'In what year JS launched ?',
        'a': '1945',
        'b': '1995',
        'c': '1998',
        'd': '1986',
        'correct': 'b'
    },
    {
        'que': 'Which of the following is not a backend programing language ?',
        'a': 'HTML',
        'b': 'JAVA',
        'c': 'PHP',
        'd': 'Python',
        'correct': 'a'
    }
]

const queBox = document.getElementById("queBox");
const options = document.querySelectorAll('.options');


let index = 0;
let total = question.length;
let right = 0, wrong = 0;


const loadQuestion = () => {

    if (total == index) {
        // document.querySelector('#box').innerHTML = ` Hii, you've scored ${right} / ${total}`;
        endQuiz();
    } else {
        reset();
        let data = question[index];
        queBox.innerText = `Q${index + 1}. ${data.que}  ${index}/${total}`;
        options[0].nextElementSibling.innerText = data.a;
        options[1].nextElementSibling.innerText = data.b;
        options[2].nextElementSibling.innerText = data.c;
        options[3].nextElementSibling.innerText = data.d;
    }

}

document.querySelector('#submit').addEventListener('click', function () {
    const data = question[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
});

const getAnswer = () => {
    let answer;
    options.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    options.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById('box').innerHTML =
        `<div>
            <h3> Hii, you've scored ${right} / ${total} </h3>
        </div>
    `;
}



loadQuestion();