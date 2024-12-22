import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const games = [
  { id: 1, name: 'Valorant', currency: 'Valorant Points (VP)', route: 'RechargeVP' },
  { id: 2, name: 'Mobile Legends', currency: 'Diamonds', route: 'RechargeDiamonds' },
  { id: 3, name: 'Call of Duty Mobile', currency: 'COD Points', route: 'RechargeCOD' },
  { id: 4, name: 'League of Legends: Wild Rift', currency: 'Wild Cores', route: 'RechargeWildRift' },
];

const HomeScreen = ({ navigation }) => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [userId, setUserId] = useState('');

  const handleSelectGame = (game) => {
    setSelectedGame(game);
    setUserId(''); // Reset user ID when switching games
  };

  const handleNextPress = () => {
    if (selectedGame && userId.trim()) {
      navigation.navigate(selectedGame.route, { userId });
    }
  };

  return (
    <LinearGradient colors={['#6A0DAD', '#8A2BE2']} style={styles.gradientBackground}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Gradient header */}
        <Text style={styles.heading}>Select Game and Enter ID</Text>

        {/* Space below header */}
        <View style={styles.spaceBelowHeader}></View>

        {/* Game Selection */}
        <View style={styles.gameContainer}>
          {games.map((game) => (
            <TouchableOpacity
              key={game.id}
              style={[
                styles.gameCard,
                selectedGame && selectedGame.id === game.id && styles.selectedGameCard, // Highlight selected game card
              ]}
              onPress={() => handleSelectGame(game)}
            >
              <Text style={styles.gameName}>{game.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Show the relevant ID input field */}
        {selectedGame && (
          <>
            <Text style={styles.inputLabel}>Enter your {selectedGame.name} ID</Text>
            <TextInput
              style={styles.input}
              placeholder={`Enter your ${selectedGame.name} ID`}
              value={userId}
              onChangeText={setUserId}
              autoCapitalize="none"
              keyboardType="default"
            />
            <Text style={styles.helpText}>
              To find your {selectedGame.name} ID, go to your profile page and copy your ID.
            </Text>
            <Text style={styles.currencyText}>
              You will be recharging {selectedGame.currency}.
            </Text>
          </>
        )}

        {/* Next Button */}
        <LinearGradient
          colors={['#F4C2C2', '#F1A7D1']}
          style={[styles.buttonGradient, { opacity: selectedGame && userId.trim() ? 1 : 0.5 }]} // Disabled opacity
        >
          <TouchableOpacity
            onPress={handleNextPress}
            disabled={!selectedGame || !userId.trim()}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
    backgroundColor: '#6A0DAD', // Fallback color for unsupported systems
    padding: 20,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20, // Adds space below the heading
  },
  spaceBelowHeader: {
    marginBottom: 20, // Space between the header and the rest of the content
  },
  gameContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  gameCard: {
    width: '45%',
    height: 120,
    backgroundColor: '#8A2BE2', // Royal purple for game cards
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F4C2C2', // Soft sugar pink border
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  selectedGameCard: {
    backgroundColor: '#F7A6C7', // Softened pink for selected card background
    borderColor: '#F1A7D1', // Soft sugar pink border for selected card
    transform: [{ scale: 1.05 }], // Slightly enlarged for emphasis
    shadowColor: '#F1A7D1', // Matching soft pink shadow color for selected card
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 10,
    elevation: 6, // Stronger shadow effect to make it pop
  },
  gameName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#F4C2C2',
    borderRadius: 5,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#F5F5F5',
    color: '#333',
  },
  helpText: {
    fontSize: 14,
    color: '#F4C2C2',
    marginBottom: 20,
  },
  currencyText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
  },
  buttonGradient: {
    borderRadius: 10,
    marginTop: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
