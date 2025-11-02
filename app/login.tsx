import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Definición del componente de Login
export default function LoginScreen() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Hook de Expo Router para la navegación
    const router = useRouter();

    //  Función que maneja el inicio de sesión
    const handleLogin = () => {
    // Limpiar el error anterior
    setError('');

    //  Validación de Contraseña
    if (password === '1234') {
        router.replace({ pathname: '/(tabs)', params: { userEmail: email } });
    }else {
        setError('Contraseña incorrecta');
        
    }
    };

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

      {/* Campo de Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput
            style={styles.input}
            placeholder="ejemplo@email.com"
            placeholderTextColor="#006600"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
        />

      {/* Campo de Contraseña */}
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
            style={styles.input}
            placeholder="********"
            placeholderTextColor="#006600"
            secureTextEntry 
            value={password}
            onChangeText={setPassword}
        />

        {/* Mostrar mensaje de error si es que existen */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Botón de Inicio de Sesión */}
        <TouchableOpacity
            style={[styles.loginButton, { opacity: (!email || !password) ? 0.5 : 1 }]}
            onPress={handleLogin}
            disabled={!email || !password}
            >
                <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
    </View>
    );
}

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'black',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#00ff00',
    },
    input: {
        height: 50,
        borderColor: '#00ff00',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 15,
        borderRadius: 8,
        color: '#00ff00',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 15,
    },
    loginButton: {
        backgroundColor: '#00FF00', 
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10,
    },
    loginButtonText: {
        color: 'black', 
        fontSize: 18,
        fontWeight: 'bold',
    },
    label: { 
        fontSize: 16,
        color: '#00ff00',
        marginBottom: 5,
        fontWeight: '600',
    },

});