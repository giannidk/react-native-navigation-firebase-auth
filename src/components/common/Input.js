import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, placeholder, autoCorrect, onChangeText, secureTextEntry }) => {

const { containerStyle, labelStyle, textInputStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                placeholder={placeholder}
                style={textInputStyle}
                value={value}
                autoCorrect={autoCorrect}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelStyle: {
        flex: 1
    },
    textInputStyle: {
        borderWidth: 1,
        borderColor: '#DDD',
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        flex: 3
    }
};

export { Input };
