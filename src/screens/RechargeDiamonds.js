import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function RechargeDiamonds({ route, navigation }) {
  const { userId } = route.params;

  const rechargeOptions = [
    { id: 1, amount: '100 Diamonds', price: '₱100' },
    { id: 2, amount: '250 Diamonds', price: '₱250' },
    { id: 3, amount: '500 Diamonds', price: '₱500' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Recharge Diamonds</Text>
      <Text style={styles.userId}>Your Mobile Legends ID: {userId}</Text>

      {/* Diamond Recharge Options */}
      <Text style={styles.sectionTitle}>Diamonds</Text>
      {rechargeOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.card,
            selectedOption?.id === option.id ? styles.selectedCard : null, // Highlight selected option
          ]}
          onPress={() => handleSelectOption(option)}
        >
          <Text style={styles.text}>{option.amount}</Text>
          <Text style={styles.price}>{option.price}</Text>
        </TouchableOpacity>
      ))}

      {/* Display Selected Option */}
      {selectedOption && (
        <View style={styles.selectionContainer}>
          <Text style={styles.selectionText}>
            Selected: {selectedOption.amount} - {selectedOption.price}
          </Text>

          {/* Next Button */}
          <LinearGradient
            colors={['#F4C2C2', '#F1A7D1']}
            style={[styles.buttonGradient, { opacity: selectedOption ? 1 : 0.5 }]} // Disabled opacity
          >
            <TouchableOpacity
              onPress={() =>
                selectedOption &&
                navigation.navigate('Payment', { selectedRecharge: selectedOption })
              }
              disabled={!selectedOption}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#6A0DAD', // Gradient background color for consistency
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFF', // White color for the heading
  },
  userId: {
    fontSize: 16,
    marginVertical: 10,
    color: '#FFF',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginVertical: 10,
    textAlign: 'center',
  },
  card: {
    padding: 15,
    backgroundColor: '#8A2BE2', // Royal purple to match the theme
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#F4C2C2', // Soft pink border
  },
  selectedCard: {
    borderColor: '#F7A6C7', // Highlight border color
    backgroundColor: '#F7A6C7', // Selected card background color
    borderWidth: 2,
    transform: [{ scale: 1.05 }], // Slightly enlarged card
    shadowColor: '#F1A7D1', // Soft pink shadow to match highlight
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 10,
    elevation: 6, // Stronger shadow effect for emphasis
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF', // White text for readability
  },
  price: {
    fontSize: 14,
    color: '#FFF', // White price text to match the theme
  },
  selectionContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  selectionText: {
    fontSize: 16,
    color: '#FFF', // White text for selected option
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonGradient: {
    borderRadius: 10,
    marginTop: 20,
    width: '80%', // Make the button wider
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 50, // Adjusted to make it longer and thinner
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
