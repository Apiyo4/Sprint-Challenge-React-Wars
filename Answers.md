# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
React is a javascript library developed by Facebook that is used to build user interface components.
The major problem React tries to solve is that of extensive DOM manupilation especially when retrieving a large amount of data for a large scale app by using a virtual DOM. 
Secondly React enable us not to use DOM surgery through the use of JSX.
An example of this is Facebook, when a user scrolls down his or her feeds, the virtual DOM through a process called reonciliation renders the difference between the virtual DOM and the regular DOM hence enabling the user to continue receiving data as he or she continues to scroll.

1. What does it mean to think in react?
 Is a way of building big and fast applications in Javascript.
1. Describe state.
State is an object that you can store properties used in a component. It takes an array of the value of property as the first value and a second value that is a function that can change the first value. 
1. Describe props.
    This is a concept inReact where one can be able to pass state property from parent component to child component. It allows the child component to access the parent's component.
1. What are side effects, and how do you sync effects in a React component to state or prop changes?
Side effects are any other action not related to calculating the functions return value, it's also known as impure function.
To sync effect in a React component we add the name of the state property that we are expecting to change in the dependancy array.

