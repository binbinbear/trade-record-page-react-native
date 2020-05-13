import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, SectionList, FlatList } from 'react-native';

export default class Transaction extends Component {
  render () {
    return (
      <Header ></Header>
    )
  }
}

class Header extends Component {
  render () {
    var d = [
      {category: "黑猫警长2", name: "美国"},
      {category: "我是特种兵",name: "中国"},
      {category: "变形金刚2", name: "美国"},
      {category: "流浪地球",  name: "中国"},
    ];

    return (
      <View  style = {StyleSheet.container}>
        <Text>交易记录</Text>
        <RecordItem></RecordItem>
        <ItemDetail data={d} />
      </View>
    )
  }
}

class ItemDetail extends Component {

  _renderItem = (info) => {
    return (
      <View>
      <Text style={{ height: 40, textAlignVertical: 'center', color: '#5C5C5C', fontSize: 15 }}>
      {info.item.category}
      </Text>
      <Text style={{ height: 40, textAlignVertical: 'center', color: '#5C5C5C', fontSize: 15 }}>
      {info.item.name}
      </Text>
      </View>
    )
  }

  render() {
      return (
          <View >
              <FlatList
                  data={this.props.data}
                  renderItem={this._renderItem}
              />
          </View>
      )
  }
}

class RecordItem extends Component {

  state = {
    imgPath: "./img/"
  }
 
  _dateTransactionGroup = (info) => {
    var txt = info.section.date;
    return (
      <View  style={{borderTopWidth: 5, borderColor: 'white'}}>
      <Text style={{ height: 50, textAlign: 'left', textAlignVertical: 'center', color: 'black', fontSize: 30 }}>
        {txt}
      </Text>
      </View>
    ) 
  }
  _renderItem = (info) => {
    var tradeType = info.item.category;
    var tradeName = info.item.name;
    var pic = info.item.pic;
    return (
      <View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
              <Image source={pic} style={styles.image}></Image>
              <View>
                  <Text style={{ height: 40, textAlignVertical: 'center', color: '#5C5C5C', fontSize: 15 }}>
                    {tradeType}
                  </Text>
                  <Text style={{ height: 40, textAlignVertical: 'center', color: '#5C5C5C', fontSize: 15 }}>
                    {tradeName}
                  </Text>
              </View>
          </View>
      </View>
    )
  }

   render () {
    var sections = [
      { date: "2017.15", data: [{ category: "午餐", name: "汉堡王", pic: require('./img/hamburger.png')}, { category: "咖啡", name: "星巴克", pic: require('./img/eating.png')},   { category: "工资", name: "中国银联", pic: require('./img/money.png')}] },
      // { date: "2017.14", data: [{ category: "午餐", name: "汉堡王", pic: require('./img/hamburger.png')}, { category: "咖啡", name: "星巴克", pic: require('./img/eating.png')},   { category: "工资", name: "中国银联", pic: require('./img/money.png')}] },
      // { date: "2017.13", data: [{ category: "午餐", name: "汉堡王", pic: require('./img/hamburger.png')}, { category: "咖啡", name: "星巴克", pic: require('./img/eating.png')},   { category: "工资", name: "中国银联", pic: require('./img/money.png')}] },
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
    },
    image: {
      left: 1,
      width: 50,
      height: 50
    }
}
)


