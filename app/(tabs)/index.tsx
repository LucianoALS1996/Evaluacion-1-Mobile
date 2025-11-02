import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a la mejor App del Mundo Papu!</Text>
      <Text style={styles.subtitle}>Iniciaste sesión correctamente.</Text>
    </View>
  );
}

//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00ff00',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#00ff00',
    textAlign: 'center',
  }
});
