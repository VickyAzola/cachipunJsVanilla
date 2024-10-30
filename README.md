# Cachipún (HTML, CSS, Js)

## Tabla de Contenidos

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Cómo Jugar](#como-jugar)
- [Estructura de Código](#estructura-de-código)
- [Instalación](#instalación)
- [Autor](#autor)

# Descripción

Este es un juego de "Piedra, Papel o Tijera" creado en HTML, CSS y JavaScript. 
Permite al usuario competir contra la computadora en rondas consecutivas hasta que alguno de los dos gane tres veces. 

[Revisa la página aquí](https://vickyazola.github.io/cachipunJsVanilla/)

![preview](https://github.com/user-attachments/assets/1d0d35c1-6da9-4c1e-8b6b-9426253b847a)

## Estructura del Proyecto

- **HTML:** La estructura del juego, incluyendo secciones para las elecciones, resultados y contadores de puntuaciones.
- **CSS:** Estilos para hacer que el juego sea visualmente atractivo y responsivo en dispositivos móviles.
- **JavaScript:** Lógica del juego para manejar la elección del usuario, la selección aleatoria de la computadora, la actualización de puntajes y la determinación del ganador.

## Cómo Jugar

1. Abre el archivo `index.html` en un navegador.
2. Selecciona tu ataque (Piedra, Papel o Tijera) y haz clic en "Atacar".
3. El juego mostrará la elección de la computadora y actualizará las puntuaciones.
4. El primer jugador en ganar 3 rondas es declarado ganador.
5. Al final del juego, puedes hacer clic en el botón de "Jugar de Nuevo" para reiniciar.

## Estructura de Código

- **Funciones principales:**
  - `userChoise(event)`: Captura la elección del usuario, calcula el ganador de la ronda y actualiza el contador.
  - `computerChoise()`: Genera una elección aleatoria para la computadora.
  - `resetGame()`: Reinicia el juego al restablecer contadores y limpiar las elecciones.

- **Lógica de juego:**
  - El usuario y la computadora comparan sus elecciones.
  - El ganador de la ronda recibe un punto.
  - Cuando un jugador llega a 3 puntos, el juego muestra el mensaje de victoria o derrota y desactiva el botón de ataque hasta que se reinicie.

## Instalación

Sigue los siguientes pasos para instalar y ejecutar el proyecto en tu entorno local:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/VickyAzola/cachipunJsVanilla.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd cachipunJsVanilla
    ```

3. Abre el archivo `index.html` en tu navegador.

## Autore

- **Desarrollador**: [Victoria Azola Silva](https://github.com/VickyAzola)
