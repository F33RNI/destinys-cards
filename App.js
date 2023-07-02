import React from 'react';
import { View, ScrollView, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { styles, colors } from "./Style";

const MESSAGES = require("./assets/Messages.json");

const ICON = require("./assets/icon.png");

import LayoutScreen from "./LayoutScreen";

import { LAYOUTS } from "./Cards"


// Stack Navigator
const Stack = createStackNavigator();

/**
 * Builds app screens (layouts)
 * @returns 
 */
const stackScreenBuilder = () => {
  const stackScreens = [];
  LAYOUTS.forEach(layout => {
    stackScreens.push(
      <Stack.Screen
        name={layout.title}
        component={LayoutScreen}
        options={{
          headerShown: true,
          "title": layout.title,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        initialParams={{ "layout": layout }}
      />
    );
  });
  return stackScreens;
};

/**
 * Renders layout buttons
 * @param {} navigation 
 * @returns 
 */
const renderScreenSelector = (navigation) => {
  const layoutSelectors = [];
  LAYOUTS.forEach(layout => {
    layoutSelectors.push(
      <TouchableOpacity style={styles.button} title={layout.title} onPress={() => navigation.navigate(layout.title)}>
        <Text style={styles.text}>{layout.title}</Text>
      </TouchableOpacity>
    );
  });
  return layoutSelectors;
};

// Main App component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LayoutSelector"
          component={LayoutSelector}
          options={{
            headerShown: false
          }} />

        {stackScreenBuilder()}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// First Window component
function LayoutSelector({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Image source={ICON} style={styles.imageIcon} />

        <Text style={styles.textInstruction}>{MESSAGES.instructionMain}</Text>

        {renderScreenSelector(navigation)}

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
