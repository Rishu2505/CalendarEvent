// Splash.js
import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from '../../src';
import { Icon } from 'react-native-elements'
import { Colors } from '../components';
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: false })
    }, 3000)

  }

  render() {
    let { visible } = this.state;
    return (
      visible ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Icon
            raised
            name='slack'
            type='antdesign'
            color={Colors.activeTintColor}
            size={100}
            onPress={() => console.log('hello')} />
        </View>
        :
        <Navigation />
    )
  }
}

export default Splash