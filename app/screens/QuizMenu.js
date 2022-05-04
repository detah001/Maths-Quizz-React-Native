import React, { useState, useEffect, useSyncExternalStore } from "react"

import { View, Modal, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Animated, Alert } from "react-native"
import { Colors, Sizes, Styles, StylesMedal } from "../constants"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { QuizQuestions, QuizNextLevels, Levels, TextFeedback } from "../data";

const Quiz = ({ navigation, route }) => {

    // all constants 

    const allQuestions = QuizQuestions[route.params.titleOfLevel].questions;
    const pointsAchieved = QuizQuestions[route.params.titleOfLevel].pointsPerLevel;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null)
    const [correctOption, setCorrectOption] = useState(null)
    const [isOptionDisabled, setIsOptionDisabled] = useState(false)
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)

    const [counter, setCounter] = useState(QuizQuestions[route.params.titleOfLevel].timeToAnswer);
    const [startCountdown, setStartCountdown] = useState(false);
    const [showMedal, setShowMedal] = useState(false)

    const [counterProgress, setCounterProgress] = useState(new Animated.Value(0))
    const progressCounter = counterProgress.interpolate({
        inputRange: [0, QuizQuestions[route.params.titleOfLevel].timeToAnswer],
        outputRange: ['0%', '100%']
    })

    const [progress, setProgress] = useState(new Animated.Value(0))
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%', '100%']
    })

    const showAlert = (alertTitle, alertMessage) => {
        Alert.alert(
            alertTitle,
            alertMessage,
            [
                {
                    text: "OK",
                    onPress: () => navigation.navigate('Main'),
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
            }
        );
    }

    const nextLevel = (levelNow) => {
        const nextLevelFromNow = QuizNextLevels[levelNow]
        if (nextLevelFromNow === undefined) {
            showAlert("Last Level", "You have reached to the last level, you will be redirected to the main menu.");
        } else {
            navigation.navigate(nextLevelFromNow, { titleOfLevel: nextLevelFromNow })
            refreshConstants();
        }
    }

    const refreshConstants = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setCounter(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionDisabled(false);
        setShowNextButton(false);
        setShowMedal(false)
        setStartCountdown(false);

        Animated.timing(counterProgress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();

        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    // handlers for different events
    const handleTimer = () => {
        useEffect(() => {
            if (startCountdown) {
                const timer = counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

                Animated.timing(counterProgress, {
                    toValue: counter,
                    duration: 100,
                    useNativeDriver: false
                }).start();

                if (counter === 0) {
                    setStartCountdown(false);
                    if (currentOptionSelected == null) {
                        if (currentQuestionIndex == allQuestions.length - 1) {
                            // SHOW THE SCORE
                            setShowMedal(true)
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
                
                Animated.timing(progress, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false
                }).start();
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
                setShowMedal(true)
            } else {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setCurrentOptionSelected(null);
                setCorrectOption(null);
                setIsOptionDisabled(false);
                setShowNextButton(false);

                setStartCountdown(true);
                setCounter(QuizQuestions[route.params.titleOfLevel].timeToAnswer);
            }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
        } else if (buttonType === 'Quit') {
            navigation.navigate('Main')

            Animated.timing(progress, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false
            }).start()
        }
    }

    // renders for different menus
    const renderNextButton = () => {
        if (showNextButton) {
            return (
                <View style={Styles.NextContainter}>
                    <TouchableOpacity
                        onPress={() => handleButton('Next')}
                        style={Styles.ButtonNext}
                    >

                        <Text style={{ color: Colors.white, fontSize: 20 }}>Next Question</Text>
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
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    top: -50,
                }}>

                    <Text style={Styles.QuestionLevel}>{route.params.titleOfLevel}</Text>
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
                                left: 15,

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

    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 25,
                top: 180,
                borderRadius: 5,
                backgroundColor: '#00000020'
            }}>
                <Animated.View style={[{
                    height: 25,
                    borderRadius: 5,
                    backgroundColor: Colors.progressBar
                }, {
                    width: progressAnim
                }]}>
                </Animated.View>
                <Text style={{ top: -23, textAlign: 'center', color: Colors.white}}>Progress</Text>
            </View>
        )
    }

    const renderCounterPorgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 25,
                borderRadius: 20,
                backgroundColor: '#00000020'
            }}>
                <Animated.View style={[{
                    height: 25,
                    borderRadius: 20,
                    backgroundColor: Colors.progressBar
                }, {
                    width: progressCounter
                }]}>

                </Animated.View>
                <Text style={{ top: -22, textAlign: 'center', color: Colors.white }}>Time Left: {counter}</Text>
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

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showMedal}
                >
                    <View style={StylesMedal.MedalView}>

                        <Image
                            style={StylesMedal.BackgroundImage}
                            source={require('../assets/images/CelebrationBackground.png')}
                            resizeMode={"contain"}
                        />

                        <Text style={StylesMedal.LevelText}>{route.params.titleOfLevel}</Text>
                        <Text style={StylesMedal.QuizResultText}>Quiz Results</Text>

                        <View style={{
                            position: 'absolute',
                            width: 330,
                            height: 198,
                            left: 30,
                            top: 165,

                            backgroundColor: score > (allQuestions.length / QuizQuestions[route.params.titleOfLevel].rightAnswersToPass) ? '#46A255' : '#AE3C3C',
                            borderRadius: 10,
                        }}>
                            
                            <Text style={StylesMedal.ContainterBoxText}>{score > (allQuestions.length / QuizQuestions[route.params.titleOfLevel].rightAnswersToPass) ? 'Congratulations!' : 'Better Luck Next Time!'}</Text>
                            <Text style={StylesMedal.ContainterBoxTextDesc}>{score > (allQuestions.length / QuizQuestions[route.params.titleOfLevel].rightAnswersToPass) ? TextFeedback['Win'] : TextFeedback['Lose']}</Text>

                            <Text style={StylesMedal.ScoreText}>Your Score</Text>
                            <Text style={{
                                fontSize: 30,
                                left: 130,
                                top: 230,
                                color: score > (allQuestions.length / QuizQuestions[route.params.titleOfLevel].rightAnswersToPass) ? Colors.success : Colors.error
                            }}>{score} <Text style={{color: Colors.white}}>/ {allQuestions.length}</Text>
                            </Text>

                            <Text style={StylesMedal.EarnedPointsText}>Earned Points</Text>
                                <Text style={{
                                    fontSize: 30,
                                    top: 255,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: 'center',
                                    color: Colors.white
                                }}>{pointsAchieved} Points
                            </Text>

                            <TouchableOpacity
                                onPress={() => nextLevel(route.params.titleOfLevel)}
                                style={StylesMedal.NextBox}
                            >
                                <Text style={StylesMedal.NextBoxText}>NEXT</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Main')}
                                style={StylesMedal.BackToMenuBox}
                            >
                                <Text style={StylesMedal.BackToMenuBoxText}>BACK TO MENU</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>

                {/* Progress Bars */}
                {renderProgressBar()}
                {renderCounterPorgressBar()}

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