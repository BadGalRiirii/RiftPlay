import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function PaymentScreen({ route, navigation }) {
  // Destructure the passed parameters
  const { selectedRecharge } = route.params;

  // State to keep track of the selected payment method
  const [selectedMethod, setSelectedMethod] = useState(null);

  // List of payment options
  const paymentOptions = [
    'GCash',
    'Maya',
    '7-Eleven',
  ];

  // Handle navigation and validation
  const handlePaymentSelection = (method) => {
    if (!selectedRecharge) {
      Alert.alert(
        'Error',
        'No recharge option selected. Please go back and select one.'
      );
      return;
    }

    setSelectedMethod(method); // Set selected method

    // Navigate to the confirmation screen
    navigation.navigate('Confirmation', {
      paymentMethod: method,
      selectedRecharge,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>3. Select Payment</Text>

      {selectedRecharge ? (
        <Text style={styles.subheading}>
          You are purchasing {selectedRecharge.amount} for{' '}
          <Text style={styles.price}>{selectedRecharge.price}</Text>.
        </Text>
      ) : (
        <Text style={styles.errorText}>
          No recharge selected. Please go back and choose an option.
        </Text>
      )}

      {paymentOptions.map((method, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.card,
            selectedMethod === method && styles.selectedCard, // Highlight the selected card
          ]}
          onPress={() => handlePaymentSelection(method)}
        >
          <Text style={styles.text}>{method}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#6A0DAD', // Royal purple background for the entire screen
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFF', // White color for heading
  },
  subheading: {
    fontSize: 16,
    color: '#F1A7D1', // Soft pink color for subheading text
    marginBottom: 20,
    textAlign: 'center',
  },
  price: {
    fontWeight: 'bold',
    color: '#00C9FF', // Light blue color for the price to match the theme
  },
  errorText: {
    fontSize: 14,
    color: '#F7A6C7', // Light pink for error text
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    padding: 15,
    backgroundColor: '#8A2BE2', // Royal purple background for cards
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#F7A6C7', // Soft pink border for the card
    alignItems: 'center',
    shadowColor: '#F1A7D1', // Soft pink shadow for cards
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  selectedCard: {
    backgroundColor: '#F7A6C7', // Soft pink background for the selected card
    borderColor: '#FF77FF', // Slightly brighter pink for selected border
    transform: [{ scale: 1.05 }], // Slight zoom effect on selected card
    shadowColor: '#FF77FF', // Brighter shadow color for selected card
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 6, // Enhanced shadow for selected card
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF', // White color for the text in the card
  },
});
