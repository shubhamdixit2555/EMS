import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext, useState } from 'react';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null)  
  const data = useContext(AuthContext)
  console.log(data)

  const handleLogin = (email, password) => {
    if(email === 'admin@me.com' && password === '123'){
      setUser('admin')
    } else if(email === 'user@me.com' && password === '123'){
      setUser('employee')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <>
      <div className='px-4 md:px-8'>
        {!user ? (
          <Login handleLogin={handleLogin}/>
        ) : (
          user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />
        )}
      </div>
    </>
  )
}

export default App