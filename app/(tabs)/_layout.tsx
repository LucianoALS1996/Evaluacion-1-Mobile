import { FontAwesome } from '@expo/vector-icons';
import { Tabs, useLocalSearchParams } from 'expo-router';
import LogoutButton from '../LogoutButton';

export default function TabLayout() {
  //  OBTENEMOS el email del parámetro de la URL
  const { userEmail } = useLocalSearchParams();
  
  // Convertimos userEmail a string para evitar errores de tipado
  const emailString = userEmail ? String(userEmail) : '';

  
  const headerTheme = {
    headerShown: true, 
    headerStyle: { backgroundColor: 'black' }, 
    headerTintColor: '#00FF00', 
    headerRight: () => <LogoutButton />, 
  };

  return (
    <Tabs 
        screenOptions={{ 
            
            tabBarActiveTintColor: '#00FF00', 
            tabBarInactiveTintColor: '#AAAAAA',
            tabBarStyle: {
                backgroundColor: 'black', 
                borderTopColor: '#00FF00',
            }
        }}
    >
      
      {/* Tab Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          
          ...headerTheme, 
          
          href: { pathname: '/(tabs)', params: { userEmail: emailString } },
          tabBarIcon: ({ color }) => <FontAwesome name="home" color={color} size={24} />,
        }}
      />

      {/* Tab Perfil */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          
          ...headerTheme, 
          
          href: { pathname: '/(tabs)/profile', params: { userEmail: emailString } },
          tabBarIcon: ({ color }) => <FontAwesome name="user" color={color} size={24} />,
        }}
      />
      
    </Tabs>
  );
}
