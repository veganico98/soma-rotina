import React from 'react'

const Footer = () => {
  return (
  <footer className="h-14 py-4 bg-linear-to-t bg-indigo-950">
      <div className="w-full max-w-screen-xl mx-auto">
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
          <span className="my-3 block text-sm text-blue-100 sm:text-center  dark:text-white">
            © 2025 <a href="http://localhost:5173/" className="hover:underline">Soma Rotina</a>. All Rights Reserved.</span>
      </div>
  </footer>
  )
}

export default Footer

