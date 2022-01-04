# React redux setup

###[cheatsheet]

Disregard the folder structure and consider the following pointers:

- Make sure to install both libraries `npm install redux react-redux`

## Redux setup

- Set your [actions](https://github.com/patgarcia/react-redux-review/blob/a97beac6d3d9572ba6a44701d28e60782a24ea14/src/actions.js#L1) and [action creators](https://github.com/patgarcia/react-redux-review/blob/a97beac6d3d9572ba6a44701d28e60782a24ea14/src/actions.js#L5)
- Instantiate your [reducer](https://github.com/patgarcia/react-redux-review/blob/master/src/reducer.js) remembering to set an [initialState](https://github.com/patgarcia/react-redux-review/blob/a97beac6d3d9572ba6a44701d28e60782a24ea14/src/reducer.js#L3) and add a catch-all [return statment](https://github.com/patgarcia/react-redux-review/blob/a97beac6d3d9572ba6a44701d28e60782a24ea14/src/reducer.js#L15) for unmatched actions or errors
- Create your redux [store](https://github.com/patgarcia/react-redux-review/blob/master/src/store.js) with an optional enhancer that activates [the redux devtools extension](https://github.com/patgarcia/react-redux-review/blob/a97beac6d3d9572ba6a44701d28e60782a24ea14/src/store.js#L5)
- Setup a [redux provider](https://github.com/patgarcia/react-redux-review/blob/a97beac6d3d9572ba6a44701d28e60782a24ea14/src/index.js#L10) in `index.js`

## Within the component

### Custom hooks approach

- Create a custom hook to encapsulate the [action-dispatch binding logic](https://github.com/patgarcia/react-redux-review/blob/master/src/use-actions.js) and another [counter custom hook](https://github.com/patgarcia/react-redux-review/blob/master/src/use-counter.js) to also get the store and return it alongside the bound action creators.
- Call the counter hook inside the [Counter](https://github.com/patgarcia/react-redux-review/blob/a97beac6d3d9572ba6a44701d28e60782a24ea14/src/components/counter/Counter.jsx#L5) function component.

### Basic approach

Hook to the store and dispatch directly from the function component

```jsx
// Inside Counter.jsx

// ... at imports level
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, setVal } from './actions';
import { bindActionCreators } from 'redux';

// Inside function component
// const Counter = () => { ...
    // hook into the store
    const count = useSelector(store => store.count); // assuming count is a valid key
    // hook into redux dispatch
    const dispatch = useDispatch();

    // Inside Counter's rendering section
    // return (
    //  <div>
    // ...
    // Display count value from redux store
    <h2>{ count }</h2>

    // Dispatch action WITHOUT dispatch BINDING
    <button onClick={() => dispatch(increment())}>increment</button>

```

You can bind the action creators with `dispatch` for added abstraction

```jsx
    // bind action creators with dispatch
    const actions = bindActionCreators({ decrement, increment, setVal }, dispatch)

    // Dispatch action WITH dispatch BINDING
    <button onClick={() => actions.increment()}>increment</button>
```
