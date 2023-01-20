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

## <b>Reference equality vs. value equality🟢</b>

With reference equality, you compare object references with either the <code>===</code> and <code>!==</code> operators or the <code>==</code> and <code>!=</code> operators. If the references point to the same object, they are considered equal:

```javascript
var str1 = ‘abc’;
var str2 = str1;
str1 === str2 // true
```
In the example above, both the <code>str1</code> and <code>str2</code>references are equal because they point to the same object, <code>'abc'</code>:
<img width="700" alt="Screen Shot 2023-01-20 at 2 06 54 PM" src="https://user-images.githubusercontent.com/96326525/213646878-b040cbac-f16c-4b26-80d2-a11cbb55fedd.png">
