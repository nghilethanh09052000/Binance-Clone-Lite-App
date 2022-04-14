import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';




const Chart = () => {
    const [coins , setCoins] = useState('')

    useEffect(()=>{
      fetch('https://api.coingecko.com/api/v3/coins')
        .then( (res) =>res.json())
        .then( (data) => setCoins(data))
        .catch( (err) => console.log(err))
    },[])
 
    console.log(coins)
    return (
       <View>
          <Text>Nghị</Text>
         <Text>{coins}</Text>
       </View>
      );
}
 
export default Chart;