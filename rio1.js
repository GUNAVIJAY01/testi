// 1.use of Context 

//         ->Context helps readers understand what they otherwise wouldn't be able to comprehend.

// 2.what is use context and useReducer

//         ->useContext - a react hook, allowing functional components to take advantage of the context API. useReducer - a react hook, used in place of useState , generally for more complex state. dispatch - a function returned to us by useReducer , which sends action objects to the reducer function.

// 3.how to update state in context

//         -> To update state in context, use the `useState` hook within the context provider component and provide a function to update the state.

// 4.what is create context ? wrtite its purpose 

//         ->`createContext` is a function in React used to create a context object, which helps in sharing state and data across components efficiently.

// 5.context ,provider and context.Consumer

//         -> Context allows components to access shared data, the provider sets the context's value, and the consumer consumes it within nested components.

// 6.difference between and redux and context

//         ->Redux is a state management library, while Context is a feature in React for sharing state locally. Redux is more suitable for complex applications.

// 7. purpose of useSelector and useDispatch  hook

//         -> `useSelector` is for accessing specific parts of Redux store state, and `useDispatch` is used to dispatch actions in React Redux.


// 8. use of fragment 

//         ->Fragments in React allow grouping multiple elements without introducing extra parent divs in the DOM.

// 9.what is store in redux 

//         ->In Redux, a store is a centralized place to store application state.


// 10. how to read initial state and reducer funvtion in redux

//         -> Initial state is defined when creating a Redux store, and the reducer function specifies how state changes in response to actions.

// 11.what is scss and uses 

//         -> SCSS is a superset of CSS that adds features like variables and nesting for more maintainable and organized styles.

// 12.differentiate between scss and css 

//         -> SCSS is a preprocessor that extends CSS with features like variables and nesting, making stylesheets more modular and maintainable compared to traditional CSS.

// 13.why use go for lifecycle

//         ->Lifecycle methods in React allow you to perform actions at specific stages of a component's life, like componentDidMount for initial setup.

// 14.which one is better redux or context ?give Reason 

//         -> The choice between Redux and Context depends on the project's complexity; Redux is better for larger, more complex applications, while Context is simpler and suitable for smaller ones.


// 15.how many slice created in redux and how many store in redux

//         ->Redux can have multiple slices for different parts of the state, but typically, there's one store for the entire application.
