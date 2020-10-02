---
ima: "./queue.png"
tags: ['Estructuras', 'C++']
title: "Queues"
description: ""
date: "2020-10-02T00:00:00.000Z"
category: "study"
cover: false
---

## ¿Qué son las Queues (Filas/Colas)? 
- Estructura de datos lineal
- Sigue el orden FIFO (First In First Out), lo que quiere decir que el último elemento en ingresar a la estructura, es el último en salir. 

### Operaciones
- enqueue(): Añade un elemento al final de la fila. 
- dequeue(): Elimina el elemento del frente de la fila. 
- peek(): Obtiene el elemento al frente de la fila, sin eliminarlo. 
- isEmpty(): Revisa si la fila está vacía. 
  
La complejidad de estas operaciones es O(1). 

### Aplicaciones
- Aunque es una estructura de datos simple de implementar, es muy poderosa. 
- Algunos usos comunes son: 
  - Operaciones en redes de computadoras: 
    - Trabajos envíados a una impresora
    - Solicitudes a un servidor 