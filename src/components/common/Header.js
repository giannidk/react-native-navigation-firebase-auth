import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const { headerStyle, textStyle } = styles;
    return (
            <View style={headerStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
    );
};

const styles = {
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        backgroundColor: '#099880',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
    },
    textStyle: {
        color: '#FFF',
        fontWeight: '500',
        fontSize: 20,
    }
};

export { Header };
