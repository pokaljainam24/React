import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './futures/employee/employeeSlice';
import EmployeeCard from './components/EmployeeCard';

function App() {
  const dispatch = useDispatch();
  const { employees, isLoading, isError } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) return <p className="text-center mt-5">Loading…</p>;
  if (isError) return <p className="text-center mt-5 text-danger">Something went wrong 😞</p>;

  return (
    <div className="container py-4">
      <button
        className="btn btn-primary mb-4"
        onClick={() => dispatch(fetchData())}
      >
        Reload employees
      </button>

      {/* Bootstrap grid of cards */}
      <div className="row g-4">
        {employees.slice(0, 20).map((emp) => (   // Show only first 20 for better layout
          <div className="col-12 col-sm-6 col-md-4 col-lg-12" key={emp.id}>
            <EmployeeCard
              employee={{
                name: emp.title,
                role: `Album ID: ${emp.albumId}`,
                bio: `Photo ID: ${emp.id}`,
                avatar: emp.thumbnailUrl,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
