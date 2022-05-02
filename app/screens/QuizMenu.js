import React, { useState, useEffect, useSyncExternalStore } from "react"

import { View, Modal, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from "react-native"
import { Colors, Sizes, Styles } from "../constants"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import QuizQuestions from "../data/QuizQuestions"

const Quiz = ({ navigation, route }) => {

    const allQuestions = QuizQuestions[route.params.titleOfLevel].questions;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null)
    const [correctOption, setCorrectOption] = useState(null)
    const [isOptionDisabled, setIsOptionDisabled] = useState(false)
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)

    const [counter, setCounter] = useState(QuizQuestions[route.params.titleOfLevel].timeToAnswer);
    const [startCountdown, setStartCountdown] = useState(false);

    const handleTimer = () => {
        useEffect(() => {
            if (startCountdown) {
                const timer = counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
                if (counter === 0) {
                    setStartCountdown(false);
                    if (currentOptionSelected == null) {
                        if (currentQuestionIndex == allQuestions.length - 1) {
                            // SHOW THE SCORE
                        } else {
                            setCurrentQuestionIndex(currentQuestionIndex + 1);
                            setCurrentOptionSelected(null);
                            setCorrectOption(null);
                            setIsOptionDisabled(false);
                            setShowNextButton(false);

                            setCounter(0);

                            setStartCountdown(true);
                            setCounter(QuizQuestions[route.params.titleOfLevel].timeToAnswer);
                        }
                    }
                }
                return () => clearTimeout(timer);
            }

        }, [counter, startCountdown]);
    }

    const handleAnswer = (selectedOption) => {
        let selectedCorrectOption = allQuestions[currentQuestionIndex]['correctQuestion'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(selectedCorrectOption);
        setIsOptionDisabled(true);
        if (selectedOption == selectedCorrectOption) {
            setScore(score + 1)
        }

        setShowNextButton(true);
        setStartCountdown(false);
        setCounter(0);
    }

    const handleButton = (buttonType) => {
        if (buttonType === 'Next') {
            if (currentQuestionIndex == allQuestions.length - 1) {

            } else {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setCurrentOptionSelected(null);
                setCorrectOption(null);
                setIsOptionDisabled(false);
                setShowNextButton(false);

                setStartCountdown(true);
                setCounter(QuizQuestions[route.params.titleOfLevel].timeToAnswer);
            }
        } else if (buttonType === 'Quit') {
            navigation.navigate('Main')
        }
    }

    const renderNextButton = () => {
        if (showNextButton) {
            return (
                <View style={Styles.NextContainter}>
                    <TouchableOpacity
                        onPress={() => handleButton('Next')}
                        style={Styles.ButtonNext}
                    >

                        <Text style={{ color: Colors.white, fontSize: 20 }}>Next Button</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => handleButton('Quit')}
                        style={Styles.ButtonQuit}
                    >

                        <Text style={{ color: Colors.white, fontSize: 20 }}>Quit</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return null
        }
    }

    const renderQuestions = () => {
        handleTimer()
        if (startCountdown === false) {
            setStartCountdown(true)
        }
        console.log(score)

        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    top: -50,
                }}>

                    <Text style={Styles.QuestionLevel}>{route.params.titleOfLevel} / Time Left: {counter}</Text>
                    <Text style={Styles.QuestionTitle}>Question {currentQuestionIndex + 1} / {allQuestions.length}</Text>
                    <Text style={Styles.Question}> {allQuestions[currentQuestionIndex]?.question} </Text>

                </View>
            </View>
        )
    }

    const renderOptions = () => {
        return (
            <View>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity
                            onPress={() => handleAnswer(option)}
                            disabled={isOptionDisabled}
                            key={option}
                            style={{
                                width: 329,
                                height: 86,
                                top: 160,
                                left: 10,

                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 20,
                                marginVertical: 10,

                                backgroundColor: option == correctOption ? Colors.success + '20'
                                    : option == currentOptionSelected ? Colors.error + '20'
                                        : Colors.secondary + '20',

                                borderColor: option == correctOption ? Colors.success
                                    : option == currentOptionSelected ? Colors.error
                                        : Colors.secondary + '40',

                                borderRadius: 10,
                                borderWidth: 3
                            }}>

                            <Text style={Styles.BoxChoicesText}>{option}</Text>

                            {
                                option == correctOption ? (
                                    <View style={Styles.QuestionRight}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: Colors.white,
                                            fontSize: 20,
                                        }} />
                                    </View>
                                ) : option == currentOptionSelected ? (
                                    <View style={Styles.QuestionWrong}>
                                        <MaterialCommunityIcons name="close" style={{
                                            color: Colors.white,
                                            fontSize: 20,
                                        }} />
                                    </View>
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <StatusBar barStyle="light-contnet" backgroundColor={Colors.primary} />
            <View style={{
                flex: 1,
                paddingVertical: 40,
                paddingHorizontal: 16,
                backgroundColor: Colors.background,
                position: "relative"
            }}>

                <Image
                    style={{
                        position: 'absolute',
                        width: 484,
                        height: 844,
                        left: -47,
                        top: 0,
                    }}
                    source={require('../assets/images/QuzBackdrop.png')}
                    resizeMode={"contain"}
                />

                {/* Progress Bar */}

                {/* Question */}
                {renderQuestions()}

                {/* Options Questions */}
                {renderOptions()}

                {/* Next Button */}
                {renderNextButton()}

            </View>
        </SafeAreaView>
    )
}

export default Quiz