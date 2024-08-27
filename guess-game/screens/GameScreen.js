import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLog from "../components/game/GuessLog";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrenGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction) { //'lower' or 'greater'

        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't liet!", "You know that it's wrong...", [{ text: 'Sorry!' }]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }

        console.log(minBoundary, maxBoundary);
        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);

        setCurrenGuess(newRandomNumber);
        setGuessRounds(previousGuessGrounds => [newRandomNumber, ...previousGuessGrounds]);
    }

    const guessRoundsListLenght = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Opponent's guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('greater')}>
                            <Ionicons name="remove" size={24} color='white' />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')} >
                            <Ionicons name="add" size={24} color='white' />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.lisetContainer}>
                <FlatList data={guessRounds} renderItem={(itemData) => <GuessLog roundNumber={guessRoundsListLenght - itemData.index} guess={itemData.item} />} keyExtractor={(item) => item} />
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 10
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer:
    {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    },
    lisetContainer: {
        flex: 1,
        padding: 16
    }
});