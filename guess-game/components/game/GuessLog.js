import { View, Text, StyleSheet } from "react-native"

import Colors from "../../constants/colors";

function GuessLog({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Guess: {guess}</Text>
        </View>
    );
}

export default GuessLog;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4
    },
    itemText:{
        fontFamily: 'open-sans'
    }
});