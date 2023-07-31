---
sidebar_position: 3
---

# React Props 📌

- Props are arguments passed into React components.
- Props are passed to components via HTML attributes.
- Props stands for properties.

### React Props are like function arguments in JavaScript and attributes in HTML.
### To send props into a component, use the same syntax as HTML attributes:

### Example: 

Add a **"brand"** attribute to the *Car* element:

```jsx
const myElement = <Car brand="Ford" />;
```

The component receives the argument as a props object:

### Example: 
Use the brand attribute in the component:
```jsx
const Car = (props) => {
  return <h2>I am a { props.brand }!</h2>;
}
```
## Pass Data

- Props are also how you pass data from one component to another, as parameters.

### Example: 
Send the "brand" property from the Garage component to the Car component:

```jsx
const Car = (props) => {
  return <h2>I am a { props.brand }!</h2>;
}

const Garage = () => {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets:

### Example: 
Create a variable named carName and send it to the Car component:

```jsx
const Car = (props) => {
  return <h2>I am a { props.brand }!</h2>;
}

const Garage = () => {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carName } />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

Or if it was an object:

### Example: 
Create an object named carInfo and send it to the Car component:

```jsx
const Car = (props) => {
  return <h2>I am a { props.brand.model }!</h2>;
}

const Garage = () => {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carInfo } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

> Note: React Props are read-only! You will get an error if you try to change their value.


# React Render 📌

- React's goal is in many ways to render HTML in a web page.
- React renders HTML to the web page by using a function called **ReactDOM.render()**


## The Render Function
- The ReactDOM.render() function takes two arguments, HTML code and an HTML element.
- The purpose of the function is to display the specified HTML code inside the specified HTML element.

### But render where?

There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.

You'll notice a single ```<div>``` in the body of this file. This is where our React application will be rendered.


### Example
Display a paragraph inside an element with the id of **"root"**:

```jsx
ReactDOM.render(<p>Hello</p>, document.getElementById('root'));
```

The result is displayed in the ```<div id="root">``` element:

```jsx
<body>
  <div id="root"></div>
</body>
```

> Note that the element id does not have to be called "root", but this is the standard convention.


