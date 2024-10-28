# Expense Tracker

A simple and interactive expense tracker application built with React, allowing users to add, filter, and view expenses by year, with visual representations of expenses over time.

> **Note:** This project was developed with guidance and template code provided by the course, so some portions of the code may not be fully my own work.
## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Component Hierarchy](#component-hierarchy)
- [Technologies Used](#technologies-used)

---

## Features

- Add expenses with a title, amount, and date.
- Filter expenses by year.
- View expenses displayed by month in a chart.
- Responsive design with a clean and modern UI.

## Demo
Check out the live version of the app: [DEMO HERE](https://react-expenses-tracker-ngq3kf82s-eeludes-projects.vercel.app/)
![project](https://github.com/user-attachments/assets/a5381cf3-51e1-4875-b584-67c701ede73e)




## Installation

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Make sure you have Node.js and npm installed.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd expense-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000`.

## Usage

1. **Add a New Expense**: Enter the title, amount, and date for a new expense, then click "Add Expense".
2. **Filter Expenses by Year**: Use the dropdown to select the year you want to filter expenses by.
3. **View Monthly Expense Chart**: See a bar chart displaying the total expenses for each month of the selected year.

## Project Structure

<img width="2819" alt="react_ui_component_graph" src="https://github.com/user-attachments/assets/c493e551-2209-4459-a8c1-6cb4d6241078">

## Component Hierarchy
<img width="1334" alt="react_component_graph" src="https://github.com/user-attachments/assets/b5f8efe2-e741-4d9f-a22a-d2ad4daf7912">


**Data Flow:**
- `App` manages the state for expenses and passes expense data down to child components.
- `NewExpense` passes new expense data up to `App` to add it to the expenses array.
- `ExpensesFilter` passes the selected year up to `Expenses`, which then filters the expenses accordingly.
- `ExpensesChart` receives filtered expense data and visualizes it with `Chart` and `ChartBar`.

## Technologies Used

- **React** - For building UI components and managing state.
- **CSS** - For styling components.
- **JavaScript** - For component logic and event handling.
