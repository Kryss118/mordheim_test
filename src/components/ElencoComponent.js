import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ElencoComponent = () => {
    const elencoBande = [
        {name: "Mercenari di Middenheim", id: 0},
        {name: "Mercenari di Reikland", id: 1},
        {name: "Mercenari di Marienburg", id: 2},
        {name: "Culto dei Posseduti", id: 3},
        {name: "Cacciatori di Streghe", id: 4},
        {name: "Sorelle Sigmarite", id: 5},
        {name: "Nonmorti", id: 6},
        {name: "Skaven", id: 7},
    ];

    return (
        <View>
            <Text style={styles.stileTesto}>Bande</Text>
            <FlatList>
                data={elencoBande}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={(item, key) => item.id}
            </FlatList>
            <Text>fine</Text>
        </View>
    )
};

const styles = StyleSheet.create({
        stileTesto: {
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold'
        }
});

export default ElencoComponent;