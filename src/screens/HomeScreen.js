import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = () => {

    return (
      <View style={styles.containerStyle}>
            <View>
                  <Text style={styles.titoloStyle}>Rotolator d'Iniziativa</Text>
            </View>
      </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#ffffff'
    },
    titoloStyle:{
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 16
    },
});

export default HomeScreen;