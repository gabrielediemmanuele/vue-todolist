# Vue To Do List

## Descrizione

Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo

- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

## MILESTONE 1

Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

## MILESTONE 2

Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

## MILESTONE 3

Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

## Bonus:

1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa).

# STEPS

1. Creare un array di oggetti "To Do" formati da due proprietà:

- text (sarà il testo contenuto nel toDo)
- done (true o false // corrisponde a se il compito è stato svolto o meno.)

2. Milestone 1: stampare all'interno di una _lista_ ogni _oggetto_

   - fare un controllo, se il compito è stato svolto, renderlo sbarrato con una classe css.

3. Milestone 2: visualizzare di fianco ad ogni item, una x e cliccando su questa, l'item verrà rimosso dalla lista.
   (Utilizzare bootstrap per l'input adeguato...)
   (o crearlo con css.. ).

- Collegare al click della x, il meccanismo per far scomparire il todo.

## BONUS....
