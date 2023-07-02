import {
    CARDS_MAJOR,
    CARDS_MINOR_CUPS,
    CARDS_MINOR_PENTACLES,
    CARDS_MINOR_SWORDS,
    CARDS_MINOR_WANDS,
    IMAGES,
    IMAGE_BACK,
    LAYOUTS,
    ARCANA_MAJOR,
    ARCANA_WANDS,
    ARCANA_CUPS,
    ARCANA_SWORDS,
    ARCANA_PENTACLES
} from "./Cards"







const CardReader = async (arcana, cardNumber, flipped) => {
    var cardData = null;
    switch (arcana) {
        case ARCANA_WANDS:
            cardData = CARDS_MINOR_WANDS[cardNumber];
            break;
        case ARCANA_CUPS:
            cardData = CARDS_MINOR_CUPS[cardNumber];
            break;
        case ARCANA_SWORDS:
            cardData = CARDS_MINOR_SWORDS[cardNumber];
            break;
        case ARCANA_PENTACLES:
            cardData = CARDS_MINOR_PENTACLES[cardNumber];
            break;
        default:
            cardData = CARDS_MAJOR[cardNumber];
            break;
    }
    alert(cardData.cardName);
    //const cardData = require('./customData.json');*/
};

export {
    CardReader
};