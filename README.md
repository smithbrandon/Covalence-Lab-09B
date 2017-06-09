# Lab 09B - Dicey Business (TS, LESS)
## [Demo Link](https://smithbrandon.github.io/Covalence-Lab-09B)

### Due Monday, May 12th
This lab will combine principles of LESS and Typescript.

**General Requirements**
* You must use OOP. Create a class named Die that represents a single die.
* Your class must have a property named `value`.
* Your class must have a function named `roll` that generates a random integer 1-6, sets the `value` property, and updates the div on the page with the new value.
* When a new Die is created, it should automatically create a div, roll itself, and put the div on the screen
* You can use either the DOM or JQuery, but please be consistent and stick with one.

1. Create an index.html file, a JS file, and a CSS file.
2. Implement the objectives of the lab as follows:
    * The page must contain a button labeled Generate Die. You can go ahead and put this in your HTML. (No reason to make this harder by creating it in code when you can just put it in your HTML)
    * Clicking the button should create a new Die object (thus causing a div to be added to the screen with a random number 1-6)
    * The dice should show up on your page in a grid, similar to the layout of DOM DOM DOMMMMM.
    * The page must contain a button labeled Roll Dice, which should cause all the dice on the screen to `roll`, updating their values.
    

*Hints*
* You can set a property on your Die object that holds the Div representing the die on the page. See the Person example in the lecturette above.
* You will probably want to store each Die you create in a global array. This may be helpful when it comes time to roll all the dice.
* Clicking the `Roll Dice` button can loop through that array, where you will have access to the properties and functions of each instance of Die.
* When approaching any aspect of this lab, always think of starting in JavaScript first and then getting a DOM element to work with
    * If you get a DOM element, there is no way it can tell you what Die object it is affiliated with
    * However, a Die object can have a variable that contains a DOM element (div)

**_Above & Beyond_**
Try extending the functionality of this lab to support the following features. They are listed in order from easiest to hardest to implement.
* Create a `sumDice` function and a button that triggers it. It should add up the current face value of all the dice on the page and display an alert with the sum.
* Add a feature where clicking on a die on the page causes just that one die to roll, updating its face value
* Add a feature where double clicking on a die on the page causes that die to be removed from the page
    * Be careful to take appropriate measures so that the `sumDice` function still reports the correct sum after you delete a die
