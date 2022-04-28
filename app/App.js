import React, { useState } from "react"

import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from "react-native"
import { Colors, Sizes, Styles } from "./constants"

import Levels from "./data/Levels"
import QuizQuestions from "./data/QuizQuestions"

import { Quiz } from "./screens/index"

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={MainMenu} name="Main" options={{headerShown: false}}/>
        <Stack.Screen component={Home} name="Level Easy" options={{ headerShown: false }} />
        <Stack.Screen component={Home} name="Level Medium" options={{ headerShown: false }} />
        <Stack.Screen component={Home} name="Level Hard" options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const MainMenu = ({navigation}) => {

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
              style={Styles.ImageKid}
              source={require('./assets/images/backgroundKid.png')}
            />
          </View>
          <View style={Styles.BubbleEffectDiagram1} />
          <View style={Styles.BubbleEffectDiagram2} />
          <View style={Styles.BubbleEffectDiagram3} />

          {rendersOptionsMainMenu()}
        </View>
      </View>
    </SafeAreaView>
  )
}

const Home = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome Home, {route.params.titleOfLevel}</Text>
    </View >
  )
}

export default App;