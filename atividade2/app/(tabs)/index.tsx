import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';

const animeDetails = {
  title: "Fullmetal Alchemist: Brotherhood",
  description:
    "Acompanhe os irmãos Edward e Alphonse Elric em sua jornada para recuperar seus corpos após uma tentativa fracassada de transmutação humana. Eles exploram os segredos da alquimia e enfrentam inimigos poderosos em busca da Pedra Filosofal.",
  budget: 10000000,  
  votes: 250000,      
  duration: "64 episódios",
  releaseDate: "2009-04-05",
  image: require('@/assets/images/fullmetal.png'), 
  cast: [
    { id: "1", name: "Edward Elric", actor: "Romi Park (JP) / Vic Mignogna (EN)", image: require('@/assets/images/edward.jpg') },
    { id: "2", name: "Alphonse Elric", actor: "Rie Kugimiya (JP) / Maxey Whitehead (EN)", image: require('@/assets/images/alphonse.jpg') }, 
    { id: "3", name: "Roy Mustang", actor: "Shinichiro Miki (JP) / Travis Willingham (EN)", image: require('@/assets/images/roy.jpg') }, 
    { id: "4", name: "Winry Rockbell", actor: "Megumi Takamoto (JP) / Caitlin Glass (EN)", image: require('@/assets/images/winry.jpg') }, 
    { id: "5", name: "Scar", actor: "Kenta Miyake (JP) / J. Michael Tatum (EN)", image: require('@/assets/images/scar.jpg') }, 
  ],
};

const AnimeDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={animeDetails.image} style={styles.animeImage} />
      
      <ThemedView style={styles.animeInfo}>
        <ThemedText type="title">{animeDetails.title}</ThemedText>
        <ThemedText>{animeDetails.description}</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.detailsContainer}>
        <ThemedText>Orçamento: ${animeDetails.budget.toLocaleString()}</ThemedText>
        <ThemedText>Votos: {animeDetails.votes}</ThemedText>
        <ThemedText>Duração: {animeDetails.duration}</ThemedText>
        <ThemedText>Lançamento: {animeDetails.releaseDate}</ThemedText>
      </ThemedView>

      <ThemedText type="subtitle">Personagens</ThemedText>
      <FlatList
        data={animeDetails.cast}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.actorItem}>
            <Image source={item.image} style={styles.actorImage} />
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

export default AnimeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  animeImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  animeInfo: {
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
