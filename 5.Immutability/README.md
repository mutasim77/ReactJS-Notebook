# Immutability in React 📌

One of the first things you learn when you begin working with React is that you shouldn’t mutate or modify a list:

```javascript
// This is bad, push modifies the original array
items.push(newItem);
// This is good, concat doesn’t modify the original array
const newItems = items.concat([newItem]);
```
Despite popular belief, there’s actually nothing wrong with mutating objects. In certain situations, like concurrency, it can become a problem, however, mutating objects is the easiest development approach. Just like most things in programming, it’s a trade-off.

Functional programming and concepts like immutability are popular topics. But in the case of React, immutability isn’t just fashionable, it has some real benefits. In this article, we’ll explore immutability in React, covering what it is and how it works. Let’s get started!
<hr>

## <b>What is immutability?🟠</b>

If something is immutable, we cannot change its value or state. Although this may seem like a simple concept, as usual, the devil is in the details.

You can find immutable types in JavaScript itself; the String value type is a good example. If you define a string as follows, you cannot change a character of the string directly:

```javascript
var str = 'abc';
```
In JavaScript, strings are not arrays, so you can define one as follows:

```javascript
str[2] = 'd';
```
Defining a string using the method below assigns a different string to str:
```javascript
str = 'abd';
```
You can even define the str reference as a constant:
```javascript
const str = 'abc'
```
Therefore, assigning a new string generates an error. However, this doesn’t relate to immutability. If you want to modify the string value, you have to use manipulation methods like <code>replace()</code>, <code>toUpperCase()</code>, or <code>trim()</code>. All of these methods return new strings; they don’t modify the original one.
<hr>

## <b>Value type🟣</b>

It’s important to pay attention to the value type. String values are immutable, but string objects are not.

```javascript
const str = new String("abc");
str.myNewProperty = "some value";

alert(str.myNewProperty);

str.myNewProperty = "a new value";

alert(str.myNewProperty);
```
Strings are immutable. The last example creates an object with the String() constructor that wraps the immutable string value. You can add new properties to this wrapper because it’s an object, and it’s not frozen. This example leads us to a concept that is important to understand; the difference between reference and value equality.
<hr>

## <b>Reference equality vs. value equality🟢</b>

With reference equality, you compare object references with either the <code>===</code> and <code>!==</code> operators or the <code>==</code> and <code>!=</code> operators. If the references point to the same object, they are considered equal:

```javascript
var str1 = ‘abc’;
var str2 = str1;
str1 === str2 // true
```
In the example above, both the <code>str1</code> and <code>str2</code>references are equal because they point to the same object, <code>'abc'</code>:
<img width="700" alt="Screen Shot 2023-01-20 at 2 06 54 PM" src="https://user-images.githubusercontent.com/96326525/213646878-b040cbac-f16c-4b26-80d2-a11cbb55fedd.png">

Two references are also equal when they refer to the same value if this value is immutable:

```javascript
var str1 = ‘abc’;
var str2 = ‘abc’;
str1 === str2 // true
var n1 = 1;
var n2 = 1;
n1 === n2 // also true
```
<img width="699" alt="Screen Shot 2023-01-20 at 2 08 47 PM" src="https://user-images.githubusercontent.com/96326525/213647083-594db53c-73a2-408b-924e-17d74f57c53d.png">

But, when talking about objects, this doesn’t hold true anymore:

```javascript
var str1 =  new String(‘abc’);
var str2 = new String(‘abc’);
str1 === str2 // false
var arr1 = [];
var arr2 = [];
arr1 === arr2 // false
```

In each of these cases, two different objects are created, and therefore, their references are not equal:
<img width="629" alt="Screen Shot 2023-01-20 at 2 14 57 PM" src="https://user-images.githubusercontent.com/96326525/213648117-2408c701-b7ae-4fd0-adbd-1cea64806c8e.png">

If you want to check if two objects contain the same value, you have to use value equality, where you compare the values of the properties of the object.

In JavaScript, there’s no direct way to perform value equality on objects and arrays. If you’re working with string objects, you can use the <code>valueOf</code> or <code>trim</code> methods, which return a string value:

```javascript
var str1 =  new String(‘abc’);
var str2 = new String(‘abc’);
str1.valueOf() === str2.valueOf() // true
str1.trim() === str2.trim() // true
```

