import React, { useState } from "react"
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from "react-native"
import { Colors, Sizes } from "../constants"

const Quiz = (optionChosen) => {
    console.log(optionChosen.questions)

    // const allQuestions = optionChosen.questions;
    // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    
    // const renderQuestions = () => {
    //     return (
    //         <View>
    //             {/* <View style={{
    //                 flexDirection: 'row',
    //                 alignItems: 'flex-end'
    //             }}>
    //                 <Text style={{
    //                     color: Colors.white,
    //                     fontSize: 30
    //                 }}>{allQuestions[currentQuestionIndex]?.question}</Text>
    //             </View> */}
    //         </View>
    //     )
    // }

    return(

        <SafeAreaView style={{
            flex: 1,
        }}>
        <StatusBar barStyle="light-contnet" backgroundColor={Colors.primary}/>
            <View style={{
                flex: 1,
                paddingVertical: 40,
                paddingHorizontal: 16,
                backgroundColor: Colors.background,
                position: "relative"
            }}>

            {/* Progress Bar */}

            {/* Question */}
            {/* {renderQuestions()} */}

            {/* Options Questions */}

            {/* Next Button */}

            {/* Backgrond Image */}

            </View>
        </SafeAreaView>
    )
}

export default Quiz