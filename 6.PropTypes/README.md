# <b>PropTypes in React📊</b>

PropTypes are a good first line defense when it comes to debugging your apps. But before getting into detail about PropTypes, we have to understand the concept of props.

<br>
Props are the read-only properties that are shared between components to give the unidirectional flow of React a dynamic touch. They're mainly shared from the parent component to the child component, but the reverse is also possible (though not recommended).
<hr>

## <b>What are PropTypes?</b> 🟢
PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don’t receive an error at the very end of our app by the console which might not be easy to deal with.

I don't recommend using them in short apps like projects for self-practice but it's totally up to you. For larger projects like for a client, it's often a wise choice and a good practice to use them.

There are many different types of PropTypes and all of them have their unique ES6 classes which we can use. We will discuss every type in this article.

## <b>How to use PropTypes?</b> 🟣
Before the release of React 15.5.0, PropTypes were available in the React package, but now we have to add the prop-types library in our project.

We can do so by running the following command in our terminal:

```javascript
npm install prop-types --save
```

We can use PropTypes to validate any data we are receiving from props. But before using it we will have to import it as always in our app:

```javascript
import PropTypes from 'prop-types';
```

They are often used after the component ends and starts with the name of the component as shown: