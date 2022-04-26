import React from "react";
import {Dimensions, StyleSheet} from "react-native";
const {width, height} = Dimensions.get("window")

export const Colors = {
    primary : "#614c45",
    secondary : "#4d2e2a",
    accents : "#b32b19",
    
    white : "#e3e1da",
    black : "#403f3d",

    success : "#47c92c",
    error : "#ff0000",
    background: "#CED1D6"
}

export const Sizes = {
    base : 10,
    width,
    height
}

export const Styles = StyleSheet.create({
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
    ImageKid: {
        position: 'absolute',
        width: 459,
        height: 236,
        left: -35,
        top: 80,
    }
})