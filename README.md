# Rubik's Cube Simulator & Solver (JavaScript)

This project is a simple **Rubik’s Cube simulator and solver** written in pure JavaScript.  
It is designed to demonstrate object-oriented programming, cube manipulation, scrambling, and solving logic, all in one place.

---

## ✨ Features

- **Object-Oriented Cube Representation**  
  Each face (`U, D, L, R, F, B`) is stored as a 3×3 array of stickers.

- **Face Rotations**  
  Supports all standard Rubik’s Cube moves (`U, U', U2, R, R', R2, F, F', F2, D, D', D2, L, L', L2, B, B', B2`).

- **Scrambler**  
  Generates a random sequence of moves to scramble the cube.

- **Solver (Simple)**  
  The solver guarantees a solution by reversing the scramble sequence (not optimal, but always works).

- **Step-by-Step Visualization**  
  Displays the cube after each move using the provided `getCubeSvg()` rendering function.

---

## 🖥️ How It Works

1. Start with a solved cube.  
2. Generate a random scramble (e.g., 10–20 moves).  
3. Apply scramble moves to mix up the cube.  
4. Automatically solve it by reversing the scramble.  
5. Show each move and the cube’s state along the way.

---

## 📂 Project Structure

- `rubiksCube.js` → Main implementation of the Cube class, scramble, solver, and demo.  
- `getCubeSvg()` → Provided helper function to render the cube visually (replace placeholder with your assignment’s version).  

---

## 🚀 Usage

### Option 1: Run in Browser
Include `rubiksCube.js` inside a `<script>` tag in an HTML page.  
Open the browser console to see the output and rendered cube.

### Option 2: Run with Node.js
```bash
node rubiksCube.js
