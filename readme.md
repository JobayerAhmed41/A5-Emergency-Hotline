1.The difference between querySelector / querySelectorAll, getElementById, and getElementsByClassName.

("id") getElementById
•	Provides a single element with the corresponding id.
•	Returns null if there is no element.
•	 In the DOM, IDs ought to be distinct.
•	The quickest approach since browsers adjust for ID.

"className" -> getElementsByClassName:

•	Gives back every element that has that class name.
•	Returns a live HTMLCollection → The collection immediately updates if the
•	DOM changes (for example, a new element of the same class is inserted).
•	For each element to work, looping is necessary.

querySelector:

•	Gives back the first element that a CSS selector matches.
•	More adaptable: can target by :nth-child, [attribute], #id,.class, etc.

querySelectorAll:

•	All elements that match a selection are returned.
•	provide a static NodeList that isn't updated immediately when the DOM changes.
•	Direct use of forEach() is possible.

--------------------------------------------------------------------------------------------------------------------------
2.How to make a new element and add it to the DOM. 

•	To add a new element into a webpage:
•	 Make the element first.
•	 Next, include characteristics, classes, or text as properties. 
•	 Lastly, set it where it belongs in the document—for instance, at the beginning, the end, or before or after another element.
Example:
const li = document.createElement("li");  
li.textContent = "New Item";            
li.classList.add("highlight");
document.getElementById("list").appendChild(li); 
-------------------------------------------------------------------------------------------------------------------------
3.Event Bubbling
An event begins at the target element when you interact with it (for example, by clicking a button), and it gradually ascends via each of its parent containers until it reaches the top of the document. 
For instance, 
when you click a button inside a box, the button's event will be triggered first, followed by the box's event and finally the page's
--------------------------------------------------------------------------------------------------------------------------
4.Event Delegation
One listener is placed on a parent element rather than numerous event listeners on child elements. You can determine which child was clicked when an event occurs on a child because the parent "catches" it as it bubbles up.

Why it's beneficial:
• Less listeners save memory. 
• Suitable for later-created elements (dynamic content). 
• Simplifies and cleans up code.
--------------------------------------------------------------------------------------------------------------------------
5.The difference between stopPropagation() and preventDefault() 

preventDefault() :

•	Goal: Prevents the browser from acting in such way by default. 
•	Only what the browser would have done by default is stopped, not the event itself.
•	Default behaviour examples: 
                 When a link is clicked, a new page is typically opened. 
                 When a form is submitted, the page typically reloads.
                 normally changes its checked state.
                 normally opens the context menu.

stopPropagation()

•	Goal: Prevents the event from progressing via the event flow.
•	Keep in mind that things happen in three stages:
               Phase of capture: from the document to the goal.
               The event reaches the real element after the target phase.
               Bubble phase: the event returns to the document after bubbling up from the target.
