---
ima: "./stack.png"
tags: []
title: "Violentómetro"
description: ""
date: "2020-10-02T00:00:00.000Z"
category: "study"
cover: true
---

##  ¿Que son los Stacks (Pilas)?
- Estructura de datos lineal
- Sigue el orden LIFO (Last In First Out), lo que quiere decir que el último elemento en ingresar a la estructura, es el primero en salir. 

### Operaciones
- push(): Agrega un elemento a la pila. Si la pila está llena, se dice que es un overflow. 
- pop(): Elimina un elemento de la pila. Si la pila está vacía, se dice que es un underflow.
- peek(): Devuelve el elemento superior de la fila.
- isEmpty(): Devuelve verdadero si la pila está vacía.

La complejidad de estas operaciones es O(1). 

### Aplicaciones 
- Aunque es una estructura de datos simple de implementar, es muy poderosa. 
- Algunos usos comunes son: 
  - Para invertir una palabra
  - En compiladores. Los compiladores usan la pila para calcular el valor de expresiones al convertirlas en forma prefijo o sufijo. 
  - En los navegadores. 
  - Funciones de rehacer y deshacer. 
