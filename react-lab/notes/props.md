# 🌟 React Notes: Props & Conditional Rendering

This document contains simple, handwritten-style notes converted into a structured **README.md** format.  
It covers two important concepts in React: **Props** and **Conditional Rendering**.

---

## 📌 Props in React

- **Props** are like **parameters** to a function.  
- They allow us to pass data from one component to another, making components **reusable** and **dynamic**.

### 🔹 Props in React
1. Traditional Method (Not Reusable)
   ```bash
    function MyHeader() {
    return <h1>Hello World</h1>;
    }
   ```

- Note: This method is not generic because it always returns the same text.

2. Generic Props (Reusable)
 ```bash
function MyHeader(props) {
  return <h1>{props.title}</h1>;
}
```

Usage:
```bash
<MyHeader title="This is my Heading" />
```

- Now the component is reusable with different title values.

## 📌 Conditional Rendering in React
In React, conditional rendering means showing different UI elements based on a condition (true/false).

🔹 Example:
```bash
function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome Home!</h1>;
  } else {
    return <h1>Please log in</h1>;
  }
}
```

## 🔹 Ways to Add Conditions

1. if-else statement
2. Ternary operator (? :)
3. Show or hide using &&

- Props = Parameters for React components. They make components dynamic and reusable.
- Conditional Rendering = Displaying UI based on conditions (true/false).
- These two concepts are fundamental building blocks of React and are used in almost every project.
