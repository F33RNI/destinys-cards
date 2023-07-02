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
        margin:10
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

    textfield: {
        backgroundColor: '#FFFFFF',
        color: '#550044',
        borderRadius: 5,
        padding: 10,
    },

    label: {
        color: '#550044',
        fontSize: 14,
    },

    icon: {
        color: '#FFFFFF',
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
        transform: [{rotate: '180deg'}]
    },

    imageParentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    }

});

export { styles, colors }