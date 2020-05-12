---
ima: "./compilercpp.png"
tags: ['C++', 'Tutorial']
title: "¿Cómo compilar archivos de C++ en la terminal?"
description: "Explicación breve sobre cómo compilo C++ desde mi terminal en VSCode"
date: 12/05/2020
category: "code"
cover: true
---

<br>
En este post te explicaré de manera breve qué es compilar, cuándo se compila y cómo compilar tu archivo de C++ desde tu terminal.

## ¿Qué es compilar? 
Compilar es el proceso que hace tu computadora para traducir un lenguaje de alto nivel (como lo es C++, Java, Python, etc) a lenguaje de máquina. Esto es necesario debido a que la computadora solo entiende binario. 

## ¿Cuándo se compila? 
El ciclo que se sigue al programar en un lenguaje de alto nivel es el siguiente: 
1. Programar
2. Guardar
3. Compilar
4. Ejecutar
   
Compilamos una vez que tengamos el programa que queremos correr guardado.  <br>
Después de esto debemos ejecutarlo. <br>
Si realizas cambios a tu programa, el ciclo se repite.

## ¿Cómo compilo mi archivo .cpp desde mi terminal? 
Lo primero que se debe de hacer es instalar el compilador, llamado G++, para esto escribe el siguiente código en tu terminal: <br>

```shell
sudo apt install g++
```
<br>
Después, debes compilar el archivo que quieres ejecutar: 
<br>

```shell
g++ name.cpp -o name
```
<br>
En este código tienes que reemplazar name.cpp por el nombre de tu archivo (deja la terminación .cpp) y reemplazar name por el nombre que le quieras dar al ejecutable. 
<br><br>
El siguiente y último paso es ejecutar el archivo, para esto escribe "./name" en tu terminal, reemplazando name con el nombre que le pusiste al ejecutable en el paso anterior. 
<br>

```shell
./name
```

<br>
¡Listo! Recuerda que debes volver a compilar cada que guardes un nuevo cambio en tu archivo.


