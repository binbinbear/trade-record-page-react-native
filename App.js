import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, SectionList } from 'react-native';

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
        <RecordItem></RecordItem>
      </View>
    )
  }
}

class RecordItem extends Component {
 
  _dateTransactionGroup = (info) => {
    var txt = info.section.date;
    return (
      <Text style={{ height: 50, textAlign: 'left', textAlignVertical: 'center', backgroundColor: '#white', color: 'black', fontSize: 30 }}>
        {txt}
      </Text>
    ) 
  }
  _renderItem = (info) => {
    var txt = '  ' + info.item.name;
    return (
      <Text style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>
        {txt}
      </Text>
    )
  }

   render () {
    const {category, name} = this.props
    var sections = [
      { date: "2017.10", data: [{ name: "阿童木" }, { name: "阿玛尼" },   { name: "爱多多" }] },
      { date: "2017.9",  data: [{ name: "表哥" },   { name: "贝贝" },    { name: "表弟" }, { name: "表姐" }, { name: "表叔" }] },
      { date: "2017.8",  data: [{ name: "成吉思汗"}, { name: "超市快递" }]},
      { date: "2017.7",  data: [{ name: "王磊" },   { name: "王者荣耀" }, { name: "往事不能回味" },{ name: "王小磊" }, { name: "王中磊" }, { title: "王大磊" }] },
    ];
    return (
        <SectionList 
        renderSectionHeader={this._dateTransactionGroup}
        renderItem={this._renderItem}
        sections={sections}
        ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>交易记录</Text></View>}>
        ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>完</Text></View>}>
        </SectionList>
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


