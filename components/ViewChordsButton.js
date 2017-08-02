import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { openChordsModal } from '../actions';

class ViewChordsButton extends Component {
render() {
    return (
      <View style={this.props.style}>
        <Button
          raised
          icon={{ name: 'library-music' }}
          title="View Transposed Chords"
          backgroundColor="#2169F3"
          onPress={() => this.props.openChordsModal()}
        />
      </View>
    );
  }
}

export default connect(null, { openChordsModal })(ViewChordsButton);
