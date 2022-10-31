import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


const ElencoComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [banda, setBanda] = useState('Scegli Banda')

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
    
    const renderLabel = () => {
        if (value || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
              Bande:
            </Text>
          );
        }
        return null;
      };
      console.log(banda)
    return (
        <View>
            <Text style={styles.stileTesto}>Bande</Text>
            <View style={styles.container}>
                {renderLabel()}
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    ///inputSearchStyle={styles.inputSearchStyle}
                    ///iconStyle={styles.iconStyle}
                    data={elencoBande}
                    ///search
                    maxHeight={300}
                    labelField="name"
                    valueField="name"
                    placeholder={!isFocus ? banda : ''}
                    ///searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                        setBanda(item.name)
                    }}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
        stileTesto: {
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold'
        },
        container: {
            backgroundColor: 'white',
            padding: 16,
          },
          dropdown: {
            height: 50,
            borderColor: 'gray',
            borderWidth: 0.5,
            borderRadius: 8,
            paddingHorizontal: 8,
          },
          label: {
            position: 'absolute',
            backgroundColor: 'white',
            left: 22,
            top: 8,
            zIndex: 999,
            paddingHorizontal: 8,
            fontSize: 14,
          },
          placeholderStyle: {
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold'
          },
          selectedTextStyle: {
            fontSize: 16,
          },
          inputSearchStyle: {
            height: 40,
            fontSize: 16,
          },
});

export default ElencoComponent;