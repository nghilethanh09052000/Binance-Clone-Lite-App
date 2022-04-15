import { StyleSheet,
    Text, 
    View,
    SafeAreaView ,
    ScrollView,
    Button
} from 'react-native';

const CoinsDetails = ({route,navigation}) => {
    const {image,symbol,name,price,percentage} = route.params
    return (
        <View>
            <Text> {JSON.stringify(name)}</Text>
        </View>
      );
}
 
export default CoinsDetails;