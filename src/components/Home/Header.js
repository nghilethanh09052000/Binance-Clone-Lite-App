import { StyleSheet, 
    Text, 
    View,
    Image,
    Button,
    SafeAreaView 
 } from 'react-native';
import { COLORS, icons } from '../../constants';
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
const Header = () => {
 
    return (
        <SafeAreaView style={{width:'100%', height:'100%' ,backgroundColor:COLORS.primary, flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View>
                <Ionicons name="person" size={20} color={COLORS.noFocus} />
            </View>
            <View  style={{flexDirection:'row',width:50 , justifyContent:'space-between'}}>
                <Feather name="search" size={20} color={COLORS.noFocus} /> 
                <MaterialIcons name="qr-code-scanner" size={20} color={COLORS.noFocus} />
            </View>
        </SafeAreaView>


    );
}
 
export default Header;