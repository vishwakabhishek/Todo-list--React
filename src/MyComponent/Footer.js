import React from 'react'

export const Footer = () => {
  let FooterStyle={
    position:"relative",
   
    width:"100%"

  }
  return (
    <footer className="text-light py-3 bg-dark"   style={FooterStyle}>
    
      <p className='text-center'>    CopyRight &copy; MY TODO_List.com</p>
 
    </footer>
  )
}
