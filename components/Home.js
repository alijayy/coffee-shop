import {useState} from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import Kopi from '../assets/Kopi';

export default function Home({navigation}) {

  const [data, setData] = useState(Kopi);

  const listKopi = ({item}) => {
    return (
      <Card style={styles.cardUtama}
        onPress={()=>navigation.navigate('Detail', {Kopi : item} )} >
        <View style={styles.cardView}>
          <Image
            style={styles.foto}
            source={{uri: item.fotoThumbnail}}/>
          <View style={styles.textContainer}>
            <Text style={styles.teksNama}>{item.nama}</Text>
            <Text style={styles.teksDesc}>{item.deskripsi}</Text>
            <Text style={styles.teksHarga}>{item.harga}</Text>
          </View>
        </View>
      </Card>
    )
  }

  return (
    <View style={{flex:1, backgroundColor:'#F5DEB3'}}>
      <FlatList
        data={data}
        renderItem={listKopi}
        keyExtractor={item=>item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardUtama: {
    margin: 8, 
    backgroundColor: '#fffaf0', 
    borderRadius: 8,
    shadowColor: '#470000',
    shadowOffset: {width: 4, height: 6},
    shadowOpacity: 0.2
  },
  cardView: {
    flexDirection: 'row',   
    alignItems: 'center',   
  },
  foto: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginLeft: 12,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,   
  },
  teksNama: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  teksDesc: {
    textAlign: 'justify',
    marginRight: 8,
  },
  teksHarga: {
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 8,
    width: '95%', //27%
    backgroundColor: '#A76545',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
});