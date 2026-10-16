# Week 1 reflection
1. What is the difference between building a UI imperatively (plain DOM code) and
declaratively (React)?

Imperatively building the UI needs the user to write the instructions step-by-step for any changes to the page. Declaratively, the user just needs to describe what the UI should look like for the current data, and React works out the DOM changes. Thus, building the UI will be a lot easier.

2. Why must a component name start with a capital letter?

React will read the lowercase names as a built-in HTML compononets while it will read Uppercase names as a user-defined components. 

3. What does a fragment <>...</> do, and why not just use a <div>?

A fragment lets allow multiple elements to return together without adding an extra box to the page. A `<div>` would add an extra element and that may effect the layout.

4. Name one benefit of splitting the UI into small components.

I can reuse the same piece many times without altering every page files.