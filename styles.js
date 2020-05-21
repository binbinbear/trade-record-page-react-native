import {StyleSheet} from 'react-native';
export {styles} 
const styles = StyleSheet.create({
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize:20,
      textAlignVertical:'center'
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
    },
    backgroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:20,
    backgroundColor: "#FFFC00"
  }
}
)