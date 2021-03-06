import React from "react";
import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window")

export const Colors = {
    primary: "#614c45",
    secondary: "#4d2e2a",
    progressBar: "#0a8c51",

    white: "#e3e1da",
    black: "#403f3d",

    success: "#47c92c",
    error: "#ff0000",
    background: "#CED1D6",

    medalBackGround: "#666869",
}

export const Sizes = {
    base: 10,
    width,
    height
}

export const Styles = StyleSheet.create({
    welcomeText: {
        position: 'absolute',
        width: 257,
        height: 29,
        left: 75,
        top: 80,

        fontWeight: 'normal',
        fontSize: 24,

        color: '#CED1D6',
    },
    infoText: {
        position: 'absolute',
        width: 292,
        height: 61,
        left: 50,
        top: 161,

        fontWeight: 'normal',
        fontSize: 14,

        color: '#CED1D6',
    },
    menuBorderd: {
        position: 'absolute',
        width: 390,
        height: 304,
        left: 0,
        top: -34,

        backgroundColor: '#2B2B2B',
        borderRadius: 36,
    },
    menuBorderdDesc: {
        position: 'absolute',
        width: 329,
        height: 258,
        left: 31,
        top: 141,

        backgroundColor: '#333131',
        borderRadius: 24,
    },
    LevelsBoxes: {
        width: 329,
        height: 80,
        left: 32,
        top: 445,

        marginBottom: 25,
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: '#363636',
        borderRadius: 10,
    },
    LevelOptionsText: {
        fontSize: 20,
        color: Colors.white,
    },
    BubbleEffectDiagram1: {
        position: 'absolute',
        width: 230,
        height: 217,
        left: -140,
        top: -110,

        backgroundColor: '#4F5155',
        borderRadius: 90,
    },
    BubbleEffectDiagram2: {
        position: 'absolute',
        width: 230,
        height: 217,
        left: -150,
        top: 497,

        backgroundColor: '#4F5155',
        borderRadius: 150,
    },
    BubbleEffectDiagram3: {
        position: 'absolute',
        width: 230,
        height: 217,
        left: 295,
        top: 685,

        backgroundColor: '#4F5155',
        borderRadius: 150,
    },
    BackgroundKid: {
        position: 'absolute',
        width: 459,
        height: 236,
        left: -35,
        top: 80,
    },
    QuestionTitle: {
        position: 'absolute',
        width: 287,
        height: 43,
        left: 12,
        top: 101,

        fontWeight: 'normal',
        fontSize: 24,

        color: Colors.white
    },
    QuestionLevel: {
        position: 'absolute',
        width: 300,
        height: 29,
        left: 14,
        top: 63,
        opacity: 0.5,

        fontWeight: 'normal',
        fontSize: 24,

        color: Colors.white
    },
    Question: {
        position: 'absolute',
        width: 290,
        height: 100,
        left: 8,
        top: 140,

        fontWeight: 'normal',

        fontSize: 24,

        color: Colors.white
    },
    BoxChoicesText: {
        flex: 1,

        textAlign: 'center',

        fontWeight: 'normal',
        fontSize: 24,

        color: Colors.white
    },
    QuestionRight: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: Colors.success,
        justifyContent: 'center',
        alignItems: "center"
    },
    QuestionWrong: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: Colors.error,
        justifyContent: 'center',
        alignItems: "center"
    },
    NextContainter: {
        position: 'absolute',
        width: 363,
        height: 266,
        left: 13,
        top: 250,

        backgroundColor: '#6C6B6B',
        borderRadius: 26,
        opacity: 0.9
    },
    ButtonNext: {
        width: 329,
        height: 86,
        left: 15,
        top: 40,

        alignItems: "center",
        justifyContent: "center",

        backgroundColor: '#626262',
        borderRadius: 10,
    },
    ButtonQuit: {
        width: 329,
        height: 86,
        left: 15,
        top: 59,

        alignItems: "center",
        justifyContent: "center",

        backgroundColor: '#626262',
        borderRadius: 10,
    }
})

export const StylesMedal = StyleSheet.create({
    MedalView: {
        flex: 1,
        backgroundColor: Colors.medalBackGround,
        alignItems: 'center',
        justifyContent: 'center'
    },
    BackgroundImage: {
        position: 'absolute',
        width: 484,
        height: 844,
        left: -47,
        top: 0
    },
    LevelText: {
        position: 'absolute',
        width: 300,
        height: 29,
        left: 135,
        top: 78,
        opacity: 0.5,

        fontWeight: 'normal',
        fontSize: 24,

        color: Colors.white
    },
    QuizResultText: {
        position: 'absolute',
        width: 287,
        height: 43,
        left: 95,
        top: 104,

        fontWeight: 'bold',
        fontSize: 34,

        color: Colors.white
    },
    ContainterBoxText: {
        position: 'absolute',
        width: 287,
        height: 43,
        top: 21,

        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 24,

        textAlign: 'center',
        marginLeft: 20,

        color: Colors.white
    },
    ContainterBoxTextDesc: {
        position: 'absolute',
        width: 287,
        height: 120,
        top: 50,

        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 24,

        textAlign: 'center',
        marginLeft: 20,

        color: Colors.white
    },
    ScoreText: {
        position: 'absolute',
        width: 287,
        height: 43,
        left: 100,
        top: 205,
        opacity: 0.5,

        fontWeight: 'normal',
        fontSize: 24,

        color: Colors.white
    },
    EarnedPointsText: {
        position: 'absolute',
        width: 287,
        height: 43,
        left: 85,
        top: 265,
        opacity: 0.5,

        fontWeight: 'normal',
        fontSize: 24,

        color: Colors.white
    },
    NextBox: {
        position: 'absolute',
        width: 329,
        height: 86,
        left: 0,
        top: 350,

        backgroundColor: '#626262',
        borderRadius: 10,
    },
    NextBoxText: {
        textAlign: 'center',
        alignItems: 'center',
        marginVertical: 15,

        color: Colors.white,
        fontSize: 40,

        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    BackToMenuBox: {
        position: 'absolute',
        width: 329,
        height: 86,
        left: 0,
        top: 450,

        backgroundColor: '#626262',
        borderRadius: 10,
    },
    BackToMenuBoxText: {
        textAlign: 'center',
        alignItems: 'center',
        marginVertical: 15,

        color: Colors.white,
        fontSize: 40,

        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})