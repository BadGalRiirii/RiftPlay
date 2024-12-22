import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

export default function RechargeScreen({ navigation }) {
  const rechargeOptions = [
    { id: 1, amount: '475 VP', price: '₱199' },
    { id: 2, amount: '1000 VP', price: '₱399' },
    { id: 3, amount: '2050 VP', price: '₱799' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>2. Select Recharge</Text>
      {rechargeOptions.map((option) => (
        <TouchableOpacity key={option.id} style={styles.card}>
          <Text style={styles.text}>{option.amount}</Text>
          <Text style={styles.price}>{option.price}</Text>
        </TouchableOpacity>
      ))}
      <Button title="Next" onPress={() => navigation.navigate('Payment')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888888',
  },
});
