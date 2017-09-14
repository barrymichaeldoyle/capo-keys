import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';

class CapoKey extends Component {
  render() {
    const { selectedValues: { capoKeyIndex }, keys } = this.props;

    return (
      <View style={{ alignItems: 'center' }}>
        <Text h3>Capo Key</Text>
        <Text h1>{keys[capoKeyIndex].key}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ keys, selectedValues }) => ({ keys, selectedValues });

export default connect(mapStateToProps)(CapoKey);
