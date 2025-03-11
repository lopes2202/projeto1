import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';

const movieDetails = {
  title: "Até o Último Homem",
  description:
    "Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas. Durante a Batalha de Okinawa, ele trabalha na ala médica e salva cerca de 75 homens.",
  budget: 40000000,  
  votes: 89000,      
  duration: "139 min",
  releaseDate: "2016-10-28",
  image: require('@/assets/images/imagem3.jpg'), 
  cast: [
    { id: "1", name: "Desmond Doss", actor: "Andrew Garfield", image: require('@/assets/images/andrew.jpg') },
    { id: "2", name: "Smitty Ryker", actor: "Luke Bracey", image: require('@/assets/images/luke.jpg') }, 
    { id: "3", name: "Captain Glover", actor: "Sam Worthington", image: require('@/assets/images/sam.jpg') }, 
    { id: "4", name: "Sergeant Howell", actor: "Vince Vaughn", image: require('@/assets/images/vince.jpg') }, 
    { id: "5", name: "Dorothy Schutte", actor: "Teresa Palmer", image: require('@/assets/images/teresa.jpg') }, 
  ],
};

const MovieDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={movieDetails.image} style={styles.movieImage} />
      
      <ThemedView style={styles.movieInfo}>
        <ThemedText type="title">{movieDetails.title}</ThemedText>
        <ThemedText>{movieDetails.description}</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.detailsContainer}>
        <ThemedText>Orçamento: ${movieDetails.budget.toLocaleString()}</ThemedText>
        <ThemedText>Votos: {movieDetails.votes}</ThemedText>
        <ThemedText>Duração: {movieDetails.duration}</ThemedText>
        <ThemedText>Lançamento: {movieDetails.releaseDate}</ThemedText>
      </ThemedView>

      <ThemedText type="subtitle">Atores</ThemedText>
      <FlatList
        data={movieDetails.cast}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.actorItem}>
            <Image source={item.image} style={styles.actorImage} />  {/* Corrigido */}
            <View>
              <ThemedText type="title">{item.name}</ThemedText>
              <ThemedText>{item.actor}</ThemedText>
            </View>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>
        )}
      />
      <HelloWave />
    </ScrollView>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  movieImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  movieInfo: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  detailsContainer: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  actorItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});
