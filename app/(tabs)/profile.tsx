import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  
  const params = useLocalSearchParams();

  // Extraemos el 'userEmail' que enviamos desde el Login
  const userEmail = params.userEmail || 'Email no encontrado'; 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Información de Perfil</Text>
      
      <View style={styles.card}>
          <Text style={styles.label}>Email del Usuario:</Text>
          {/* Mostrar el email recibido */}
          <Text style={styles.emailText}>{userEmail}</Text>
      </View>
      
    </View>
  );
}

//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#00ff00',
  },
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#333333',
    borderWidth: 1,
    borderColor: '#00ff00',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: '#00ff00',
    marginBottom: 5,
  },
  emailText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#00ff00', 
  },
});
