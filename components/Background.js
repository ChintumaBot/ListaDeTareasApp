import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function Background({ children }) {
  return (
    <ImageBackground 
      source={require('../assets/celular fondo.jpg')} 
      style={styles.background}
      imageStyle={styles.imageStyle} // Nuevo estilo para la imagen
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start', // Cambiado a flex-start para alinear contenido al inicio
    alignItems: 'center', // Alinea contenido horizontalmente
    paddingTop: 50, // Espaciado en la parte superior
  },
  imageStyle: {
    opacity: 0.9, // Añadido para dar un efecto de transparencia a la imagen
  },
});
