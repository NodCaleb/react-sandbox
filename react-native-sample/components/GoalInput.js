import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native';
import { useState } from 'react';

function GoalInput({ onButtonPress, visible, closeModal }) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        onButtonPress(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your goal here'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button title='Add goal' onPress={addGoalHandler} color='#5e0acc' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={closeModal} color='#f31282' />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
        padding: 16,
        color: '#120438',
        borderRadius: 6
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    buttonsContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
    image:{
        width: 100,
        height: 100,
        margin: 20
    }
});