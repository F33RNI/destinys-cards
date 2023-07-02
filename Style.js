/*
 * Copyright (C) 2023 Fern Lane, Destiny's cards app
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

import { StyleSheet } from "react-native";

const colors = {
    primary: '#93a4d2',
    secondary: '#87abbe',
    background: '#423b52',
    text: '#423b52'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "center",
        justifyContent: "center",
    },

    button: {
        backgroundColor: colors.primary,
        color: colors.text,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },

    buttonMainScreen: {
        backgroundColor: colors.primary,
        color: colors.text,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        width: 340,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: colors.text,
        fontWeight: 'bold'
    },

    textInstruction: {
        color: colors.primary,
        fontSize: 18,
        padding: 14,
    },

    imageContainer: {
        marginLeft: 2,
        marginRight: 2,
    },

    image: {
        width: 30,
        height: 50,
    },

    imageIcon: {
        width: 100,
        height: 100,
    },

    imageFront: {
        aspectRatio: 0.5666,
        height: 100,
    },

    imageFrontRotated: {
        aspectRatio: 0.5666,
        height: 100,
        transform: [{ rotate: '180deg' }]
    },

    imageParentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },

    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    switch: {
        marginLeft: 5,
    },

});

export { styles, colors }