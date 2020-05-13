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
    return (
      <View  style = {StyleSheet.container}>
        <Text>交易记录</Text>
        <RecordItem></RecordItem>
      </View>
    )
  }
}

class ItemDetail extends Component {

  _renderItem = (info) => {
    return (
      <View  style={{ flex: 1, flexDirection: 'row'}} >
        <Image source={info.item.pic} style={styles.image}></Image>
        <View>
           <Text style={{ height: 40, textAlignVertical: 'center', color: '#5C5C5C', fontSize: 15 }}>
             {info.item.category}
           </Text>
           <Text style={{ height: 40, textAlignVertical: 'center', color: '#5C5C5C', fontSize: 15 }}>
             {info.item.name}
           </Text>
        </View>
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
    var txt = info.section.month;
    return (
      <View  style={{borderTopWidth: 5, borderColor: 'white'}}>
      <Text style={{ height: 50, textAlign: 'left', textAlignVertical: 'center', color: 'black', fontSize: 30 }}>
        {txt}
      </Text>
      </View>
    ) 
  }
  _renderItem = (info) => {
    var date = info.item.date;
    var week = info.item.week;
    var details = info.item.details
    return (
      <View style={{ flex: 1, flexDirection: 'row'}}>
          <View>
            <Text>{date}</Text>
            <Text>{week}</Text>
          </View> 
          <ItemDetail data={details} />
      </View>
    )
  }

   render () {
    var sections = [
      { month: "2017.10", data: [{ date: "07", week: "Thus",  details: [{category: '午餐', name: '汉堡王',  pic: require('./img/hamburger.png')}, { category: "咖啡", name: "星巴克", pic: require('./img/eating.png')}, { category: "工资", name: "中国银联", pic: require('./img/money.png')}]}]},
      { month: "2017.09", data: [{ date: "07", week: "Thus",  details: [{category: '午餐', name: '汉堡王',  pic: require('./img/hamburger.png')}, { category: "咖啡", name: "星巴克", pic: require('./img/eating.png')}, { category: "工资", name: "中国银联", pic: require('./img/money.png')}]}]},
      { month: "2017.08", data: [{ date: "07", week: "Thus",  details: [{category: '午餐', name: '汉堡王',  pic: require('./img/hamburger.png')}, { category: "咖啡", name: "星巴克", pic: require('./img/eating.png')}, { category: "工资", name: "中国银联", pic: require('./img/money.png')}]}]},
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


