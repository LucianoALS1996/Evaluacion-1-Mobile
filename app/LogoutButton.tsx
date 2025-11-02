import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 5,
        marginRight: 10, 
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = () => {
        router.replace('/login');
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.text}>Cerrar Sesión</Text>
        </TouchableOpacity>
    );
}