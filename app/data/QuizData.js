export const QuizQuestions = {
    "Level Easy": {
        questions: [
            {
                question: "What is 1+1?",
                options: ["3", "5", "2", "4"],
                correctQuestion: "2"
            },
            {
                question: "What is 2+5?",
                options: ["6", "7", "9", "8"],
                correctQuestion: "7"
            },
            {
                question: "What is 3+3?",
                options: ["6", "5", "8", "7"],
                correctQuestion: "6"
            },
            {
                question: "What is 3+8?",
                options: ["9", "11", "10", "12"],
                correctQuestion: "11"
            },
            {
                question: "What is 5+5?",
                options: ["6", "10", "9", "11"],
                correctQuestion: "10"
            },
            {
                question: "What is 3+4?",
                options: ["7", "8", "9", "6"],
                correctQuestion: "7"
            },
            {
                question: "What is 4+4?",
                options: ["8", "9", "10", "11"],
                correctQuestion: "8"
            },
            {
                question: "What is 6+3?",
                options: ["9", "6", "7", "10"],
                correctQuestion: "9"
            },
            {
                question: "What is 2+3?",
                options: ["5", "6", "9", "10"],
                correctQuestion: "5"
            },
            {
                question: "What is 0+1?",
                options: ["1", "2", "0", "6"],
                correctQuestion: "1"
            }
        ],
        rightAnswersToPass: 5,
        timeToAnswer: 10,
        pointsPerLevel: 500
    },
    "Level Medium": {
        questions: [
            {
                question: "What is 1-1?",
                options: ["1", "0", "2", "6"],
                correctQuestion: "0"
            },
            {
                question: "What is 5-2 ?",
                options: ["3", "7", "9", "8"],
                correctQuestion: "3"
            },
            {
                question: "What is 3-3 ?",
                options: ["6", "0", "8", "7"],
                correctQuestion: "0"
            },
            {
                question: "What is 8-3 ?",
                options: ["9", "11", "10", "5"],
                correctQuestion: "5"
            },
            {
                question: "What is 5-5 ?",
                options: ["6", "0", "9", "11"],
                correctQuestion: "0"
            },
            {
                question: "What is 4-3 ?",
                options: ["7", "8", "1", "6",],
                correctQuestion: "1"
            },
            {
                question: "What is 4-4 ?",
                options: ["0", "9", "10", "11"],
                correctQuestion: "0"
            },
            {
                question: "What is 6-3 ?",
                options: ["3", "6", "7", "10",],
                correctQuestion: "3"
            },
            {
                question: "What is 3-2 ?",
                options: ["1", "6", "9", "10",],
                correctQuestion: "1"
            },
            {
                question: "What is 1-0?",
                options: ["0", "3", "5", "7"],
                correctQuestion: "0"
            }
        ],
        rightAnswersToPass: 6,
        timeToAnswer: 20,
        pointsPerLevel: 1000
    },
    "Level Hard": {
        questions: [
            {
                question: "What is 1*1?",
                options: ["1", "0", "2", "6",],
                correctQuestion: "1"
            },
            {
                question: "What is 5*2?",
                options: ["3", "7", "10", "8"],
                correctQuestion: "10"
            },
            {
                question: "What is 3*3?",
                options: ["9", "0", "8", "7"],
                correctQuestion: "9"
            },
            {
                question: "What is 8*3?",
                options: ["9", "11", "24", "5"],
                correctQuestion: "24"
            },
            {
                question: "What is 5*5?",
                options: ["6", "0", "25", "11"],
                correctQuestion: "25"
            },
            {
                question: "What is 4*3?",
                options: ["7", "12", "1", "6"],
                correctQuestion: "12"
            },
            {
                question: "What is 4*4?",
                options: ["16", "9", "10", "11"],
                correctQuestion: "16"
            },
            {
                question: "What is 6*3?",
                options: ["18", "6", "7", "10"],
                correctQuestion: "18"
            },
            {
                question: "What is 3*2?",
                options: ["6", "4", "9", "10"],
                correctQuestion: "6"
            },
            {
                question: "What is 1*0?",
                options: ["0", "2", "3", "6"],
                correctQuestion: "0"
            }
        ],
        rightAnswersToPass: 9,
        timeToAnswer: 30,
        pointsPerLevel: 1500
    },
}

export const QuizNextLevels = {
    "Level Easy": 'Level Medium',
    "Level Medium": 'Level Hard'
}

export const Levels = [
    {
        options: ['Level Easy', 'Level Medium', 'Level Hard']
    }
]

export const TextFeedback = {
    "Win": "You have won, well done make sure that you repeat this quiz to master your capabilities!",
    "Lose": "You have lost, make sure to work out every question as followed!"
}