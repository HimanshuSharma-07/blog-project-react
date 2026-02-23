import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Menu, X } from "lucide-react"

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Home', slug: "/", active: true }, 
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "My Posts", slug: "/my-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ]

  return (
    <header className="w-full bg-white border-b-4  border-background-color">
  <Container>
    <nav className="flex items-center justify-between h-16">

      <div className='w-[20%] flex justify-around items-center'>
        {/* Logo */}
      <Link to="/" className="flex items-center gap-2 font-semibold text-gray-900">
        <Logo width="36px" />
      </Link>
      </div>

      <div className='sm:w-[30%] md:w-[40%]'>
        {/* Desktop Nav */}
      <ul className="hidden sm:flex justify-center  ml-auto items-center gap-8 text-sm font-medium text-gray-700">
        {navItems.map(item =>
          item.active && (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.slug)}
                className="
                  cursor-pointer
                  relative py-1
                  hover:text-background-color
                  after:absolute after:left-0 after:-bottom-1
                  after:h-0.5 after:w-0 after:bg-background-color
                  hover:after:w-full after:transition-all
                "
              >
                {item.name}
              </button>
            </li>
          )
        )}
        {authStatus && <LogoutBtn />}
      </ul>

      {/* Mobile Menu */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="ml-auto sm:hidden text-gray-700  flex items-end"
      >
        {open ? <X /> : <Menu />}
      </button>
      </div>

      {/* Mobile Dropdown */}
{open && (
  <div
    className="
      absolute top-16 right-4
      w-44
      bg-white
      border border-gray-200
      rounded-xl
      shadow-lg
      sm:hidden
      z-50
      overflow-hidden
    "
  >
    {navItems.map(item =>
      item.active && (
        <button
          key={item.name}
          onClick={() => {
            navigate(item.slug)
            setOpen(false)
          }}
          className="
            w-full px-4 py-3
            text-sm text-gray-700
            text-center
            hover:bg-background-color/10
            
          "
        >
          {item.name}
        </button>
      )
    )}

    {authStatus && (
      <div className="border-t border-gray-200 px-4 py-3">
        <LogoutBtn />
      </div>
    )}
  </div>
)}

    </nav>
  </Container>

</header>
  )
}

export default Header