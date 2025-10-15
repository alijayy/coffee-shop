import React, { useState } from 'react';
import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { usePesanan } from '../utils/PesananContext';

export default function Detail({ route }){
  const { Kopi } = route.params;
  const [jumlah, setJumlah] = useState(1);
  const { tambahPesanan } = usePesanan();

  const hargaSatuan = parseInt(Kopi.harga.replace(/[^0-9]/g, ''));
  const totalHarga = hargaSatuan * jumlah;

  const handleTambahPesanan = () => {
    tambahPesanan(Kopi, jumlah);
    Alert.alert("Berhasil!", "Pesanan sudah ditambahkan!");
  };

    return(
      <ScrollView style={styles.container}>
        <Image source={{ uri: Kopi.fotoPoster }} style={styles.foto} />
        <View style={styles.textContainer}>
          <Text style={styles.nama}>{Kopi.nama}</Text>
          <Text style={styles.deskripsi}>{Kopi.deskripsi}</Text>
          <Text style={styles.harga}>Rp {totalHarga.toLocaleString('id-ID')}</Text>
          <Text style={styles.jumlahLabel}>Jumlah</Text>
          <View style={styles.counterContainer}>
          {/*tombol minus*/}
            <TouchableOpacity
              style={styles.button}
              onPress={() => setJumlah(prev => (prev > 1 ? prev - 1 : 1))}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.jumlahText}>{jumlah}</Text>
          {/*tombol plus*/}
            <TouchableOpacity
              style={styles.button}
              onPress={() => setJumlah(prev => prev + 1)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.tambahButton} onPress={handleTambahPesanan}>
            <Text style={styles.tambahButtonText}>Tambah ke Pesanan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  foto: {
    width: '100%',
    height: 250,
    
  },
  textContainer: {
    padding: 16,
  },
  nama: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'RobotoSlab-Bold',
    marginBottom: 8,
    color: '#000',
  },
  deskripsi: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
  },
  harga: {
    marginTop: 20,
    color: '#A76545',
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
  },
  jumlahLabel: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#A76545',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
   buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignContent: 'center'
  },
  jumlahText: {
    fontSize: 20,
    marginHorizontal: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  tambahButton: {
    backgroundColor: '#A76545',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  tambahButtonText: {
    color: '#000', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});