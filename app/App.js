import React, { useState } from "react"

import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from "react-native"
import { Colors, Sizes, Styles } from "./constants"

import { Levels } from "./data";
import { QuizMenu } from "./screens"

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={MainMenu} name="Main" options={{ headerShown: false }} />
        <Stack.Screen component={QuizMenu} name="Level Easy" options={{ headerShown: false }} />
        <Stack.Screen component={QuizMenu} name="Level Medium" options={{ headerShown: false }} />
        <Stack.Screen component={QuizMenu} name="Level Hard" options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const MainMenu = ({ navigation }) => {

  const allOptions = Levels;
  const [currentLevel, setCurrentLevel] = useState(0)

  const rendersOptionsMainMenu = () => {
    return (
      <View>
        {
          allOptions[currentLevel]?.options.map(option => (
            <TouchableOpacity
              onPress={() => navigation.navigate(option, { titleOfLevel: option })}
              key={option}
              style={Styles.LevelsBoxes}
            >
              <Text style={Styles.LevelOptionsText}>{option}</Text>
            </TouchableOpacity >
          ))
        }
      </View>
    )
  }

  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <View style={{
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 16,
        backgroundColor: Colors.background,
        position: "relative"
      }}>
        <View style={Styles.menuBorderd}>
          <View style={Styles.menuBorderdDesc}>
            <Image
              style={Styles.BackgroundKid}
              source={require('./assets/images/backgroundKid.png')}
            />
          </View>
          <View style={Styles.BubbleEffectDiagram1} />
          <View style={Styles.BubbleEffectDiagram2} />
          <View style={Styles.BubbleEffectDiagram3} />

          <Text style={Styles.welcomeText}>
            Welcome to the Quiz
          </Text>

          <Text style={Styles.infoText}>
            WELCOME TO THE MATHS QUIZZ, THE WORLD CAN BE CHANGED WITH ALL THE KNOWLEDGE
          </Text>

          {rendersOptionsMainMenu()}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default App;