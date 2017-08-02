import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

class ViewChordsButton extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Button
          raised
          icon={{ name: 'library-music' }}
          title="View Transposed Chords"
          backgroundColor="#2169F3"
          onPress={() => {}}
        />
      </View>
    );
  }
}

export default ViewChordsButton;
