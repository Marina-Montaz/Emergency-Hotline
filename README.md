# Emergency-Hotline
A simple, responsive webpage for an emergency hotline. I used HTML3, Tailwind CSS, Vanilla JS to create this.

#SomeQnA
(1)	
Suppose I have a class named fruits, and its elements have id names like banana, mango, and grapes. So, when I have to work with a specific fruit, like a banana, I'll use getElementById, and if I have to work with all the elements, I'll use getElementsByClassName.
Almost with a similar concept (but definitely not the same), when I want to work with the very first fruit I find, I’ll be using querySelector, and when I want to work with all the fruits listed, I’ll use querySelectorAll.

(2)	
To add a new element to the fruit list, first we have to create a list, then name it as I want, and then insert it.
as an example: 
const newFruit = document.createElement(‘li’);
newFruit.textContent = ‘Apple’;
newFruit.className = 'fruit-item';
const list = document.querySelector('.fruits');
list.appendChild(newFruit);

(3)	
Event Bubbling is a mechanism where an event triggered on a child element moves upward in the family tree to the parent in the DOM. In this process, the parents respond to the event triggered by their child.
For example, my area's street needs to be fixed, so the local councilor goes to the mayor, then the mayor takes it to the Ministry of Finance, then it gets approved, and the budget track backs to the mayor, and the road gets fixed. Here, the councilor triggered the event as a child, it went to the ministry, the parent, and the parent responded.  

(4)	
Event Delegation is a pattern used to handle events efficiently by attaching a single event listener to a parent element instead of adding listeners to multiple similar child elements, and then identifying the actual source of the event using the event target property. 
Why to use: 
(i) To reduce code complexity
(ii) To improve performance 

(5)	
When a form is submitted, it usually refreshes the page. But event.preventDefault() function prevents the page from refreshing or similar usual things.
And event.stopPropagation() stops an event from Event Bubbling and doesn’t let the parent div know anything.