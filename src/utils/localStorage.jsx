const employees = [
  {
    id: 1,
    taskTitle: "Prepare Monthly Report",
    taskDescription: "Prepare and submit the financial report for September.",
    taskDate: "2024-10-31",
    assignTo: "John Doe",
    taskCategory: "Finance",
    email: "employee1@me.com",
    password: "123",
    status: {
      active: true,
      newTask: false,
      completed: false,
      failed: false,
    },
  },
  {
    id: 2,
    taskTitle: "Client Meeting",
    taskDescription: "Attend the quarterly meeting with XYZ Corp.",
    taskDate: "2024-10-28",
    assignTo: "Jane Smith",
    taskCategory: "Sales",
    email: "employee2@me.com",
    password: "123",
    status: {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
    },
  },
  {
    id: 3,
    taskTitle: "Website Update",
    taskDescription: "Update the company website with the latest news and events.",
    taskDate: "2024-10-25",
    assignTo: "Emily Brown",
    taskCategory: "IT",
    email: "employee3@me.com",
    password: "123",
    status: {
      active: false,
      newTask: false,
      completed: true,
      failed: false,
    },
  },
  {
    id: 4,
    taskTitle: "Product Design Review",
    taskDescription: "Review the new product design before production.",
    taskDate: "2024-11-05",
    assignTo: "David Lee",
    taskCategory: "Design",
    email: "employee4@me.com",
    password: "123",
    status: {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
    },
  },
  {
    id: 5,
    taskTitle: "Inventory Check",
    taskDescription: "Complete the monthly inventory check for the warehouse.",
    taskDate: "2024-10-29",
    assignTo: "Michael Scott",
    taskCategory: "Operations",
    email: "employee5@me.com",
    password: "123",
    status: {
      active: false,
      newTask: false,
      completed: false,
      failed: true,
    },
  },
];

  const admin = [{
      'id': 1,
      'email' : 'admin@me.com',
      'password' : '123'
  }];
  
  // Save this data to localStorage (if you want to store it locally)
  export const setLocalStorage = () => {
    localStorage.setItem('employeeTasks', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  }
  
  // Retrieve data from localStorage (when needed)
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin };
  }