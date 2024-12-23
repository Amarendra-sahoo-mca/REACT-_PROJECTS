import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Github, { githubloader } from './components/Github.tsx'

const router = createBrowserRouter([
  {
    path: '/amar',
    element : <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
      ,
      {
        path: 'contact/:id',
        element: <Contact />
      }
      ,
      {
        loader: githubloader,
        path: 'github',
        element: <Github />
      }
    ]

  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
