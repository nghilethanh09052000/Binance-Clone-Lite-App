import { TouchableOpacity, 
    View,
    Image,
    Text,
    Item } from "react-native";
import { COLORS, icons } from '../../constants';
import { useNavigation } from '@react-navigation/native';
const Coins  = ({image,symbol,name,price,percentage}) => {
    const navigation= useNavigation()
    return (
       <TouchableOpacity 
            onPress={ ()=> navigation.navigate('CoinsDetails',{
                image:image,symbol:symbol,name:name,price:price,percentage:percentage
            }
                                       
            )} 
        >
           <View style={{margin:10,flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image
                        source={{uri: `${image}`}}
                        style={{
                            width:20,
                            height:20
                        }}
                    /> 
                    <View style={{marginLeft:10, textAlign:'center'}}>
                        <Text style={{color:COLORS.white}}>{symbol.toUpperCase()}</Text>
                        <Text style={{color:COLORS.noFocus}}>{name}</Text>
                    </View>
                </View>
                <View>
                    <Text style={{color:COLORS.white}}>${price}</Text>
                    <Text 
                        style={
                            {color: percentage <0 ? 'red' : 'green' }}
                    >
                        {percentage}
                    </Text>
                </View>
           </View>
       </TouchableOpacity>
      );
}
 
export default Coins  ;