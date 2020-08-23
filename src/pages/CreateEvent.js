//CalendarEvent.js
// React Native Bottom Navigation - Example using React Navigation V5 with Calender //
// https://github.com/Rishu2505/CalendarEvent.git //
import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Strings, TextInputComponent, Colors } from '../components';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Header } from 'react-native-elements';

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Descriptions: '',
      ViewEvent: false

    }
  }

  componentDidMount() {
    let { props, } = this
    let { route } = props
    if (route) {
      let { params } = route
      let { events } = params
      let { title, descriptions } = events
      this.setState({ Title: title, Descriptions: descriptions })
      this.setState({ ViewEvent: true })
    } else {
      this.setState({ ViewEvent: false })
    }
  }

  SaveButton = () => {
    let { state } = this
    let { Title, Descriptions } = state
    if (Title && Descriptions) {
      let sendObj = {
        title: Title, descriptions: Descriptions
      }
      this.props.saveClicked(sendObj)
    } else {
      Alert.alert("", Strings.EventsView.empty)
    }

  }

  onBack = () => {
    let { props, state } = this
    let { navigation } = props
    let { ViewEvent } = state
    if (ViewEvent) {
      navigation.goBack(null)
    } else {
      this.props.hide()
    }

  }

  render() {
    let { state } = this
    let { Title, Descriptions, ViewEvent } = state
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header
          containerStyle={{ backgroundColor: '#FF9666' }}
          placement="left"
          leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: this.onBack }}
          centerComponent={{ text: ViewEvent ? Strings.EventsView.title_view : Strings.EventsView.title_new, style: { color: '#fff', fontSize: 20 } }}
        />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={{ width: '100%', alignSelf: 'center', alignItems: 'center', flexDirection: 'column', }}>
            <TextInputComponent
              customonChangeText={(val) => this.setState({ Title: val })}
              customvalue={Title}
              customhideTitle={true}
              customkeyboardType='default'
              customplaceholder={Strings.EventsView.entertitle}
              showSecureEntry={false}
              viewstyle={{ marginTop: wp(5), }}
              marginHorizontal={wp(5)}
              issocialMediaField={true}
              socialMediaIcon={'title'}
              socialMediaIconType={'materialicons'}
              editable={ViewEvent ? false : true}
            />
            <TextInputComponent
              customhideTitle={true}
              customonChangeText={(val) => this.setState({ Descriptions: val })}
              customvalue={Descriptions}
              customkeyboardType='default'
              customplaceholder={Strings.EventsView.enterdescription}
              showSecureEntry={false}
              viewstyle={{ marginTop: wp(5) }}
              issocialMediaField={true}
              socialMediaIcon={'description'}
              socialMediaIconType={'materialicons'}
              fieldType={'description'}
              editable={ViewEvent ? false : true}
            />
          </View>
          {!ViewEvent &&
            <TouchableOpacity onPress={() => this.SaveButton()} style={{ marginTop: wp(4), height: hp(7), width: '50%', justifyContent: 'center', backgroundColor: Colors.activeTintColor, borderRadius: wp(2) }}>
              <Text style={{ textAlign: 'center', fontSize: wp(5), color: Colors.white }}>{Strings.EventsView.save}</Text>
            </TouchableOpacity>
          }
        </View>
      </SafeAreaView>
    );
  }

}
export default CreateEvent;