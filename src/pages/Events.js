// Events.js
// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //

import React, { Component } from "react"
import { SafeAreaView, View, FlatList } from "react-native";
import { connect } from 'react-redux';
import { Strings, EventItem, NoRecords } from '../components';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Header, Icon } from 'react-native-elements';
class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Descriptions: '',

    }
  }

  ItemClick = (events) => {
    let { props } = this
    let { navigation } = props
    let { navigate } = navigation
    navigate(Strings.NavigationKeys.CreateEvent, { events: events })
  }

  render() {
    let { props, state } = this;
    let { navigation, calendarListing } = props;
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'column', }}>
        <View style={{ flex: 1 }}>
          <Header
            containerStyle={{ backgroundColor: '#FF9666' }}
            centerComponent={{ text: Strings.Events.title, style: { color: '#fff', fontSize: 20 } }}
          />
          <View style={{flex: 1, justifyContent: 'center'}}>
          {calendarListing && calendarListing.length > 0 ?
            <FlatList
              style={{ margin: 0, marginTop: wp(0), }}
              data={calendarListing}
              renderItem={
                ({ item, index }) => {
                  let { events, } = item
                  let { title, descriptions } = events;
                  return (
                    <EventItem
                      title={title}
                      {...props}
                      descriptions={descriptions}
                      onPress={() =>
                        this.ItemClick(events)}
                    />
                  )
                }
              }
              keyExtractor={(item, index) => index.toString()}
            />
            :
            <NoRecords></NoRecords>
          }
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

function mapStateToProps(state) {
  let { getcalendarData } = state
  console.log("---check---rn--data---", getcalendarData)
  return {
    calendarListing: getcalendarData,
    state
  }
}

export default connect(mapStateToProps)(Recipe)