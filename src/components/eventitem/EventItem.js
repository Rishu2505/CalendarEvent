//EventItem.js
// React Native Bottom Navigation - Example using React Navigation V5 with Calender //
// https://github.com/Rishu2505/CalendarEvent.git //
import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import { ListItem } from 'react-native-elements'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { GlobalStyle } from '../constants';

class EventItem extends Component {
    render() {
        const { title, descriptions, onPress } = this.props
        return (
            <ListItem
                leftIcon={{ name: 'av-timer' }}
                style={[styles.itemStyle, GlobalStyle.shadowStyle]}
                title={title}
                subtitle={descriptions}
                onPress={onPress}
            />
        );
    }
}
const styles = StyleSheet.create({
    itemStyle: {
        marginHorizontal: wp(3),
        marginVertical: wp(2),
    },
});
export default EventItem;