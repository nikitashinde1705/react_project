import MyContext from "./MyContext";


const MessageProvider = ({children}) => {
    const message = "Welcome to Pune";
  return (
    <div>

        <MyContext.Provider value={message}>
            {children}
        </MyContext.Provider>
      
    </div>
  )
}

export default MessageProvider
