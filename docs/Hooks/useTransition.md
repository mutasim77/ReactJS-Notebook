---
id: react-hook-useTransation
title: useTransation
description: Lets you update the state without blocking the UI.
sidebar_position: 7
---


*useTransition* is a React Hook that lets you update the state without blocking the UI.

The useTransition hook allows us to specify some state updates as not as important. These state updates will be executed in parallel with other state updates, but the rendering of the component will not wait for these less important state updates.

```jsx
function App() {
  const [name, setName] = useState("")
  const [list, setList] = useState(largeList)
  const [isPending, startTransition] = useTransition()

  function handleChange(e) {
    setName(e.target.value)
    startTransition(() => {
      setList(largeList.filter(item => item.name.includes(e.target.value)))
    })
  }

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        list.map(item => <ListComponent key={item.id} item={item} />)
      )}
    </>
  )
}
```

Calling the *useTransition* hook returns an array with the first value being an *isPending* variable and the second value being the *startTransition* function. The *isPending* variable simply returns true while the code inside the *startTransition* hook is running. Essentially, this variable is true when the slow state update is running and false when it is finished running. The *startTransition* function takes a single callback and this callback just contains all the code related to the slow state update including the setting of the state.

In our case we are wrapping *setList* in our *startTransition* function which tells React that our *setList* state update is of low importance. This means that as soon as all of our normal state updates are finished that the component should rerender even if this slow state update is not finished. Also, if a user interacts with your application, such as clicking a button or typing in an input, those interactions will take higher priority than the code in the *startTransition* function. This ensures that even if you have really slow code running it won’t block your user from interacting with the application.

In conclusion, the *useTransition* hook makes working with slow, computationally intense state updates so much easier since now we can tell React to prioritize those updates at a lower level to more important updates which makes your application seem much more performant to users.

