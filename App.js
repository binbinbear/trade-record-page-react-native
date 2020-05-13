import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, sectionList } from 'react-native';

export default class Transaction extends Component {
  render () {
    return (
      <Header ></Header>
    )
  }
}

class Header extends Component {
  render () {
    return (
      <View  style = {StyleSheet.container}>
        <Text>交易记录</Text>
      </View>
    )
  }
}

class RecordItem extends Component {

   render () {
    const {category, name} = this.props
    return (
        <SectionList></SectionList>
     )
   }

}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: 100,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    }
}
)


