import React, { Component } from 'react';
import { View, Platform, Image } from 'react-native';
import KeysButtons from '../components/KeysButtons';
import CapoButtons from '../components/CapoButtons';
import CapoKey from '../components/CapoKey';
import icon from '../assets/icons/pure-icon.png';

class MainScreen extends Component {
  static navigationOptions = () => ({
    title: 'Capo Keys',
    headerStyle: {
      height: Platform.OS === 'android' ? 78 : 54,
      backgroundColor: '#2169F3'
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? 24 : 0,
      color: 'white'
    },
    headerLeft: (
      <Image
        source={icon}
        style={{
          marginTop: 20,
          marginLeft: 10,
          width: 40,
          height: 40
        }}
      />
    ),
  });

  render() {
    return (
      <View style={styles.containerStyle}>
        <KeysButtons />
        <CapoButtons />
        <CapoKey />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

export default MainScreen;
