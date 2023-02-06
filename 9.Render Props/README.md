# Render Props 📌

Being a programmer, you always need to find the easiest way to solve a problem – write succinct and reusable code that other developers can quickly grasp. Currently, UI libraries like react.js, vue.js etc. are very popular because one can write reusable code while solving complex UI problems. Development is fast and it makes life easy for everyone.

Design patterns are fairly common and popular. React also has its own set of patterns which aid in writing clean and robust code while keeping it maintainable.

First off, we will be starting with Render props which is one of hottest topics in react community. We will also be building an entire app to see Render Props in action. Happy reading!

- ## What is render props? 🟢

As mentioned in the react docs:

The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.

In simple words, render props are simply props of a component where you can pass functions. These functions need to return elements, which will be used in rendering the components.
<hr>
Let’s understand render props in depth.

Render props look like this:

```jsx
class NameWrapper extends Component {
  state = { 
     name: 'Mutasim' 
  };
  render() {
    return this.props.render(this.state.name);
  }
}

const Name = () => (
  <NameWrapper render={name => <h2>Hi, {name}!</h2>} />
);
```

We are using the “Name” component where we can pass a prop called render. Here, render is a function and it receives an argument i.e. state “name”.

The babel version of JSX looks like this:

```jsx
const App = () => {
  return (
    <SomeParent>
      <SomeChild/>
    </SomeParent>
  );
}
```
<hr>
Have you checked the babel transpiled version of render props?

Let’s see how the “Name” component will look in <a href="https://babeljs.io/en/repl.html#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bz5waBgAB2kcThhSBHIcDiJeIA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.20.15&externalPlugins=&assumptions=%7B%7D">Babel Repl</a>:

```jsx
var Name = function Name() {
 return React.createElement(
        NameWrapper,
       {
         render: function render(name) {
                    return React.createElement(
                            "h2",
                            null,
                            "Hi, ",
                            name,
                            "!"
                    );
               }
         }
     );
};
```

As you can see, instead of passing down any value to the props i.e. render, we are passing a function here. So, when that function gets called we will get the ```<h2>``` element with the message “Hi, Mutasim!”.

As promised, we will now go ahead to an app applying what we have learnt about Render Props.
<hr>

- ## Conclusion 🖇

We saw how Render Props helped us avoid duplicate code and create a more robust app. Clearly, there is merit in applying Render Props to your next app. React’s latest context API uses render props. Even Apollo client uses it. Developers are increasingly accepting render props and all we are saying is you should definitely give it a try!