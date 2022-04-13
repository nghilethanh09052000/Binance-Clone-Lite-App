import { StyleSheet, 
    Text, 
    View,
    Image,
    Button
 } from 'react-native';
import { COLORS, icons } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';



const Header = ({navigation}) => {
 
    return (
        <View
            style={{
                marginTop:30,
                display:'flex',
                justifyContent:'space-between',
                flexDirection: "row",
                
            }}
        >
            <View
                style={{
                    marginLeft:10,
                    width:25,
                    height:25,
                    borderRadius:30,
                    backgroundColor:COLORS.noFocus,
                    justifyContent:'center',
                    alignItems:'center'
                }}
            > 
                <Image
                    source={icons.person}
                    style={{
                        width:20,
                        height:20
                    }}
                />
      
                 
             
                
         
            </View>

            <View
                style={{
                    marginRight:10,
                    display:'flex',
                    flexDirection:'row',
                    width:50,
                    justifyContent:'space-between',
                    alignItems:'center'
             }}
            >
                <Text>
                    <Icon 
                        name='search' 
                        size={20} 
                        color={COLORS.noFocus}
                    />
                </Text>
                <View>
                    <Image 
                        source={icons.qrcode}
                        style={{width:20,
                                    height:20
                            }}
                        onPress={()=> navigation.navigate('CameraOpen')}
                    />
                </View>
            </View>
        </View>
      );
}
 
export default Header;