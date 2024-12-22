import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

export default function ConfirmationScreen({ route, navigation }) {
  const { paymentMethod, selectedRecharge } = route.params;

  // State for storing user input (phone number or payment reference)
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentReference, setPaymentReference] = useState('');

  const handlePayment = () => {
    console.log('Payment Method:', paymentMethod);
    console.log('Phone Number:', phoneNumber);
    console.log('Payment Reference:', paymentReference);

    // Validation for required fields based on the payment method
    if (paymentMethod === 'GCash' || paymentMethod === 'Maya') {
      if (!phoneNumber) {
        Alert.alert('Error', 'Please enter your phone number for GCash or Maya.');
        return;
      }
    } else if (paymentMethod === '7-Eleven') {
      if (!paymentReference) {
        Alert.alert('Error', 'Please enter your payment reference for 7-Eleven.');
        return;
      }
    }

    // Simulate payment process
    Alert.alert(
      'Payment Successful',
      `You have successfully paid via ${paymentMethod} for ${selectedRecharge.amount}.`
    );
    navigation.navigate('RiftPlay'); // Navigate to the home screen or any other screen after payment
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Payment Confirmation</Text>
      <Text style={styles.subheading}>
        You are purchasing {selectedRecharge.amount} for{' '}
        <Text style={styles.price}>{selectedRecharge.price}</Text>.
      </Text>

      {/* Conditional rendering of inputs based on selected payment method */}
      {paymentMethod === 'GCash' || paymentMethod === 'Maya' ? (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter your phone number</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 09123456789"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
      ) : paymentMethod === '7-Eleven' ? (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter your payment reference</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 123456789"
            keyboardType="numeric"
            value={paymentReference}
            onChangeText={setPaymentReference}
          />
        </View>
      ) : null}

      {/* Complete Payment Button */}
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Complete Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 18,
    color: '#555555',
    marginBottom: 20,
    textAlign: 'center',
  },
  price: {
    fontWeight: 'bold',
    color: '#5271FF',
  },
  label: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 5,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: '#FFF',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    marginBottom: 15,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    backgroundColor: '#F4C2C2', // Light sugar pink button
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 2,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
