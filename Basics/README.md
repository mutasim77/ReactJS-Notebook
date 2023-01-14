# Introduction

React is a JavaScript library for building user interfaces created by Facebook. Using React you can build user interfaces specifically Single Page Applications (SPA) or websites. Let’s learn some basics before jumping into the code.

- ES6: React uses ES6. It stands for ECMAScript 6. It was created to standardize JavaScript.
- Core syntax: React uses a syntax extension of JavaScript called JSX which allows you to write HTML tag inside javaScript and helps to keep your code readable. For example :
 
     ```javascript
     const element = <h1>Hello World!</h1> 
     ```
- Component: Everything in React is a component. Component is an independent, reusable code block. There are two types of components in React.
   - 1 Class Component
   - 2 Functional Component
  
  Let’s see them in detail

<hr>
<b>Class Component</b>: Class component is an ES6 class. You can create a class component by extending the React-Component. It must have a render( ) method which returns a React element. Let’s create a Class component called Hello :

<br>

```javascript
import React from 'react';

class Hello extends React.Component {  
    render() {  
        return(
            <h1>Hello world!</h1>;  
        )
    }  
}
```

Here, the class Hello extends React.Component so React understands that this class is a component. Inside render() it returns a React element. In the example above, it displays h1 tag with the text Hello world! inside it.

<hr>
<b>Functional Component</b>: It is a JavaScript / ES6 function. It must return a React element. Let’s create a functional component called Hello :

<br>

```javascript
function Hello(){  
    return(
        <h1>Hello world!</h1>;  
    )
}
```

or as an ES6 arrow function:

```javascript
const Hello = () =>{  
    return(
        <h1>Hello world!</h1>;  
    )
}
```
<br>
<hr>
To get your application render on the screen, we also have to use <code>ReactDOM.render()</code>

```javascript
ReactDOM.render(  
    <Hello />,   
    document.getElementById("root")  
);
```
or

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Hello />
);
```

Here, the above code renders the <b>Hello</b> component inside the <b>DOM</b> with an id of root.
