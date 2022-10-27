import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchInput from '../components/SearchInput';
import ElencoComponent from '../components/ElencoComponent';

const HomeScreen = () => {
    return (
      <View style={styles.containerStyle}>
            <View>
                  <Text style={styles.titoloStyle}>Mordheim Gang Creator</Text>
            </View>
            <View>
                  <SearchInput />
                  <ElencoComponent />
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
    }
});

export default HomeScreen;