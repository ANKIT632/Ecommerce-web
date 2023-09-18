import React, { createContext } from 'react'

const AppContext=createContext();

const AppProvider = (props) => {

  return (
  <AppContext.Provider value={{myName:"ankit"}}>
       
       {props.App}
       {console.log(props.App)}

  </AppContext.Provider>
  )
}

export default AppProvider