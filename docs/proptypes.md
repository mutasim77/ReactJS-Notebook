---
id: proptypes
title: PropTypes
sidebar_position: 7
---

# PropTypes in React 📊

PropTypes are a good first line defense when it comes to debugging your apps. But before getting into detail about PropTypes, we have to understand the concept of props.


Props are the read-only properties that are shared between components to give the unidirectional flow of React a dynamic touch. They're mainly shared from the parent component to the child component, but the reverse is also possible (though not recommended).

## What are PropTypes? 🟢
PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don’t receive an error at the very end of our app by the console which might not be easy to deal with.

I don't recommend using them in short apps like projects for self-practice but it's totally up to you. For larger projects like for a client, it's often a wise choice and a good practice to use them.

There are many different types of PropTypes and all of them have their unique ES6 classes which we can use. We will discuss every type in this article.

## How to use PropTypes? 🟣
Before the release of React 15.5.0, PropTypes were available in the React package, but now we have to add the prop-types library in our project.

We can do so by running the following command in our terminal:

```javascript
npm install prop-types --save
```

We can use PropTypes to validate any data we are receiving from props. But before using it we will have to import it as always in our app:

```jsx
import PropTypes from 'prop-types';
```
They are often used after the component ends and starts with the name of the component as shown:

```jsx
import React from 'react';
import { PropTypes } from "prop-types";
 
const Count = (props) => {
  return (
    <>
      .........
    </>
  )
};
 
Count.propTypes = {
  // key is the name of the prop and
  // value is the PropType
}
export default Count;
```

PropTypes are also objects with a key and a value pair where the ‘key’ is the name of the prop while the value represents the type or class by which they are defined.

Since defining PropTypes on a component does not depend on the component implementation, we will be leaving out the code for the component itself in all the following examples. The code above can be simplified to the following:


```jsx
Count.propTypes = {
  // Put props here
}
```

Let's discuss how many types of PropTypes are there before understanding them with an example.

## Basic Types of PropTypes 🔵


The most basic way we can check a prop's type is by checking if it falls under the category of primitive types in JavaScript, such as a boolean, string, object, and so on.

Below is the list of all data types that are considered primitive or the basic ones with their classes that we can use to check props.
![propTypes pic](https://user-images.githubusercontent.com/96326525/214465188-748d52a4-339b-4fd2-8781-d368c35b99d7.png)

Below is an example that shows us how to use these PropTypes for type checking in our app. As we discussed already, they are defined as objects with a key and a value pair where the key is the name of the object while value contains the classes which will be used for type checking.

```jsx
Count.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  address: PropTypes.object,
  friends: PropTypes.array,
};
```

In the above code, the name prop is expected to have a value which is a string, age is a number, address is an object, and friends is an array. If any value other than this has been used for the same props as a value, it will show an error in the console like this:
![propTypes](https://user-images.githubusercontent.com/96326525/214465416-b4124b82-97d9-4095-941b-f808352a442e.png)

We can chain any of the above with <code>isRequired</code> to make sure a warning is shown if the prop isn't provided.

```jsx
Count.propTypes = {
  basicObject: PropTypes.object,
  numbers: PropTypes.objectOf(PropTypes.numbers),
  messages: PropTypes.instanceOf(Message),
  contactList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
```

## Conclusion 🟢

PropTypes are a great way to catch errors at run time and act as the first line of defense for your applications. They're not as type-safe as TypeScript but they're much easier to set up and work with.