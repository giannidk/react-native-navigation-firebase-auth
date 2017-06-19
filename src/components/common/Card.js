import React from 'react';
import { View } from 'react-native';


const Card = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        margin: 5,
        marginTop: 10,
        borderWidth: 1,
        borderBottomWidth: 0,
        backgroundColor: '#FFF',
        borderColor: '#DDD',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    }
}

export { Card };
