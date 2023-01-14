# React Props 📌

- Props are arguments passed into React components.
- Props are passed to components via HTML attributes.
- <code>props stands for properties.</code>

<hr>

### React Props are like function arguments in JavaScript and attributes in HTML.
### To send props into a component, use the same syntax as HTML attributes:
<br>

### Example: 

Add a <b>"brand"</b> attribute to the Car element:
```javascript
const myElement = <Car brand="Ford" />;
```

The component receives the argument as a props object:
<br>

### Example: 
Use the brand attribute in the component:
```javascript
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
```
<hr>

## Pass Data

- Props are also how you pass data from one component to another, as parameters.
<br>

### Example: 
Send the "brand" property from the Garage component to the Car component:
```javascript
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets:

### Example: 
Create a variable named carName and send it to the Car component:
```javascript
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carName } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

Or if it was an object:

### Example: 
Create an object named carInfo and send it to the Car component:
```javascript
function Car(props) {
  return <h2>I am a { props.brand.model }!</h2>;
}

function Garage() {
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

<code><b>Note: React Props are read-only! You will get an error if you try to change their value.</b></code>