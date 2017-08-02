import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { selectKeyIndex } from '../actions';
import { SCREEN_WIDTH } from '../style_constants';

class KeysButtons extends Component {
  onButtonPress = index => { this.props.selectKeyIndex(index); }
  
  render() {
    const { selectedValues: { selectedKeyIndex }, keys } = this.props;
    const keyButtons = keys.map(key => (key.shortKey ? '/' : [key.key]));

    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text h3>Key</Text>
        <Text h1 style={{ marginBottom: 10 }}>{keys[selectedKeyIndex].key}</Text>
        <ButtonGroup
          onPress={this.onButtonPress}
          selectedIndex={selectedKeyIndex}
          buttons={keyButtons}
          containerStyle={{ height: 40, width: SCREEN_WIDTH * 0.9 }}
        />
      </View>
    );
  }
}


const mapStateToProps = ({ keys, selectedValues }) => ({ keys, selectedValues });

export default connect(mapStateToProps, { selectKeyIndex })(KeysButtons);
