# ReportCard
 
A React app for tracking and managing student results with live inline editing, pass/fail status, and summary statistics.

## Application URL

https://report-card-react-apurvamarya.vercel.app/
 
## Features
 
- **Add students** — Enter a name and marks (0–100) to add a student to the list
- **Inline marks editing** — Update any student's marks directly in the table; pass/fail status updates instantly
- **Live stats** — Total students, passed, failed, and class average recalculate on every change
- **Input validation** — Catches empty names, non-numeric marks, and out-of-range values before they're added
## Project Structure
 
```
src/
├── ReportCard.jsx   # Main component (StudentRow, StatCard, ReportCard)
├── ReportCard.css   # Styles
└── data.js          # Initial student data
```
 
## Getting Started
 
### Prerequisites
 
- Node.js 16+
- npm or yarn
### Installation
 
```bash
git clone https://github.com/apurvamarya/ReportCardReact.git
cd ReportCardReact
npm install
```
 
### Running locally
 
```bash
npm run dev
```
 
Open [http://localhost:5173](http://localhost:5173) in your browser.
 
## Usage
 
### Adding a student
 
Fill in the name and marks fields and click **Add Student**. Marks must be a number between 0 and 100.
 
### Editing marks
 
Click directly into the marks field in the table and type a new value. The pass/fail badge and all stats update immediately.
 
### Pass/Fail threshold
 
A student **passes** if their marks are **≥ 40**. This can be changed in `ReportCard.jsx`:
 
```js
const isPassing = student.marks >= 40  // adjust threshold here
```
 
## Seeding initial data
 
Edit `src/data.js` to pre-populate the table with your own students:
 
```js
const initialData = [
  { name: "Alice", marks: 88 },
  { name: "Bob",   marks: 34 },
]
 
export default initialData
```
 
## Tech Stack
 
- [React](https://react.dev/) — UI and state management (`useState`)
- CSS — custom styling via `ReportCard.css`