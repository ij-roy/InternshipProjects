import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { signInWithGoogle } from '../../services/authService';

const LoginScreen = ({ navigation }) => {

  console.log('LoginScreen.js')

  const handleGoogleSignIn = async () => {
    console.log('Inside handleGoogleSingnin')
    try {
      console.log('Inside try')
      await signInWithGoogle();
      console.log('Inside signInWithGoogle')
      navigation.replace('HomeScreen'); // Redirect to home after login
      console.log('After homescreen')
    } catch (error) {
      console.error('Login Error:', error);
      console.log('Inside error')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buzzora</Text>
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  googleButton: { backgroundColor: '#4285F4', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default LoginScreen;