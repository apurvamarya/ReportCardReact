# Report Card Dashboard

A sleek, dark-themed React application to track, update, and manage student results in real-time. This project features a responsive dashboard that automatically calculates passing statuses and aggregates class statistics.

## Features

* **Real-time Statistics:** Instantly calculates and displays Total Students, Total Passed, Total Failed, and Average Marks.
* **Inline Editing:** Update student marks directly within the table, with all statistics and pass/fail badges recalculating automatically.
* **Add New Students:** A built-in form with validation to add new students to the roster (ensures marks are between 0 and 100).
* **Automated Grading:** Automatically assigns a **PASS** (green) or **FAIL** (red) badge based on a 40-mark threshold.
* **Modern UI:** A clean, responsive dark-mode interface built with custom CSS.

## Technologies Used

* **React.js:** Functional components and React Hooks (`useState`) for state management.
* **CSS3:** Custom styling featuring CSS Grid, Flexbox, and hover states.

## Getting Started

### Prerequisites
Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

### Installation & Setup

1. **Clone the repository or create a new React app:**
   ```bash
   cd ReportCardReact
   npm i