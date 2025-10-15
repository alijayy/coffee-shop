import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, Platform, Alert } from 'react-native';
import { usePesanan } from '../utils/PesananContext';

export default function Pesanan() {
  const { pesanan } = usePesanan();

  const totalBayar = pesanan.reduce((acc, item) => {
    const hargaSatuan = parseInt(item.harga.replace(/[^0-9]/g, ''));
    return acc + hargaSatuan * item.jumlah;
  }, 0);

  const handelLanjutBayar = () => {
    Alert.alert("Berhasil!", "Pembayaran Masuk");
  }


  const renderItem = ({ item }) => {
    const hargaSatuan = parseInt(item.harga.replace(/[^0-9]/g, ''));
    const subtotal = hargaSatuan * item.jumlah;

    return (
      <View style={styles.card}>
        <Image source={{ uri: item.fotoPoster }} style={styles.thumbnail} />
        <View style={styles.info}>
          <Text style={styles.nama}>{item.nama}</Text>
          <Text style={styles.qty}>Qty: {item.jumlah}</Text>
          <Text style={styles.harga}>Subtotal: Rp {subtotal.toLocaleString('id-ID')}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {pesanan.length === 0 ? (
          <Text style={styles.emptyText}>Belum ada pesanan</Text>
        ) : (
          <FlatList
            data={pesanan}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        )}
      </View>

      {/* Sticky Total + Tombol */}
      {pesanan.length > 0 && (
        <View style={styles.footer}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total Bayar:</Text>
            <Text style={styles.totalValue}>Rp {totalBayar.toLocaleString('id-ID')}</Text>
          </View>

          <TouchableOpacity style={styles.bayarButton} onPress={handelLanjutBayar}>
            <Text style={styles.bayarText}>Bayar</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5DEB3',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: 20,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#FAF8F4',
    borderRadius: 8,
    elevation: 2,
    padding: 10,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  nama: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  qty: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  harga: {
    fontSize: 14,
    color: '#A76545',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    paddingHorizontal: 16,
    paddingVertical: 10,
    elevation: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A76545',
  },
  bayarButton: {
    backgroundColor: '#A76545',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  bayarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
