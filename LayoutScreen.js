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

import React, { useState } from "react";
import { Audio } from "expo-av";
import {
    ScrollView,
    View,
    Image,
    Text,
    StatusBar,
    TouchableOpacity,
    Alert
} from "react-native";
import { styles } from "./Style";

import {
    CARDS_MAJOR,
    CARDS_MINOR_CUPS,
    CARDS_MINOR_PENTACLES,
    CARDS_MINOR_SWORDS,
    CARDS_MINOR_WANDS,
    IMAGES,
    IMAGE_BACK
} from "./Cards"

// User messages
const MESSAGES = require("./assets/Messages.json");

// Flip sound
const SOUND_FLIP = require("./assets/Sounds/flip.mp3");

// Layout generating states
const LAYOUT_STATE_INIT = 0;
const LAYOUT_STATE_GENERATING = 1;
const LAYOUT_STATE_DONE = 2;

// www.random.org timeout
const REQUEST_TIMEOUT = 3000;

function LayoutScreen({ route, navigation }) {
    // Extract cards layout
    const layout = route.params.layout;

    // Generate cards
    let layoutCardsRaw = [];
    layout.cards.forEach(card => {
        switch (card) {
            case "major":
                layoutCardsRaw = layoutCardsRaw.concat(CARDS_MAJOR);
                break;
            case "cups":
                layoutCardsRaw = layoutCardsRaw.concat(CARDS_MINOR_CUPS);
                break;
            case "pentacles":
                layoutCardsRaw = layoutCardsRaw.concat(CARDS_MINOR_PENTACLES);
                break;
            case "swords":
                layoutCardsRaw = layoutCardsRaw.concat(CARDS_MINOR_SWORDS);
                break;
            case "wands":
                layoutCardsRaw = layoutCardsRaw.concat(CARDS_MINOR_WANDS);
                break;
            default:
                break;
        }
    });

    // Initialize array of flags of visible cards
    const [selectedCards, setSelectedCards] = useState(new Array(layoutCardsRaw.length).fill(false));

    // Initialize array of indexes and position of cards to show
    const [openedCards, setOpenedCards] = useState([]);

    // Initialize arrays of layout (filled by random generator)
    const [cardIndexes, setCardIndexes] = useState([]);
    const [cardRotations, setCardRotations] = useState([]);

    // LAYOUT_STATE_INIT / LAYOUT_STATE_GENERATING / LAYOUT_STATE_DONE
    const [layoutState, setLayoutState] = useState(LAYOUT_STATE_INIT);

    // Sound for card flip
    const [sound, setSound] = useState();
    React.useEffect(() => {
        return sound
            ? () => { sound.unloadAsync(); }
            : undefined;
    }, [sound]);

    /**
     * Generates new card layout
     */
    const createLayout = () => {
        // Reset data
        setSelectedCards(new Array(layoutCardsRaw.length).fill(false));
        setOpenedCards([]);
        setCardIndexes([]);
        setCardRotations([]);

        // Set state to generating
        setLayoutState(LAYOUT_STATE_GENERATING);

        // Create new GET request with timeout
        const cardNumbersRequest = new XMLHttpRequest();
        cardNumbersRequest.timeout = REQUEST_TIMEOUT;
        cardNumbersRequest.onreadystatechange = () => {
            try {
                if (cardNumbersRequest.readyState !== 4) {
                    return;
                }

                if (cardNumbersRequest.status === 200) {
                    // Split by new line and convert to array of numbers
                    const cardNumbers = cardNumbersRequest.responseText.replaceAll("\r", "").split("\n").map(Number).slice(0, -1);
                    // Create new GET request with timeout for cards position
                    const cardPositionsRequest = new XMLHttpRequest();
                    cardPositionsRequest.timeout = REQUEST_TIMEOUT;
                    cardPositionsRequest.onreadystatechange = async () => {
                        try {
                            if (cardPositionsRequest.readyState !== 4) {
                                return;
                            }

                            if (cardPositionsRequest.status === 200) {
                                // Fill arrays
                                setCardIndexes(cardNumbers);
                                setCardRotations(cardPositionsRequest.responseText.replaceAll("\r", "").split("\n").map(Number).map(Boolean).slice(0, -1));

                                // Show all cards
                                setSelectedCards(new Array(layoutCardsRaw.length).fill(true));

                                // Generation done
                                setLayoutState(LAYOUT_STATE_DONE);
                            }

                            // Any error
                            else {
                                throw new Error(`Code ${cardPositionsRequest.status}`);
                            }
                        } catch (error) {
                            Alert.alert("Error", error.toString());
                        }
                    };

                    // Send request to get card positions
                    cardPositionsRequest.open("GET", `https://www.random.org/integers/?num=${layoutCardsRaw.length}&min=0&max=1&col=1&base=10&format=plain&rnd=new`, true);
                    cardPositionsRequest.setRequestHeader("keep-alive", false);
                    cardPositionsRequest.send();
                }

                // Any error
                else {
                    throw new Error(`Code ${cardNumbersRequest.status}`);
                }
            } catch (error) {
                Alert.alert("Error", error.toString());
            }
        };

        // Send request to get card numbers
        cardNumbersRequest.open("GET", `https://www.random.org/sequences/?min=0&max=${layoutCardsRaw.length - 1}&format=plain&rnd=new&col=1`, true);
        cardNumbersRequest.setRequestHeader("keep-alive", false);
        cardNumbersRequest.send();
    };

    /**
     * Handles click on card
     * @param {Number} cardIndex Real (not random) card index
     */
    const cardProcessor = async (cardIndex) => {
        // Ignore if card is hidden
        if (!selectedCards[cardIndex]) {
            return;
        }

        // Play flip sound
        const { sound } = await Audio.Sound.createAsync(SOUND_FLIP);
        setSound(sound);
        await sound.playAsync();

        // Hide current card
        selectedCards[cardIndex] = false;
        setSelectedCards(selectedCards.slice());

        // Count number of cards that we already use
        let cardsUsed = 0;
        for (let i = 0; i < selectedCards.length; i++) {
            if (!selectedCards[i]) {
                cardsUsed++;
            }
        }

        // Hide all cards
        if (cardsUsed >= layout.usefulCards) {
            setSelectedCards(new Array(layoutCardsRaw.length).fill(false));
        }

        // Select current card
        openedCards.push({ "index": cardIndexes[cardIndex], "rotated": layout.canRotate ? cardRotations[cardIndex] : false });
        setOpenedCards(openedCards.slice());
    };

    const cardMeaning = (cardIndex, openedCardIndex, rotated) => {
        // Generate card name
        let cardName = layout.cardPositionName[openedCardIndex];
        if (cardName.length > 0) {
            cardName += ": "
        }
        cardName += layoutCardsRaw[cardIndex].cardName;
        if (rotated) {
            cardName += " " + MESSAGES.rotated;
        }

        // Get general description
        const generalMeaning = layoutCardsRaw[cardIndex].generalShort[rotated ? 1 : 0];

        // Get detailed description
        const detailedMeaning = layout.canRotate ? layoutCardsRaw[cardIndex][layout.useMeaning][rotated ? 1 : 0] : layoutCardsRaw[cardIndex][layout.useMeaning];

        Alert.alert(cardName, generalMeaning + "\n\n" + detailedMeaning);
    };

    /**
     * Renders selected cards and rotates them if needed
     * @returns Array of elements
     */
    const renderSelectedCards = () => {
        const selectedCardElements = [];
        for (let i = 0; i < openedCards.length; i++) {
            const imageStyle = openedCards[i].rotated ? styles.imageFrontRotated : styles.imageFront;
            imageStyle.height = layout.openedCardHeight;
            selectedCardElements.push(
                <TouchableOpacity
                    key={openedCards[i].index + 1000}
                    style={styles.imageContainer}
                    onPress={() => cardMeaning(openedCards[i].index, i, openedCards[i].rotated)} >
                    <Image
                        source={IMAGES[layoutCardsRaw[openedCards[i].index].cardImage]}
                        style={imageStyle} />
                </TouchableOpacity>
            );
        }
        return selectedCardElements;
    };

    /**
     * Renders all cards on multiple rows
     * @returns Array of elements
     */
    const renderCards = () => {
        if (layoutState < LAYOUT_STATE_DONE || (layoutState === LAYOUT_STATE_DONE && selectedCards.every((card) => !card))) {
            return [];
        }
        const cardRows = [];
        for (let row = 0; row < layout.rows; row++) {
            cardRows.push(
                <View key={row} style={styles.imageParentContainer}>
                    {renderCardsRow(row)}
                </View>
            );

        }
        return cardRows;
    };

    /**
     * Renders row of cards
     * @param {Number} rowIndex Index of current row
     * @returns Row of cards
     */
    const renderCardsRow = (rowIndex) => {
        const cardRow = [];
        for (let column = 0; column < layout.columns; column++) {
            const cardIndex = rowIndex * layout.columns + column;
            if (cardIndex >= layoutCardsRaw.length) {
                break;
            }
            cardRow.push(
                <TouchableOpacity
                    key={cardIndex}
                    style={styles.imageContainer}
                    onPress={async () => cardProcessor(cardIndex)} >
                    <Image
                        source={selectedCards[cardIndex] ? IMAGE_BACK : null}
                        style={styles.image} />
                </TouchableOpacity>
            );
        }
        return cardRow;
    };

    /**
     * Renders main button depending on layoutState
     * @returns Button element
     */
    const renderButton = () => {
        switch (layoutState) {
            case LAYOUT_STATE_GENERATING:
                return (
                    <TouchableOpacity key={MESSAGES.layoutCreating} style={styles.button} title={MESSAGES.layoutCreating}>
                        <Text style={styles.text}>{MESSAGES.layoutCreating}</Text>
                    </TouchableOpacity>
                );

            case LAYOUT_STATE_DONE:
                return (
                    <TouchableOpacity key={MESSAGES.layoutRegenerate} style={styles.button} title={MESSAGES.layoutRegenerate} onPress={createLayout}>
                        <Text style={styles.text}>{MESSAGES.layoutRegenerate}</Text>
                    </TouchableOpacity>
                );

            default:
                return (
                    <TouchableOpacity key={MESSAGES.layoutCreate} style={styles.button} title={MESSAGES.layoutCreate} onPress={createLayout}>
                        <Text style={styles.text}>{MESSAGES.layoutCreate}</Text>
                    </TouchableOpacity>
                );
        }
    };

    /**
     * Render number of cards to select
     * @returns Text element or null
     */
    const renderCardsLeft = () => {
        // Count number of cards that we already use
        let cardsUsed = 0;
        for (let i = 0; i < selectedCards.length; i++) {
            if (!selectedCards[i]) {
                cardsUsed++;
            }
        }

        if (layoutState === LAYOUT_STATE_DONE && cardsUsed < layout.usefulCards) {
            return <Text style={styles.textInstruction}>{MESSAGES.selectCardsLeft + (layout.usefulCards - cardsUsed)}</Text>
        }
        else {
            return null;
        }
    }

    /**
     * Renders bottom text if layout is done and we have at least one opened card
     * @returns Text element or null
     */
    const renderPressToRead = () => {
        if (layoutState === LAYOUT_STATE_DONE && openedCards.length > 0) {
            return <Text style={styles.textInstruction}>{MESSAGES.pressToRead}</Text>
        }
        else {
            return null;
        }
    };

    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <StatusBar style="auto" />

                <Text style={styles.textInstruction}>{layout.instruction}</Text>

                {renderCardsLeft()}

                {renderCards()}

                {renderButton()}

                <View style={styles.imageParentContainer}>
                    {renderSelectedCards()}
                </View>

                {renderPressToRead()}
            </View>
        </ScrollView>
    );
}

export default LayoutScreen;