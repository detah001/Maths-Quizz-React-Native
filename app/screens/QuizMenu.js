import React, { useState } from "react"

import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from "react-native"
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

    const renderQuestions = () => {
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

    const completeAnswer = (selectedOption) => {
        let selectedCorrectOption = allQuestions[currentQuestionIndex]['correctQuestion'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(selectedCorrectOption);
        setIsOptionDisabled(true);
        if (selectedOption == selectedCorrectOption) {
            setScore(score + 1)
        }
    }

    const renderOptions = () => {
        return (
            <View>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity
                            onPress={() => completeAnswer(option)}
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
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30 / 2,
                                        backgroundColor: Colors.success,
                                        justifyContent: 'center', alignItems: "center"
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: Colors.white,
                                            fontSize: 20,
                                        }} />
                                    </View>
                                ) : option == currentOptionSelected ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30 / 2,
                                        backgroundColor: Colors.error,
                                        justifyContent: 'center', alignItems: "center"
                                    }}>
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

                {/* Backgrond Image */}

            </View>
        </SafeAreaView>
    )
}

export default Quiz