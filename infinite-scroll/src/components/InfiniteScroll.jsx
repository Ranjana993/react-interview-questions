/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 20;

  // Mock data creation with 1000 items
  const createMockData = () => {
    const mockData = [];
    for (let i = 1; i <= 1000; i++) {
      mockData.push({
        id: i,
        title: `Item ${i}`,
        body: `This is the body content for item ${i}.`,
      });
    }
    return mockData;
  };

  const allData = createMockData();

  // Function to load data for the current page
  const loadData = () => {
    if (loading) return;
    setLoading(true);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const newData = allData.slice(startIndex, endIndex);

    // Simulate a delay for loading
    setTimeout(() => {
      setData((prevData) => [...prevData, ...newData]);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadData();
  }, [page]);

  const handleScroll = () => {
    // Check if scrolled to the bottom of the page
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 10
    ) {
      setPage((prevPage) => prevPage + 1); // Increment page
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full  ">
      <h1 className="text-2xl font-bold mb-4">Infinite Scroll  with 1000 Items</h1>
      <ul className='flex flex-wrap gap-2'>
        {
          data.map((item) => (
            <li key={item.id} className="mb-4 p-4 border rounded-md shadow-sm">
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p>{item.body}</p>
            </li>
          ))
        }
      </ul>
      {loading && <p className="text-center text-gray-500">Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
