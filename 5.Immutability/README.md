# Immutability in React 📌

One of the first things you learn when you begin working with React is that you shouldn’t mutate or modify a list:

```javascript

// This is bad, push modifies the original array
items.push(newItem);
// This is good, concat doesn’t modify the original array
const newItems = items.concat([newItem]);

```