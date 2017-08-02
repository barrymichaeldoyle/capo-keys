import React, { Component } from 'react';
import { View, Platform, Image } from 'react-native';
import { Constants } from 'expo';
import KeysButtons from '../components/KeysButtons';
import CapoButtons from '../components/CapoButtons';
import CapoKey from '../components/CapoKey';
import ViewChordsButton from '../components/ViewChordsButton';
//import BottomBannerAd from '../components/BottomBannerAd';
import icon from '../assets/icons/pure-icon.png';
import { SCREEN_WIDTH } from '../style_constants';

class MainScreen extends Component {
  static navigationOptions = () => ({
    title: 'Capo Keys',
    headerStyle: {
      height: Platform.OS === 'android' ? 54 + Constants.statusBarHeight : 54,
      backgroundColor: '#2169F3'
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
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
    const { containerStyle, adContainerStyle, buttonContainerStyle } = styles;

    return (
      <View style={{ flex: 1 }}>
        <View style={containerStyle}>
          <KeysButtons />
          <CapoButtons />
          <CapoKey />
        </View>

        <ViewChordsButton style={buttonContainerStyle} />

        <View style={adContainerStyle} />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ddd'
  },
  adContainerStyle: {
    height: 50,
    backgroundColor: '#ccc',
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainerStyle: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    backgroundColor: '#ddd'
  }
};

export default MainScreen;

/*

<KeysButtons />
<CapoButtons />
<CapoKey />

*/
