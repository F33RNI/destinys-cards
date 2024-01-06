/*
 * Copyright (C) 2023-2024 Fern Lane, Destiny's cards app
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Switch
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { styles, colors } from "./Style";
import LayoutScreen from "./LayoutScreen";
import { LAYOUTS } from "./Cards"

// User messages
const MESSAGES = require("./assets/Messages.json");

// App icon
const ICON = require("./assets/icon.png");

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
        key={layout.title}
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
      <TouchableOpacity key={layout.title} style={styles.buttonMainScreen} title={layout.title} onPress={() => navigation.navigate(layout.title)}>
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
  const [playFlipSound, setPlayFlipSound] = useState(false);

  useEffect(() => {
    loadPlayFlipSound();
  }, []);

  const loadPlayFlipSound = async () => {
    try {
      const value = await AsyncStorage.getItem("playFlipSound");
      if (value !== null) {
        setPlayFlipSound(value === true.toString());
      }

      // Set true on first run
      else {
        setPlayFlipSound(true);
        await savePlayFlipSound(true);
      }
    } catch (error) {
      console.log("Error loading playFlipSound value:", error);
    }
  };

  const savePlayFlipSound = async (value) => {
    try {
      await AsyncStorage.setItem("playFlipSound", value.toString());
    } catch (error) {
      console.log("Error saving playFlipSound value: " + AsyncStorage.toString(), error);
    }
  };

  const toggleSwitch = async (value) => {
    await setPlayFlipSound(value);
    await savePlayFlipSound(value);
  };

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Image source={ICON} style={styles.imageIcon} />

        <Text style={styles.textInstruction}>{MESSAGES.instructionMain}</Text>

        {renderScreenSelector(navigation)}

        <View style={styles.switchContainer}>
          <Text style={styles.textInstruction}>{MESSAGES.flipSound}</Text>
          <Switch
            trackColor={{ true: colors.primary, false: "gray" }}
            thumbColor={colors.primary}
            style={styles.switch}
            value={playFlipSound}
            onValueChange={toggleSwitch}
          />
        </View>
      </View>
    </ScrollView>
  );
}
