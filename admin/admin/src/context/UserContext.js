import React,{createContext,useState} from 'react';

export const BlogContext=createContext(null)



const UserContext = ({children}) => {
    const [blog,setBlog]=useState([])

    return (
      <BlogContext.Provider
      value={{
        blog,setBlog
      }}
      
      >
        {children}

      </BlogContext.Provider>
    );
};








export default UserContext;