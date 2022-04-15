import { StyleSheet,
     Text, 
     View,
     SafeAreaView ,
     ScrollView
} from 'react-native';
import Header from '../components/Home/Header';
import Welcome from '../components/Home/Welcome';
import Chart from '../components/Home/Chart';
import Slide from '../components/Home/Slide';
import { COLORS, icons } from '../constants';
import { useState, useEffect } from 'react';


const Home = () => {
   

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <Welcome/>
            <Slide/>
            <Chart/>
        </ScrollView>
               
      
            
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