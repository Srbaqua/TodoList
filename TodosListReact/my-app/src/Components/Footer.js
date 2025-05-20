import React from 'react'
// import './footer.css'
export default function Footer() {
  let footerStyle = {
    position:"relative",
    top:"8vh",
    width:"100%"
}
  
  return (

    <footer className = "bg-dark text-light text-center" style = {footerStyle}>
        <p>Copyright &copy; 2025 Todos List App</p>
    </footer>
  )
}
