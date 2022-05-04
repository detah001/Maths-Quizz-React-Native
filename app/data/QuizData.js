export const QuizQuestions = {
    "Level Easy": {
        questions: [
            {
                question: "What is 5x2?",
                options: ["dawdadwdwdwdww", "dwadaw", "gww", "dwopi"],
                correctQuestion: "dawdadwdwdwdww"
            },
            {
                question: "rwadwas",
                options: [""],
                correctQuestion: ""
            },
            {
                question: "gdwsxa",
                options: [""],
                correctQuestion: ""
            }
        ],
        rightAnswersToPass: 2,
        timeToAnswer: 10,
        pointsPerLevel: 500
    },
    "Level Medium": {
        questions: [
            {
                question: "",
                options: [""],
                correctQuestion: ""
            },
            {
                question: "",
                options: [""],
                correctQuestion: ""
            },
            {
                question: "",
                options: [""],
                correctQuestion: ""
            }
        ],
        rightAnswersToPass: 3,
        timeToAnswer: 20,
        pointsPerLevel: 1000
    },
    "Level Hard": {
        questions: [
            {
                question: "",
                options: [""],
                correctQuestion: ""
            },
            {
                question: "",
                options: [""],
                correctQuestion: ""
            }
        ],
        rightAnswersToPass: 2,
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
    "Win": "dawdawdawdaw!",
    "Lose": "ddwdawd!"
}