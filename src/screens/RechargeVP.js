import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function RechargeVP({ route, navigation }) {
  const { userId } = route.params; // Get the user ID from route params

  const rechargeOptions = [
    { id: 1, type: 'VP', amount: '475 VP', price: '₱199' },
    { id: 2, type: 'VP', amount: '1000 VP', price: '₱399' },
    { id: 3, type: 'VP', amount: '2050 VP', price: '₱799' },
  ];

  const bundleOptions = [
    { id: 4, type: 'Bundle', amount: 'Valorant Bundle A', price: '₱1299' },
    { id: 5, type: 'Bundle', amount: 'Valorant Bundle B', price: '₱2499' },
  ];

  const skinOptions = [
    { id: 6, type: 'Skin', amount: 'Sovereign Skin Pack', price: '₱699' },
    { id: 7, type: 'Skin', amount: 'Prime Skin Pack', price: '₱999' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>2. Select Recharge for Valorant</Text>

      {/* Display User ID */}
      <Text style={styles.userId}>Your Valorant ID: {userId}</Text>

      {/* VP Options */}
      <Text style={styles.sectionTitle}>Valorant Points (VP)</Text>
      {rechargeOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.card,
            selectedOption?.id === option.id ? styles.selectedCard : null, // Only highlight the selected option
          ]}
          onPress={() => handleSelectOption(option)}
        >
          <Text style={styles.text}>{option.amount}</Text>
          <Text style={styles.price}>{option.price}</Text>
        </TouchableOpacity>
      ))}

      {/* Bundle Options */}
      <Text style={styles.sectionTitle}>Bundles</Text>
      {bundleOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.card,
            selectedOption?.id === option.id ? styles.selectedCard : null, // Only highlight the selected option
          ]}
          onPress={() => handleSelectOption(option)}
        >
          <Text style={styles.text}>{option.amount}</Text>
          <Text style={styles.price}>{option.price}</Text>
        </TouchableOpacity>
      ))}

      {/* Skin Options */}
      <Text style={styles.sectionTitle}>Skins</Text>
      {skinOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.card,
            selectedOption?.id === option.id ? styles.selectedCard : null, // Only highlight the selected option
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

          {/* Slimmer Next Button */}
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
    backgroundColor: '#8A2BE2', // Updated to royal purple to match the color scheme
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#F4C2C2', // Soft pink border color
  },
  selectedCard: {
    borderColor: '#F7A6C7', // Highlight color from HomeScreen (Soft pink)
    backgroundColor: '#F7A6C7', // Highlight background color for selected card
    borderWidth: 2, // Emphasizing border width
    transform: [{ scale: 1.05 }], // Slightly enlarged for emphasis
    shadowColor: '#F1A7D1', // Soft pink shadow to match the highlight
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 10,
    elevation: 6, // Stronger shadow effect to make it pop
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF', // White text for better readability
  },
  price: {
    fontSize: 14,
    color: '#FFF', // White price text to keep the theme consistent
  },
  selectionContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  selectionText: {
    fontSize: 16,
    color: '#FFF', // White color for the selected option text
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
