//Calendar.js
import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Alert } from 'react-native';
import { Calendar as CalenderView, CalendarList, Agenda } from 'react-native-calendars';
import { Header } from 'react-native-elements';
import { CreateEvent } from '.';
import { Colors } from '../components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { setCalenderData } from '../redux';
import { connect } from 'react-redux';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvents: [],
      currentDate: new Date(),
      createEventView: false,
      selectedDate: '',

    }
  }

  componentDidMount() {

  }

  AddEvent = (date) => {
    let { state } = this
    let { selectedEvents } = state
    let { dateString } = date
    var results = selectedEvents.filter(function (value) { return value.date === dateString; });
    if (results && results.length > 0) {
      Alert.alert("", "Event already created for the slected day.")
    } else {
      this.setState({ createEventView: true, selectedDate: dateString })
    }
    
  }

  HideView = () => {
    this.setState({ createEventView: false })
  }

  AddEvents = (data) => {
    let { state, props } = this
    let { dispatch } = props
    let { selectedDate, selectedEvents } = state
    let finaldata = { date: selectedDate, events: data }
    selectedEvents.push(finaldata)
    this.setState({ selectedEvents, createEventView: false })
    dispatch(setCalenderData(selectedEvents));

  }

  render() {
    let { state } = this
    let { selectedEvents, currentDate, createEventView } = state
    let mark = {};
    selectedEvents.forEach(day => {
      let { date } = day
      mark[date] = { selected: true, marked: true, selectedColor: Colors.activeTintColor, };

    });
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          containerStyle={{ backgroundColor: '#FF9666' }}
          centerComponent={{ text: 'Calendar', style: { color: '#fff', fontSize: 20 } }}
        />
        <View style={{ flex: 1, padding: wp(4), }}>
          <CalenderView
            style={{
              borderRadius: wp(5),
              overflow: 'hidden',
              height: null
            }}
            markedDates={mark}
            current={currentDate}
            onDayPress={(day) => this.AddEvent(day)}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: Colors.activeTintColor,
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: 'orange',
              disabledArrowColor: '#d9e1e8',
              monthTextColor: Colors.activeTintColor,
              indicatorColor: Colors.activeTintColor,
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16
            }}
          />
        </View>
        {createEventView &&
          <View style={{ top: 0, bottom: 0, left: 0, right: 0, position: 'absolute', backgroundColor: Colors.white }}>
            <CreateEvent hide={() => this.HideView()} saveClicked={(value) => this.AddEvents(value)} />
          </View>
        }
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(Calendar)