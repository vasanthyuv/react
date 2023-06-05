import React from 'react'

const Footer = () => {
    const year = new Date();
  return (
    <footer>Copyright &copy; {year.getUTCFullYear()}</footer>
  )
}

export default Footer