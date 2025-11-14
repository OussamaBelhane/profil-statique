import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  Button, 
  ScrollView, 
  StyleSheet, 
  Alert 
} from 'react-native';

export default function ProfilInteractif() {
  // States pour rendre le profil modifiable
  const [nom, setNom] = useState('Oussama Belhane');
  const [message, setMessage] = useState('Hello Everyone 👋');

  const handleAlert = () => {
    Alert.alert('Bonjour !', `Vous avez appuyé sur le bouton 😊\nNom: ${nom}\nMessage: ${message}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://ui-avatars.com/api/?name=Oussama+Belhane&size=150&background=0D8ABC&color=fff&bold=true' }}
        style={styles.avatar}
      />
      <Text style={styles.title}>Profil utilisateur</Text>

      <Text style={styles.label}>Nom :</Text>
      <TextInput
        style={styles.input}
        value={nom}
        onChangeText={setNom}      
        placeholder="Entrez votre nom"
        editable={true}           
      />

      <Text style={styles.label}>Message :</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}   // permet de modifier le message
        placeholder="Entrez votre message"
        editable={true}             // champ modifiable
      />

      <Button 
        title="Afficher une alerte"
        onPress={handleAlert}       // déclenche l'alerte
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    paddingTop: 60,        // ← Ajouté : espace en haut du container
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 20,         // ← Ajouté : espace au-dessus de l'avatar
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
});