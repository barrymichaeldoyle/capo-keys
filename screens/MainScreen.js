import React, { Component } from 'react';
import { View, Platform, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import ChordsModal from '../components/ChordsModal';
import KeysButtons from '../components/KeysButtons';
import CapoButtons from '../components/CapoButtons';
import CapoKey from '../components/CapoKey';
import ViewChordsButton from '../components/ViewChordsButton';
import BottomBannerAd from '../components/BottomBannerAd';
import icon from '../assets/icons/pure-icon.png';
import { SCREEN_WIDTH, STATUS_BAR_HEIGHT } from '../constants';

class MainScreen extends Component {
  static navigationOptions = () => ({
    title: 'Capo Keys',
    headerStyle: {
      height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: '#2169F3'
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
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
    const { containerStyle, buttonContainerStyle, dividerStyle } = styles;

    return (
      <View style={{ flex: 1 }}>
        <ChordsModal />

        <View style={containerStyle}>
          <KeysButtons />
          <Divider style={dividerStyle} />
          <CapoButtons />
          <Divider style={dividerStyle} />
          <CapoKey />
        </View>

        <ViewChordsButton style={buttonContainerStyle} />

        <BottomBannerAd />
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
  buttonContainerStyle: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    backgroundColor: '#ddd'
  },
  dividerStyle: {
    width: SCREEN_WIDTH * 0.9,
    backgroundColor: '#2169F3'
  }
};

export default MainScreen;
