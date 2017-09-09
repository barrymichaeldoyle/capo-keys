import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class KeysButtons extends Component {
  render() {
    const {
      containerStyle,
      buttonStyle,
      selectedTextStyle
    } = styles;
    
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text h3>Key</Text>
        <Text h1 style={{ marginBottom: 2 }}>C</Text>
        <ButtonGroup
          containerStyle={containerStyle}
          buttonStyle={buttonStyle}
          selectedTextStyle={selectedTextStyle}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    height: 40,
    width: SCREEN_WIDTH * 0.9
  },
  buttonStyle: {
    backgroundColor: 'white'
  },
  selectedTextStyle: {
    color: 'orange',
    fontWeight: '900'
  }
};

export default KeysButtons;
