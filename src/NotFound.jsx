import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const NotFound = () => {
  const [redirect, setRedirect] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      
      setRedirect(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  // If redirect is true, navigate to the home page
  return redirect ? <Navigate to="/" /> : (
    <div className='flex-center' style={{ flexDirection: "column" }}>
      <h1>404 - Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <p>Shortly redirect to homapege</p>
    </div>
  );
}

export default NotFound;

