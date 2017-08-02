import React, { Component } from 'react';
import { View, Modal, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class ChordsModal extends Component {
  render() {
    return (
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.props.modal.chordsModalIsOpen}
          onRequestClose={() => console.log('Modal has been closed.')}
        >
          <Text>Modal</Text>
          <Button />
        </Modal>
    );
  }
}

const mapStateToProps = ({ modal }) => ({ modal });

export default connect(mapStateToProps)(ChordsModal);
