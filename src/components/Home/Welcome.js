import { StyleSheet, 
  Text, 
  View,
  Image,
  Button
} from 'react-native';


import { COLORS, icons } from '../../constants';
import { Foundation } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
const Welcome = () => {
    const navigation = useNavigation()
    return (
        <View 
          style={{
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            display:'flex'
          }}
        >
          <View
            style={{
              width:300,
              justifyContent:'center',
              alignItems:'center',
              display:'flex',
            
            }}
          >
              <View
                style={{
                  width:90,
                  height:90,
                  borderRadius:50,
                  backgroundColor:COLORS.noFocus,
                  justifyContent:'center',
                  alignItems:'center',
                  display:'flex',
                  marginBottom:10,
                  position:'relative'
                }}
              >
                <View>
                  <Feather name="align-left" size={26} color="grey" style={{position:'absolute',zIndex:10,left:-15, top:25}}/>
                  <Foundation name="clipboard-notes" size={60} color="yellow" style={{top:18}} />
                  <FontAwesome5 name="check" size={30} color="green" style={{left:20,top:-5}}/>
                </View>
              </View>
              <View >
                <View>
                  <Text style={{color:COLORS.white,textAlign:'center',fontSize:15}}>Chào mừng đến với Binance</Text>
                </View>
                <View >
                  <Text style={{color:COLORS.noFocus,textAlign:'center',fontSize:12}}>Tham gia sàn giao dịch tiền mã hóa lớn nhất thế giới</Text>
                </View>
              </View>
              <View
                style={{
                  fontColor:COLORS.black,
                  marginTop:10,
                  width:300, 
                
            
                }}
              >
                <Button
                  style={{
                    height:50,
                    borderRadius:20
                  }}
                  color='yellow'
                  title="Đăng ký / Đăng nhập"
                  onPress={() => navigation.navigate('Login') }
                />
              </View>
          </View>
        </View>
      );
}
 
export default Welcome;