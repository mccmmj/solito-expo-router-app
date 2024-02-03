import { useState } from 'react';
import { View, TextInput, Image } from 'dripsy';
import { StyleSheet, Button, Modal } from 'react-native';
//import { Goal } from '@tamagui/lucide-icons'
import { HeroOutline, HeroSolid, HeroSolid20 } from '@nandorojo/heroicons'

export const Icon = () => <HeroOutline.RocketLaunch />

function GoalInput(props: { visible: boolean, onAddGoal: any, onCancel: any }) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText: string) {
        setEnteredGoalText(enteredText);
    }

    function AddGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View sx={styles.inputContainer}>
                <HeroOutline.RocketLaunch color='#5e0acc' height={100} width={100} />
                <TextInput
                    sx={styles.textInput}
                    placeholder='Your course goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View sx={styles.buttonContainer}>
                    <View sx={styles.button}>
                        <Button title='Add Goal' onPress={AddGoalHandler} />
                    </View>
                    <View sx={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} />
                    </View>
                </View>
            </View >
        </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 1,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});