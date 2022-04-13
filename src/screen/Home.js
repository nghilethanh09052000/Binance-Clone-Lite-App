import { StyleSheet,
     Text, 
     View,
     SafeAreaView 
} from 'react-native';
import Header from '../components/Home/Header';
import Welcome from '../components/Home/Welcome';
import Chart from '../components/Home/Chart';
import Slide from '../components/Home/Slide';
import { COLORS, icons } from '../constants';
const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Welcome/>
            <Slide/>
            <Chart/>
        </SafeAreaView>
      );
}
 
export default Home;

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.primary,
        flex:1
    }
})