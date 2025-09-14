# 📝 Todo App – My First React Project

This is my very first project in **React JS**.  
The main goal was to understand how React works, how to create components, and also how to upload a project on **GitHub** without errors.  

---

## 🚀 How I Created the Project

1. First, I went to the folder path where I wanted to create the project.  
   Example:  
   ```bash
   cd/react-lab/project
   
2. Then I ran the command:
   ```bash
   npx create-react-app project_name

3. After the project was created, I removed all the default code from App.js so I could start fresh.

## 📂 Project Structure (Simple View)
    ```bash
       src/
       ┣ components/
       ┃ ┗ Header.jsx
       ┣ App.js
       ┗ index.js

       
## steps I followed for components 

- I created separate component files
- Exported all components
- Imported them back into App.js
- Finally, App.js renders inside index.js

## ⚡ Problems I Faced While Uploading to GitHub
 
 ### Problem 1: Line Ending Warning
 
 when I tried git add . I got warnings about line endings (Windows vs Linux).
- Why it happens:
    On Linux/Mac → files end with LF (Line Feed)
    On Windows → files end with CRLF (Carriage Return + Line Feed)

- Solution:
Inside repo:
   ```bash
   git config core.autocrlf true

Or global fix:
   
    git config --global core.autocrlf true

Or just ignore warning:
    ```bash
     git config core.safecrlf false
     ```

### Problem 2: Push Rejected

After fixing line ending warnings, when I ran:
```bash
git push origin main
```

I got an error:
`failed to push some refs → rejected`

- **Reason:** The GitHub repo already had some commits that my local repo didn’t.

- **Fix:**

  Fetch latest changes:
  ```bash
  git fetch origin
  ```

  Merge GitHub’s main into my local main:
  ```bash
  git pull origin main
  ```
  (If editor opens → type commit message → `:wq`)

  Finally push again:
  ```bash
  git push origin main
  ```

✅ Project uploaded successfully.

---

## 🔄 Reusability (Making Components Generic)

At first, I was writing the same component multiple times.  
To make it generic (reusable), I learned to use props.

**Example:**

**TodoItem.jsx**
```javascript
function TodoItem(props) {
  return <li>{props.task}</li>;
}

export default TodoItem;
```

**App.js**
```javascript
<TodoItem task="Learn React" />
<TodoItem task="Build Todo App" />
<TodoItem task="Upload to GitHub" />
```

Now the same component can be reused with different data.

---

## 🎯 What I Learned

- How to create a React project from scratch
- How to create, export, and import components
- How App.js connects with index.js
- Fixed GitHub errors (line endings + rejected push)
- Learned about props to reuse components

---

## 🛠️ How to Run the Project Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/todoieApp.git
   cd todoieApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000) in browser.

---

## ✨ Features

- Add new todo items
- Mark tasks as complete/incomplete
- Simple, clean UI
- Component-based structure for easy maintenance

---
✨ This Todo App may be simple, but it gave me a strong foundation in React + GitHub workflow.
