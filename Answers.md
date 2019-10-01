# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a framework with inside JavaScript that uses JSX syntax. React uses the virtual DOM to update as need be to match the actual DOM, reacts when state(data) in the app changes and will update the DOM accordingly.  ReactJS solves the problem of having the actual DOM to be very fast, and reflect the UI if it's changing the same data.  It solves a lot of issues with coding the actual DOM to always reflect what a user is doing, clicking, posting, etc.  React can react to the user faster than the actual DOM. 
  

1. What does it mean to think in react?

To think in react means you are thinking about how you are breaking down your idea/ framewire/App into components.  You have decide if there are parents to child to grandchild or just parent to child.  Decide if you want state(data) or if you don't need it.  To think in react you are breaking down every bit into a reusable template to build more later or easily change things also. 

1. Describe state.

State is managed within the component(like to variables declared within a function).  State always stays with the top parent.   State schedules an update to a component's state object, so states change.

1. Describe props.

Props, short of properties, props get passed to the component (like a function parameter).  Props are taken from grandparent, parent, child, grandchild, greatgrandchild and so on.  Props are just place holders for the updated state to go into. Props never change! 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side Effects are the Effect Hook used within React, let you state and other features without writing a class. It let's you perform side effects in function components. We are telling React that our components need to do something after render. React remembers the function we passed, and call it later after performing the DOM update.   To sync effect in React you have to add React from React add-on within yarn or npm and import to the correct file you are working with. 
