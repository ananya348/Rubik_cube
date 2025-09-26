
// rubiksCube.js

// === Cube Representation ===
class Cube {
  constructor() {
    this.faces = {
      U: Array(9).fill("w"), // white
      D: Array(9).fill("y"), // yellow
      L: Array(9).fill("o"), // orange
      R: Array(9).fill("r"), // red
      F: Array(9).fill("g"), // green
      B: Array(9).fill("b"), // blue
    };
  }

  // Convert cube into string for rendering
  toString() {
    return (
      this.faces.U.join("") +
      this.faces.R.join("") +
      this.faces.F.join("") +
      this.faces.D.join("") +
      this.faces.L.join("") +
      this.faces.B.join("")
    );
  }

  // Rotate a face 90° clockwise
  rotateFaceCW(face) {
    const f = this.faces[face];
    this.faces[face] = [
      f[6], f[3], f[0],
      f[7], f[4], f[1],
      f[8], f[5], f[2],
    ];
  }

  // Apply move (e.g. "U", "U'", "U2")
  move(mv) {
    if (mv.endsWith("2")) {
      this._applyBasicMove(mv[0]);
      this._applyBasicMove(mv[0]);
    } else if (mv.endsWith("'")) {
      this._applyBasicMove(mv[0]);
      this._applyBasicMove(mv[0]);
      this._applyBasicMove(mv[0]);
    } else {
      this._applyBasicMove(mv[0]);
    }
  }

  // --- Core move implementations ---
  _applyBasicMove(face) {
    switch (face) {
      case "U": this._moveU(); break;
      case "D": this._moveD(); break;
      case "L": this._moveL(); break;
      case "R": this._moveR(); break;
      case "F": this._moveF(); break;
      case "B": this._moveB(); break;
    }
  }

  _moveU() {
    this.rotateFaceCW("U");
    const { F, R, B, L } = this.faces;
    [F[0],F[1],F[2], R[0],R[1],R[2], B[0],B[1],B[2], L[0],L[1],L[2]] =
    [R[0],R[1],R[2], B[0],B[1],B[2], L[0],L[1],L[2], F[0],F[1],F[2]];
  }

  _moveD() {
    this.rotateFaceCW("D");
    const { F, L, B, R } = this.faces;
    [F[6],F[7],F[8], L[6],L[7],L[8], B[6],B[7],B[8], R[6],R[7],R[8]] =
    [L[6],L[7],L[8], B[6],B[7],B[8], R[6],R[7],R[8], F[6],F[7],F[8]];
  }

  _moveL() {
    this.rotateFaceCW("L");
    const { U, F, D, B } = this.faces;
    [U[0],U[3],U[6], F[0],F[3],F[6], D[0],D[3],D[6], B[8],B[5],B[2]] =
    [B[8],B[5],B[2], U[0],U[3],U[6], F[0],F[3],F[6], D[0],D[3],D[6]];
  }

  _moveR() {
    this.rotateFaceCW("R");
    const { U, F, D, B } = this.faces;
    [U[2],U[5],U[8], F[2],F[5],F[8], D[2],D[5],D[8], B[6],B[3],B[0]] =
    [F[2],F[5],F[8], D[2],D[5],D[8], B[6],B[3],B[0], U[2],U[5],U[8]];
  }

  _moveF() {
    this.rotateFaceCW("F");
    const { U, R, D, L } = this.faces;
    [U[6],U[7],U[8], R[0],R[3],R[6], D[2],D[1],D[0], L[8],L[5],L[2]] =
    [L[8],L[5],L[2], U[6],U[7],U[8], R[0],R[3],R[6], D[2],D[1],D[0]];
  }

  _moveB() {
    this.rotateFaceCW("B");
    const { U, L, D, R } = this.faces;
    [U[0],U[1],U[2], L[0],L[3],L[6], D[8],D[7],D[6], R[8],R[5],R[2]] =
    [R[8],R[5],R[2], U[0],U[1],U[2], L[0],L[3],L[6], D[8],D[7],D[6]];
  }
}

// === Scrambler ===
function generateScramble(n = 20) {
  const moves = ["U","U'","U2","R","R'","R2","F","F'","F2","D","D'","D2","L","L'","L2","B","B'","B2"];
  let seq = [];
  for (let i = 0; i < n; i++) {
    seq.push(moves[Math.floor(Math.random() * moves.length)]);
  }
  return seq;
}

// === Solver (reverse scramble) ===
function invertMove(m) {
  if (m.endsWith("'")) return m.replace("'", "");
  if (m.endsWith("2")) return m;
  return m + "'";
}

function solve(scramble) {
  return scramble.slice().reverse().map(invertMove);
}

// === Demo Runner ===
function runDemo() {
  let cube = new Cube();
  console.log("Solved Cube:");
  console.log(getCubeSvg(cube.toString()));

  // Scramble
  let scramble = generateScramble(10);
  console.log("Scramble:", scramble.join(" "));
  scramble.forEach(m => cube.move(m));
  console.log("Scrambled Cube:");
  console.log(getCubeSvg(cube.toString()));

  // Solve
  let solution = solve(scramble);
  console.log("Solution Steps:", solution.join(" "));
  solution.forEach((m, i) => {
    cube.move(m);
    console.log(`Step ${i+1}: ${m}`);
    console.log(getCubeSvg(cube.toString()));
  });
}

// === Placeholder for rendering ===
function getCubeSvg(stateString) {
  // Provided by assignment. Here is a placeholder.
  return `[Cube SVG of ${stateString}]`;
}

// Run the demo
runDemo();
