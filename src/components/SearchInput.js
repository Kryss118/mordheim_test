import React, { useState } from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchInput = () => {
    const [nomeBanda, setNomeBanda] = useState('');
    const [puntiBanda, setPunti] = useState('');

    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Nome della Banda'
                    onChangeText={(newTerm) => setNomeBanda(newTerm)}
                    value={nomeBanda}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    onEndEditing={() => console.log(nomeBanda)}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='punti da spendere'
                    onChangeText={(newTerm) => setPunti(newTerm)}
                    value={puntiBanda}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    onEndEditing={() => console.log(puntiBanda)}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#EFEFF0',
        height: 36,
        width: 240,
        borderRadius: 20,
        margin: 16,
        alignItems: 'center',
        alignSelf: 'center'
    },
    textInput: {
        flex: 1,
        color: "#848488"
    }
});

export default SearchInput;