For any other type of object, you either have to implement your own equals method or use a third-party library. It’s easier to test if two objects are equal if they are immutable. React takes advantage of this concept to make some performance optimizations; let’s explore these in detail.
<hr>

## Immutability performance optimizations in React🔵

React maintains an internal representation of the UI, called the virtual DOM. When either a property or the state of a component changes, the virtual DOM is updated to reflect those changes. Manipulating the virtual DOM is easier and faster because nothing is changed in the UI. Then, React compares the virtual DOM with the version before the update to know what changed, known as the reconciliation process.

<br>

Therefore, only the elements that changed are updated in the real DOM. However, sometimes, parts of the DOM are re-rendered even when they didn’t change. In this case, they’re a side effect of other parts that do change. You could implement the <code>shouldComponentUpdate()</code> function to check if the properties or the state really changed, then return <code>true</code> to let React perform the update:

```javascript
class MyComponent extends Component {
// ...
shouldComponentUpdate(nextProps, nextState) {
    if (this.props.myProp !== nextProps.color) {
      return true;
    }
    return false;
  }
// ...
}
```

If the properties and state of the component are immutable objects or values, you can check to see if they changed with a simple equality operator.

From this perspective, immutability removes complexity because sometimes it is hard to know exactly what changed. For example, think about deep fields:

```javascript
myPackage.sender.address.country.id = 1;
```

How can you efficiently track which nested object changed? Think about arrays. For two arrays of the same size, the only way to know if they are equal is by comparing each element, which is a costly operation for large arrays.

<br>

The most simple solution is to use immutable objects. If the object needs to be updated, you have to create a new object with the new value since the original one is immutable and cannot be changed. You can use reference equality to know that it changed.

<br>

The React documentation also suggests treating state as if it were immutable. Directly manipulating the state nullifies React’s state management, resulting in performance issues. The React useState Hook plays a vital role in performance optimization, allowing you to avoid directly manipulating the state in functional components.

<br>
To some people, this concept may seem a little inconsistent or opposed to the ideas of performance and simplicity. So, let’s review the options you have to create new objects and implement immutability.
<hr>

## <b>Implementing immutability in React🟠</b>

In most real world applications, your state and properties will be objects and arrays. JavaScript provides some methods to create new versions of them.

### <code><b style="color: red;">Object.assign</b></code>

Instead of manually creating an object with the new property, you can use <code>Object.assign</code> to avoid defining the unmodified properties:

```javascript
const modifyShirt = (shirt, newColor, newSize) => {
  return {
    id: shirt.id,
    desc: shirt.desc,
    color: newColor,
    size: newSize
  };
}


const modifyShirt = (shirt, newColor, newSize) => {
  return Object.assign( {}, shirt, {
    color: newColor,
    size: newSize
  });
}
```

<code>Object.assign</code> will copy all of the properties of the objects passed as parameters, starting from the second parameter to the object specified in the first parameter.

### <code><b style="color: red;">Spread operator</b></code>

You can use the spread operator with the same effect; the difference is that Object.assign() uses setter methods to assign new values, while the spread operator doesn’t:

```javascript
const modifyShirt = (shirt, newColor, newSize) => {
  return {
    ...shirt,
    color: newColor,
    size: newSize
  };
}
```

You can also use the spread operator to create arrays with new values:

```javascript
const addValue = (arr) => {
  return [...arr, 1];
};
```

### <code><b style="color: red;">concat and slice methods</b></code>

Alternately, you can use methods like concat or slice, which return a new array without modifying the original one:

```javascript
const addValue = (arr) => {
  return arr.concat([1]);
};
const removeValue = (arr, index) => {
  return arr.slice(0, index)
    .concat(
        arr.slice(index+1)
    );
};
```

In this <a href="https://gist.github.com/JoeNoPhoto/329f002ef4f92f1fcc21280dc2f4aa71">gist</a>, you’ll see how to combine the spread operator with these methods to avoid mutating arrays while performing common operations.

<br>
However, there are two main drawbacks to using these native approaches. For one, they copy properties or elements from one object or array to another, which could be a slow operation for larger objects and arrays. In addition, objects and arrays are mutable by default. There’s nothing that enforces immutability. You have to remember to use one of these methods.

<br>
For these reasons, it’s better to use an external library that handles immutability.

