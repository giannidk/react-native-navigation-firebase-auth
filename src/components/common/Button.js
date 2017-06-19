import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles; 
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
                <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#099880',
    },
    textStyle: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 16,
    },
};

export { Button };
