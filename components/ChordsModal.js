import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { closeChordsModal } from '../actions';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

class ChordsModal extends Component {
  render() {
    const {
      modalStyle,
      containerStyle,
      buttonContainerStyle,
      headerStyle
    } = styles;

    return (
        <Modal
          style={{ backgroundColor: 'yellow' }}
          transparent
          animationType={'slide'}
          visible={this.props.modal.chordsModalIsOpen}
          onRequestClose={() => this.props.closeChordsModal()}
        >
          <View style={modalStyle}>
            <View style={containerStyle}>
              <View style={headerStyle}>
                <Text h4 style={{ color: 'white' }}>
                  Chord Transitions
                </Text>
              </View>

              <View style={{ flex: 1 }} />

              <View style={buttonContainerStyle}>
                <Button
                  raised
                  icon={{ name: 'close' }}
                  title="Close"
                  backgroundColor="#2169F3"
                  onPress={() => this.props.closeChordsModal()}
                />
              </View>
            </View>
          </View>
        </Modal>
    );
  }
}

const marginPerc = 0.05;

const styles = {
  modalStyle: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  containerStyle: {
    flex: 1,
    marginTop: SCREEN_HEIGHT * marginPerc,
    marginBottom: SCREEN_HEIGHT * marginPerc,
    marginLeft: SCREEN_WIDTH * marginPerc,
    marginRight: SCREEN_WIDTH * marginPerc,
    backgroundColor: 'white'
  },
  headerStyle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2169F3'
  },
  buttonContainerStyle: {
    paddingBottom: 10
  }
};

const mapStateToProps = ({ modal }) => ({ modal });

export default connect(mapStateToProps, { closeChordsModal })(ChordsModal);
