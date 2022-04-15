import { StyleSheet, 
    Text, 
    View,
    Image,
    Button
 } from 'react-native';

const Login = ({navigation}) => {
    return (
        <View>
            <Button title="Go back" onPress={()=>navigation.goBack()}/>
        </View>
      );
}
 
export default Login;