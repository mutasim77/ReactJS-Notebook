# React Fragments📌

## What is a React fragment?

Fragments are syntax that allow us to add multiple elements to a React component without wrapping them in an extra DOM node.
Let’s take a look at the following code:

```javascript
const App = () => {
  return (
    <h1>This is heading1 text</h1>
  );
}

export default App
```

This is a simple React component. When we return only one JSX in a component, we can avoid wrapping the JSX in another wrapper element as seen above. However, when we add more than one JSX element like so: