import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const GameSelection = ({ games, selectedGame, onSelectGame }) => {
  return (
    <View style={styles.gameSelectionContainer}>
      {games.map((game) => (
        <TouchableOpacity
          key={game.id}
          style={[
            styles.gameCard,
            selectedGame?.id === game.id && styles.selectedGameCard,
          ]}
          onPress={() => onSelectGame(game)}
        >
          <Text style={styles.gameName}>{game.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gameSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  gameCard: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  selectedGameCard: {
    borderColor: '#5271FF',
    backgroundColor: '#E3F2FD',
  },
  gameName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default GameSelection;
