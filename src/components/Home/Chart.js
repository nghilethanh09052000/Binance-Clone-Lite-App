import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect, } from 'react';
import Coins from './Coins';
import { COLORS, icons } from '../../constants';
const Chart = () => {

    const [coins , setCoins] = useState(null)
    useEffect(()=>{
      fetch('https://api.coingecko.com/api/v3/coins')
      .then(res=>res.json())
      .then(data => setCoins(data))
      .catch(err => console.log(err))
    },[])
   
    return (
       <View>
          <Text style={{color:COLORS.white, fontSize:20}}>Thị trường</Text>

          {
            coins && coins.map(coin =>(

              <Coins 
                key={coin.id}
                image={coin.image.small}
                symbol={coin.symbol}
                name={coin.name}
                price={coin.market_data.current_price.usd}
                percentage={coin.market_data.market_cap_change_percentage_24h}
              />
            ))
          }
        
          
       </View>
      );
}
 
export default Chart;

const styles= StyleSheet.create({
  containter:{
    maxHeight: 500
  }
})