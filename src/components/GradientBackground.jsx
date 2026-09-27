import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientBackground({ children, colors }) {
  const gradientColors = Array.isArray(colors) ? colors : ['#0D324D', '#7F5A83'];
  
  return (
    <LinearGradient
      colors={gradientColors} 
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});