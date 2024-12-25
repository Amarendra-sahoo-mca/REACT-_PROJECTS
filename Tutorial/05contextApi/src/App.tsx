
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/usercontextProvider'

function App() {
  

  return (
    <UserContextProvider>
     <h1>useContext</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
