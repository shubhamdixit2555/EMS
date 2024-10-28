# Employee Management System (EMS)

## Overview

The Employee Management System (EMS) is a React-based application designed for managing tasks assigned to employees. The project features a role-based login system with separate dashboards for administrators and employees. Tasks can be created by an admin, assigned to employees, and viewed by each respective employee. EMS is built using **React** with **Vite** for faster development and optimized performance.

This application is currently configured to operate using **local storage** rather than a backend database, which means data will not persist if the local storage is cleared or if accessed across different devices.

## Features

- **Admin Dashboard**
  - Create tasks with a title, description, category, due date, and employee assignment.
  - View a list of tasks, categorized as active, new, completed, and failed.
  
- **Employee Dashboard**
  - Login and view assigned tasks.
  - See the status of each task (active, new, completed, or failed).
  - Update the task's status as completed or mark it as failed.

## Admin and Employee Credentials

### Admin Login
- **Email**: `admin@ems.com`
- **Password**: `admin123`

### Employee Logins
| Employee Name | Email          | Password |
|---------------|----------------|----------|
| Arjun         | e1@me.com      | 123      |
| Sneha         | e2@me.com      | 123      |
| Ravi          | e3@me.com      | 123      |
| Priya         | e4@me.com      | 123      |
| Karan         | e5@me.com      | 123      |

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Employee-Management-System.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Employee-Management-System
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at `http://localhost:5173`.

## Project Structure

- **Admin Dashboard**: Accessible by logging in with admin credentials. Allows task creation, assignment, and status tracking for each employee.
- **Employee Dashboard**: Allows employees to view and update their tasks. Tasks are managed via local storage, meaning changes will persist only in the browser where the task was created.

## Technologies Used

- **React** for building the user interface.
- **Vite** for fast development builds.
- **Local Storage** for temporary data storage.

## How It Works

1. **Task Creation**: Admin can create a task in the Admin Dashboard, specifying the employee the task should be assigned to. The task data is stored in local storage.
2. **Task Viewing**: Each employee logs into the Employee Dashboard to view their tasks. Tasks are retrieved from local storage upon login.
3. **Task Status Update**: Employees can update the task status (completed or failed). This update reflects only in local storage.

## Limitations

Since the EMS application is built with local storage:
- **Data Persistence**: Task data will not persist across devices or browsers and may be lost if local storage is cleared.
- **No Real-Time Updates**: Changes are visible only after they are stored and cannot be synced across multiple users or devices.

For a fully functional system with persistent data, integrating a backend with a database is recommended.

## Future Development (To Be Implemented)

- Backend database for persistent data storage.
- Role-based access control.
- Notifications for task assignments and updates.
- Advanced task filtering and sorting.
