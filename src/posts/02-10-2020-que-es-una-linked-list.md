---
ima: "./linkedlist.png"
tags: ['Estructuras', 'C++']
title: "Linked Lists"
description: ""
date: "2020-10-02T00:00:00.000Z"
category: "study"
cover: true
---

## ¿Qué son? 
Es una estructura de datos que se compone por una secuencia de nodos. <br>
Cada nodo se compone dos partes: 
- Un valor o dato 
- Sus referencias (¿A qué nodos apunta?)

En otras palabras: Un nodo solo sabe el dato que contiene y a qué nodos apuntar.


## Terminología 
- Head (cabeza): Apunta al primer nodo de la lista
  
- Tail (cola): Apunta al último nodo de la lista
  
- Sucesor: El nodo siguiente en la secuencia 
  
- Predecesor: El nodo anterior en la secuencia 

- Tamaño/longitud: cantidad de elementos en ella
  
## Tipos de Linked Lists
Hay 3 tipos de linked lists: 
1. Single Linked Lists
2. Double Linked Lists
3. Circular Linked Lists

### 1. Single Linked Lists
Cada nodo tiene una referencia al siguiente nodo. Por lo tanto, solo se puede recorrer la lista en una dirección. <br><br>
Un ejemplo en C++ de la clase Nodo, para este tipo de lista enlazada: 
``` cpp
class Node{
    private: 
        int value; 
        Node *next; 
    public: 
        Node(int value, Node *next);
}
``` 

### 2. Double Linked List
La lista tiene un apuntador al nodo sucesor y al nodo predecesor. Esto significa que se puede recorrer la lista en dos direcciones. <br> <br>
Un ejemplo en C++ de la clase Nodo, para este tipo de lista enlazada: 
``` cpp
class Node{
    private: 
        int value; 
        Node *next, *prev; 
    public: 
        DoubleNode(int value, Node *next, Node *prev);
}
``` 

### 3. Circular Linked List
Es un tipo de lista enlazada simple o doble, pero tiene una característica particular: El último nodo tiene un apuntador al head node. Esto significa que se puede recorrer infinitamente. 

## Linked Lists en la memoria
Como cada nodo tiene la referencia a la dirección del siguiente, los datos no deben estar almacenados secuencialmente en la memoria. 

## Operaciones

Aquí hay una pequeña descripción de algunas de las operaciones más comunes en relación a las listas enlazadas. 

### Push (Añadir al inicio)
- El método crea un nodo y lo añade al inicio de la lista
  
### Traverse (Recorrer) 
- Comenzar por la cabeza y acceder a cada nodo (next) hasta que se llegue a NULL. 
- No cambiar la referencia a la cabeza. 
  
### Append (Añadir al final)
- Crear un nodo y añadirlo al final de la lista. 
- Requiere recorrer la lista pero debe detenerse en el último nodo. 

### Insert
Para insertar un nodo debo: 
- Crear un nodo
- Crear conexiones
- Eliminar conexión restante

### Erase
Para eliminar un nodo debo: 
- Fijar un apuntador del predecesor al nodo siguiente
- Eliminar el nodo y su conexión
- Liberar toda memoria asociada al mismo ( si se usó memoria dinámica)

### Get Element 
Para obtener el elemento n debo: 
- Recorrer la lista, incrementando un contador hasta llegar al n-ésimo elemento 
- Usar la conexión 
  
## Ventajas y Desventajas
El beneficio de saber usar diferentes estructuras de datos es que podemos compararlas, lo cual nos permite escoger la estructura que más nos conviene, de acuerdo a lo que estamos haciendo. <br>

Comparando con un arreglo o vector, las ventajas/desventajas de implementar una lista enlazada son: 

Ventajas
- Insertar un elemento es O(1)

Desventajas
- Acceder a un elemento es O(n)






 

