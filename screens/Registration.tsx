import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  start: undefined;
  Login: undefined;
  Register: undefined;
};

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

const RegisterScreen = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={50}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          {/* Background */}
          <View style={styles.header}>
            <View style={styles.logo}>
              <Image
                source={require('../assets/lunchbox.png')}
                style={styles.logoImage}
              />
            </View>
            <Text style={styles.title}>Register</Text>
          </View>

          {/* Overlay */}
          <View style={styles.overlay} />

          {/* Registration Form */}
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.loginForm}>
              {/* Full Name Field */}
              <View style={styles.inputField}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your full name"
                  placeholderTextColor="#757575"
                />
              </View>

              {/* Email Field */}
              <View style={styles.inputField}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor="#757575"
                  keyboardType="email-address"
                />
              </View>

              {/* Password Field */}
              <View style={styles.inputField}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor="#757575"
                  secureTextEntry
                />
              </View>

              {/* Confirm Password Field */}
              <View style={styles.inputField}>
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm your password"
                  placeholderTextColor="#757575"
                  secureTextEntry
                />
              </View>

              {/* Register Button */}
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Register</Text>
              </TouchableOpacity>

              {/* Login Link */}
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.forgotPassword}>Already have an account? Log in</Text>
              </TouchableOpacity>

              {/* Social Login */}
              <View style={styles.socialContainer}>
                <TouchableOpacity>
                  <Image
                    source={{ uri: 'https://static-00.iconduck.com/assets.00/google-icon-256x256-67qgou6b.png' }}
                    style={styles.socialLogo}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png' }}
                    style={styles.socialLogo}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/256/124/124010.png' }}
                    style={styles.socialLogo}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B204E',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: '400',
    color: '#0B204E',
    marginTop: 40,
  },
  overlay: {
    position: 'absolute',
    top: 230, // Fixed position
    left: 0,
    right: 0,
    height: '90%', // Fixed size
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 40,
    zIndex: -1, // Keeps it behind other elements
  },
  loginForm: {
    marginTop: 60,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  inputField: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#1E1E1E',
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#5A5A5A',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  rememberMe: {
    fontSize: 16,
    color: '#000000',
  },
  forgotPassword: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#0B204E',
  },
  loginButton: {
    height: 40,
    backgroundColor: '#2C2C2C',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  socialLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
