//NoRecords.js
// React Native Bottom Navigation - Example using React Navigation V5 with Calender //
// https://github.com/Rishu2505/CalendarEvent.git //
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Fontsize, Strings } from '../constants';
import { Icon } from 'react-native-elements';
export default class NoRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render = () => {
    let { text, marginTopvalue, showImg, imgIcon } = this.props
    return (
      <View style={{ height: null, width: null, justifyContent: 'center', alignItems: 'center', marginTop: marginTopvalue }}>
        <Icon
          raised
          name='not-interested'
          type='materialicons'
          color={Colors.activeTintColor}
          size={20}
          onPress={() => console.log('hello')} />
        <Text textBreakStrategy={'simple'} textBreakStrategy={'simple'} style={styles.textStyle}>
          {text ? text : Strings.EventsView.norecord}
        </Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.headingblack,
    fontSize: Fontsize.norcsize
  }
});