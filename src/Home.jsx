import React, { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);  // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 3;  // Posts per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/blogs');
        const result = await response.json();
        setData(result || []);  // Ensure result is an array
        setLoading(false);
        setError(false);
        console.log(result);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Calculate current items
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const currentItems = data.slice(firstIndex, lastIndex);  // Paginated data

  // Handle Pagination
  const handleNext = () => {
    if (currentPage < Math.ceil(data.length / postPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data...</div>;

  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>

      {/* Render Current Page Items */}
      <div className="blog-list">
        {currentItems.length ? (
          currentItems.map((blog) => (
            <div key={blog.id} className="item">
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <p>{blog.fullname}</p>
              <p>{blog.email}</p>
            </div>
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>

      {/* Pagination Buttons */}
      <div className="join grid grid-cols-2 mt-4">
        <button
          className="join-item btn btn-outline"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          className="join-item btn btn-outline"
          onClick={handleNext}
          disabled={currentPage === Math.ceil(data.length / postPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
