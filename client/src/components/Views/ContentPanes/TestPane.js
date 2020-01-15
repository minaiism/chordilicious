import React from 'react'
import { useUserContext } from '../../Context/Context';

const TestPane = () => {
  // use your own hook to load the data you need

  const { user, loading, error } = useUserContext();


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {
        books &&
        books.length > 0 &&
        books.map(book => <div key={book.id}>{book.title}</div>)
      }
    </div>
  )
};

export default TestPane