import React, {Component} from 'react';
import {View, Text, Image } from 'react-native';

class Fruit extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class Banan extends Component {
  render() {
      let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
      return (
        <View>
        <Image source = {pic} style = {{width: 193, height: 110}}></Image>
        <Fruit name='banana' />
        <Fruit name='apple' />
        <Fruit name='orange' />
        <View style={{ backgourndColor: "blue", flex: 0.3}} />
        </View>
      );
  }
}

