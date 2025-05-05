# 📖 CODEDOC: Breakdown of script.js

## 👩‍💻 `Quiz` Class

Encapsulates all logic in a modular structure.

### ✅ Constructor
- `this.quizData`: source of questions
- Initializes current index and score
- Caches DOM elements
- Binds event listeners

---

### 🧠 Method: `start()`
- Hides the start screen
- Shows quiz interface
- Calls `loadQuestion()`

---

### 🧠 Method: `loadQuestion()`
- Loads question text and options dynamically
- Uses `innerHTML` cleanup to avoid stale options
- Loops over options array

---

### 🧠 Method: `submit()`
- Validates if an option is selected
- Compares answer
- Updates score
- Loads next question or calls `showResults()`

---

### 🧠 Method: `showResults()`
- Hides quiz
- Shows result screen with score summary

---

### 🧠 Method: `restart()`
- Resets index and score
- Returns to start screen

---

## 🧼 Best Practices Used
- No global pollution
- Separation of concerns (data, logic, UI)
- Clear function names and flows
- Modular ES6 structure for future enhancements



