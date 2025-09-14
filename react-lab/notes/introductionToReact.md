# 🌟 Introduction to React

## 📌 What is React?
* React is **not a language**  
* React is **not a framework**  
* React is **not just a technology**  

👉 React is a **JavaScript library** created by **Facebook in 2013** and later made **open-source in 2015**.  
It is mainly used for building **user interfaces (UI)**, especially for **single-page applications (SPAs)**.

---

## 📌 Virtual DOM in React
* The **Virtual DOM** is an **exact copy (or blueprint)** of the Real DOM.  
* Whenever you **change or update** something on a website, React doesn’t repaint the whole page.  
* Instead, it **re-renders only the changed parts** of the DOM.  
* This makes React **fast, efficient, and lightweight**.

✨ In simple words:  
Virtual DOM helps React update only where the **change is necessary** instead of repainting everything.

---

## 📌 Why Did Facebook Create React?
* On large websites, **a lot of changes happen** frequently.  
* This caused unnecessary **repaints**, even for elements that were not updated.  
* As a result, websites became **slow and heavy**.  
* To solve this problem, **Facebook created React** and introduced the **Virtual DOM**.

---

## 📌 React System Setup
Install the following in **VS Code**:
- Tabnine extension  
- Prettier  
- Node.js  
- Vite or Create-React-App  

---

## 📌 Folder Structure in React
### 1. node_modules/
- Contains all required dependencies/packages

### 2. public/
- Contains static assets (images, videos, CSS, etc.)

### 3. src/
- Contains the main application code

### Example files:
- App.css → CSS file
- App.jsx → Main React component
---

## 📌 JSX in React

- JSX looks similar to HTML, but with superpowers ✨
- It allows us to write JavaScript inside HTML-like code.
- We can perform calculations and logic directly within JSX.
- Example:
 ```bash
 <h1>Hey {2 + 2}</h1>
  ```
- Output:
   `Hey 4`
