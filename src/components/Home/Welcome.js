import { StyleSheet, 
  Text, 
  View,
  Image,
  Button
} from 'react-native';


import { COLORS, icons } from '../../constants';

const Welcome = () => {
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
              width:200,
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
                  marginBottom:10
                }}
              >
                <Image
                  source={icons.briefcase}
                />
              </View>
              <View >
                <View>
                  <Text style={{color:COLORS.white,textAlign:'center',fontSize:15}}>Chào mừng đến với Binance</Text>
                </View>
                <View >
                  <Text style={{color:COLORS.noFocus,textAlign:'center',fontSize:10}}>Tham gia sàn giao dịch tiền mã hóa lớn nhất thế giới</Text>
                </View>
              </View>
              <View
                style={{
                  fontColor:COLORS.black,
                  marginTop:10
                }}
              >
                <Button
                  style={{
                    borderRadius:50,
                    height:50,
                  }}
                  color='yellow'
                  title="Đăng ký / Đăng nhập"
                />
              </View>
          </View>
        </View>
      );
}
 
export default Welcome;