import { Dimensions } from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

export const BUTTON_GROUP_STYLES = {
  containerStyle: {
    height: 40,
    width: SCREEN_WIDTH * 0.9
  },
  buttonStyle: {
    backgroundColor: 'white'
  },
  selectedBackgroundColor: '#2169F3',
  selectedTextStyle: {
    color: 'orange',
    fontWeight: '900'
  }
};
