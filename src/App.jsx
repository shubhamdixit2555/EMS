/* eslint-disable no-unused-vars */

import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  // })

  const handleLogin = (email, password) => {
    if (authData && authData.admin.find((e) => {
        return e.email === email && e.password === password;
      })){
        const admin = authData.admin.find((e) => {
          return e.email === email && e.password === password;
        });
        setUser("admin");
        setLoggedInUserData(admin);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find((e) => {
        return e.email === email && e.password === password;
      });
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee" }));
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <>
      <div className="px-4 md:px-8">
        {!user ? <Login handleLogin={handleLogin} /> : ""}
        {user == "admin" ? (
          <AdminDashboard data={loggedInUserData} />
        ) : user == "employee" ? (
          <EmployeeDashboard data={loggedInUserData} />
        ) : null}
      </div>
    </>
  );
};

export default App;