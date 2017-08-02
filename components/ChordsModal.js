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
      headerStyle,
      contentStyle,
      contentRowStyle,
      itemContainerStyle,
      itemHeadStyle,
      itemStyle
    } = styles;

    const { selectedValues: { selectedKeyIndex, selectedCapo }, keys } = this.props;

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
                  Chord Transitions
                </Text>
              </View>

              <View style={contentStyle}>
                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={[itemStyle, itemHeadStyle]}>
                      Key {keys[selectedKeyIndex].key} Chords
                    </Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={[itemStyle, itemHeadStyle]}>⇒</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={[itemStyle, itemHeadStyle]}>
                      Capo {selectedCapo} Chords
                    </Text>
                  </View>
                </View>

                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>G</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>⇒</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>C</Text>
                  </View>
                </View>

                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>G</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>⇒</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>C</Text>
                  </View>
                </View>

                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>G</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>⇒</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>C</Text>
                  </View>
                </View>

                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>G</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>⇒</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>C</Text>
                  </View>
                </View>

                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>G</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>⇒</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>C</Text>
                  </View>
                </View>

                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>G</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>⇒</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>C</Text>
                  </View>
                </View>

                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>G</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>⇒</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>C</Text>
                  </View>
                </View>

                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>G</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>⇒</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>C</Text>
                  </View>
                </View>

                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>G</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>⇒</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>C</Text>
                  </View>
                </View>

                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>G</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>⇒</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>C</Text>
                  </View>
                </View>

                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>G</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>⇒</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>C</Text>
                  </View>
                </View>

                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>G</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>⇒</Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>C</Text>
                  </View>
                </View>
              </View>

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
  contentStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10
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
    fontSize: 16
  },
  buttonContainerStyle: {
    paddingBottom: 10
  }
};

const mapStateToProps = ({ modal, selectedValues, keys }) => ({ modal, selectedValues, keys });

export default connect(mapStateToProps, { closeChordsModal })(ChordsModal);
