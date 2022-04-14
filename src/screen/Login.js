import { StyleSheet, 
    Text, 
    View,
    Image,
    Button
 } from 'react-native';

const Login = ({navigation}) => {
    return (
        <View>
            <Text>Nghị</Text>
            <Button title="Go back" onPress={()=>navigation.goBack()}/>
        </View>
      );
}
 
export default Login;