// import React, { useState } from "react"
// import Quiz from "./Quiz"

// import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from "react-native"
// import { Colors, Sizes, Styles } from "../constants"

// import Levels from "../data/Levels"
// import QuizQuestions from "../data/QuizQuestions"

// const MainMenu = () => {

//     const allOptions = Levels;
//     const [currentLevel, setCurrentLevel] = useState(0)

//     const rendersOptionsMainMenu = () => {
//         return (            
//             <View>
//                 {
//                     allOptions[currentLevel]?.options.map(option => (
//                         <TouchableOpacity
//                             onPress={() => Quiz(QuizQuestions[option]) }
//                             key={option}
//                             style={Styles.LevelsBoxes}
//                         >
//                         <Text style={Styles.LevelOptionsText}>{option}</Text>
//                         </TouchableOpacity >
//                     ))
//                 }
//             </View>
//         )
//     }

//     return (
//         <SafeAreaView style={{
//             flex: 1,
//         }}>
//             <View style={{
//                 flex: 1,
//                 paddingVertical: 40,
//                 paddingHorizontal: 16,
//                 backgroundColor: Colors.background,
//                 position: "relative"
//             }}>
//                 <View style={Styles.menuBorderd}>
//                     <View style={Styles.menuBorderdDesc}>
//                         <Image 
//                             style={Styles.ImageKid}
//                             source={require('../assets/images/backgroundKid.png')}
//                         />
//                     </View>
//                     <View style={Styles.BubbleEffectDiagram1} />
//                     <View style={Styles.BubbleEffectDiagram2} />
//                     <View style={Styles.BubbleEffectDiagram3} />
//                     {rendersOptionsMainMenu()}
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }

// export default MainMenu