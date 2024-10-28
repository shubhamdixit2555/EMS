
# Employee Management System (EMS)

The **Employee Management System (EMS)** is a web application built with React and Vite. It allows an administrator to create and assign tasks to employees, while employees can view and manage their assigned tasks. This project relies on browser local storage for data persistence, meaning data will be reset upon page reload.

## Features

- **Admin Functionality:**
  - Create and assign tasks to employees.
  - View task details and assign specific categories, descriptions, and deadlines.
- **Employee Functionality:**
  - View assigned tasks.
  - Mark tasks as complete (data saved in local storage but reset upon reload without a backend database).

## Tech Stack

- **Frontend:** React (with Vite for fast development)
- **Data Storage:** Browser local storage

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shubhamdixit2555/EMS.git
   ```

2. Navigate to the project directory:

   ```bash
   cd EMS
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the application.

## Usage

### Admin Access
1. Login with the provided admin credentials.
2. Navigate to the **Admin Dashboard** to create and assign tasks to employees.
3. Enter the task details and assign the task to an employee by name.

### Employee Access
1. Login with employee credentials to access the **Employee Dashboard**.
2. View assigned tasks and mark tasks as complete (note that changes are reset upon reload due to local storage limitations).

### Credentials

#### Admin
- **Email:** `admin@example.com`
- **Password:** `admin123`

#### Employees

| Employee  | Email            | Password |
|-----------|-------------------|----------|
| Arjun     | e1@me.com        | 123      |
| Sneha     | e2@me.com        | 123      |
| Ravi      | e3@me.com        | 123      |
| Priya     | e4@me.com        | 123      |
| Karan     | e5@me.com        | 123      |

## Notes

- **Local Storage Limitations:** Since EMS uses local storage instead of a backend, data will be reset upon page refresh. A backend implementation is recommended for data persistence.
- **Project Link:** [EMS on GitHub](https://github.com/shubhamdixit2555/EMS)

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed explanation.
