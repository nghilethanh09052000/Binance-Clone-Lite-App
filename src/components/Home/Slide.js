import Slick from 'react-native-slick';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,Image
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

import { COLORS, icons } from '../../constants';

const { width } = Dimensions.get('window')

const Slide = () => {
    return (
      <View  style={styles.wrapper}  >
        <Slick 
          style={{position:'relative'}}
          loop={true}
          autoplay={true}
          dot={
            <View 
              style={{
                backgroundColor: COLORS.noFocus,
                transform: [{ rotate: "135deg" }],
                width: 7,
                height: 7, 
                borderRadius: 2, 
                marginLeft: 3, 
                marginRight: 3, 
                marginTop: 3, 
                marginBottom: 3,
              }} 
            />
          }
          activeDot={
            <View 
              style={{
                
                backgroundColor: COLORS.white, 
                transform: [{ rotate: "135deg" }],
                width: 7,
                height: 7,  
                borderRadius: 2,  
                marginLeft: 3, 
                marginRight: 3, 
                marginTop: 3, 
                marginBottom: 3,
    
              }} 
            />
          }
        >
          <View testID="Hello" style={styles.slide1}>
            <View style={styles.box1}>
              <Text style={styles.text}>Hướng dẫn cho Người mới</Text>
              <Text style={{fontSize:10 , color:COLORS.noFocus}}>Học cách để bắt đầu</Text>
            </View>
            <View style={styles.box2}>
              <View style={styles.boxImage}>
                <FontAwesome name="credit-card" size={35} color="yellow" style={{position:'absolute', top:0, left:10,zIndex:5}} />
                <FontAwesome name="credit-card" size={35} color="grey" style={{ top:5, left:30,}}/>
              </View>
            </View>
          </View>
          <View testID="Beautiful" style={styles.slide1}>
          <View style={styles.box1}>
              <Text style={styles.text}>Binance Earn</Text>
              <Text style={{fontSize:10 , color:COLORS.noFocus}}>Giải pháp Đầu tư cho tất cả trong một</Text>
            </View>
            <View style={styles.box2}>
              <View style={styles.boxImage}>
                <MaterialCommunityIcons name="run" size={40} color="grey" style={{position:'absolute', top:0, left:10,zIndex:5}} />
                <FontAwesome5 name="arrow-circle-right" size={25} color="yellow" style={{ top:5, left:45,}}/>
                <Entypo name="dot-single" size={25} color="yellow" style={{ top:0, left:35,}} />
              </View>
            </View>
          </View>
      </Slick>
    </View>
  );
}
 
export default Slide;

var styles = StyleSheet.create({
  wrapper: {
    marginTop:10,
    height:60,
   
  },
  slide1: {
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor:'#282828',
    height:60,
    alignItems:'center',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
 
  },
  text: {
    color: '#fff',
    fontSize: 15,

  },
  box1:{
   
    marginLeft:10
  },
  box2:{
    marginRight:10,
    
  },
  boxImage:{

    width:100,
    position:'relative'
  }
})