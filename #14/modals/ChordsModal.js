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
      headerStyle,
      contentStyle,
      contentRowStyle,
      itemContainerStyle,
      itemHeadStyle,
      itemStyle,
      buttonContainerStyle
    } = styles;

    return (
      <Modal
        transparent
        animationType={'slide'}
        visible={this.props.modal.chordsModalIsOpen}
        onRequestClose={() => this.props.closeChordsModal()}
      >
        <View style={modalStyle}>
          <View style={containerStyle}>
            <View style={headerStyle}>
              <Text h4 style={{ color: 'white' }}>
                Chords Transitions
              </Text>
            </View>

            <View style={contentStyle}>
              <View style={contentRowStyle}>
                <View style={itemContainerStyle}>
                  <Text style={[itemStyle, itemHeadStyle]}>
                    Key G//
                  </Text>
                </View>

                <View style={itemContainerStyle}>
                  <Text style={[itemStyle, itemHeadStyle]}>⇒</Text>
                </View>

                <View style={itemContainerStyle}>
                  <Text style={[itemStyle, itemHeadStyle]}>
                    Capo 7// Chords
                  </Text>
                </View>
              </View>
			  
			  <View style={contentRowStyle}>
                <View style={itemContainerStyle}>
                  <Text style={itemStyle}>
                    Key G//
                  </Text>
                </View>

                <View style={itemContainerStyle}>
                  <Text style={itemStyle}>⇒</Text>
                </View>

                <View style={itemContainerStyle}>
                  <Text style={itemStyle}>
                    Capo 7// Chords
                  </Text>
                </View>
              </View>
			  
			  <View style={contentRowStyle}>
                <View style={itemContainerStyle}>
                  <Text style={itemStyle}>
                    Key G//
                  </Text>
                </View>

                <View style={itemContainerStyle}>
                  <Text style={itemStyle}>⇒</Text>
                </View>

                <View style={itemContainerStyle}>
                  <Text style={itemStyle}>
                    Capo 7// Chords
                  </Text>
                </View>
              </View>
              
              <View style={buttonContainerStyle}>
				<Button
				  raised
				  icon={{ name: 'close' }}
				  title="Close"
				  backgroundColor="#2196F3"
				  onPress={() => this.props.closeChordsModal()}
				/>
			  </View>
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
    backgroundColor: '#2196F3'
  },
  contentStyle: {
    flex: 1,
    alignItems: 'center',
	justifyContent: 'center'
  },
  contentRowStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemHeadStyle: {
    fontWeight: '900',
    fontSize: 14
  },
  itemStyle: {
    alignItems: 'center',
    fontSize: 16,
    textAlign: 'center'
  },
  buttonContainerStyle: {
    paddingBottom: 10
  }
};

const mapStateToProps = ({ modal, selectedValues, keys }) => ({ modal, selectedValues, keys });

export default connect(mapStateToProps, { closeChordsModal })(ChordsModal);
