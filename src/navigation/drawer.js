import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screen/Login';
const Drawer = createDrawerNavigator();

const Drawers = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Login" component={Login} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
 
export default Drawers;