import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [employee, setEmployee] = useState({});
  const [empData, setEmpData] = useState([]);
  const [empCheck, setEmpCheck] = useState([]);
  const [view, setView] = useState('form');

  useEffect(() => {
    const saved = localStorage.getItem('empData');
    if (saved) {
      setEmpData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('empData', JSON.stringify(empData));
  }, [empData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setEmpCheck(prev => {
      if (checked) return [...prev, value];
      else return prev.filter(item => item !== value);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmp = {
      ...employee,
      shift: empCheck,
      id: Date.now()
    };
    setEmpData(prev => [...prev, newEmp]);
    setEmployee({});
    setEmpCheck([]);
    setView('data');
  };

  const onEdit = (id) => {
    const toEdit = empData.find(emp => emp.id === id);
    if (toEdit) {
      setEmployee(toEdit);
      setEmpCheck(toEdit.shift);
      setEmpData(empData.filter(emp => emp.id !== id));
      setView('form');
    }
  };

  const onDelete = (id) => {
    const updated = empData.filter(emp => emp.id !== id);
    setEmpData(updated);
  };

  return (
    <div className="app-container">
      <nav className="navbar navbar-expand-lg py-3 navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Employee Manager</a>
          <div className="d-flex">
            <button
              className={`btn btn-outline-light me-2 ${view === 'form' ? 'btn-primary' : ''}`}
              onClick={() => setView('form')}
            >
              <i className="bi bi-ui-checks-grid me-1"></i> Form
            </button>
            <button
              className={`btn btn-outline-light ${view === 'data' ? 'btn-success' : ''}`}
              onClick={() => setView('data')}
            >
              <i className="bi bi-table me-1"></i> View Data
            </button>
          </div>
        </div>
      </nav>

      <div className="container mt-4 py-5 w-100">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card shadow-lg rounded-4 mx-auto" style={{ width: 1000 }}>
              <div className="card-container rounded-4 text-white p-3">

                {view === 'form' && (
                  <>
                    <h3 className="text-center text-dark mb-4">Employee Form</h3>
                    <form className="form-control text-dark border-0 bg-transparent" method="post" onSubmit={handleSubmit}>
                      <div className="mb-3 text-start">
                        <label className="form-label">Employee Name</label>
                        <input
                          type="text"
                          name="ename"
                          onChange={handleChange}
                          className="form-control"
                          value={employee.ename || ''}
                          required
                        />
                      </div>

                      <div className="mb-3 text-start">
                        <label className="form-label">Salary</label>
                        <input
                          type="number"
                          name="salary"
                          onChange={handleChange}
                          className="form-control"
                          value={employee.salary || ''}
                          required
                        />
                      </div>

                      <div className="mb-3 text-start d-flex gap-4">
                        {["First", "Second", "Third"].map(shift => (
                          <div className="form-check" key={shift}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="shift"
                              value={shift}
                              onChange={handleCheckbox}
                              checked={empCheck.includes(shift)}
                            />
                            <label className="form-check-label">{shift}</label>
                          </div>
                        ))}
                      </div>

                      <div className="mb-3 d-flex gap-3">
                        {["Male", "Female"].map(gender => (
                          <div className="form-check" key={gender}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              value={gender}
                              onChange={handleChange}
                              checked={employee.gender === gender}
                              required
                            />
                            <label className="form-check-label">{gender}</label>
                          </div>
                        ))}
                      </div>

                      <div className="mb-3 text-start">
                        <label className="form-label">City</label>
                        <select
                          className="form-select"
                          name="city"
                          onChange={handleChange}
                          value={employee.city || ''}
                          required
                        >
                          <option value="" disabled>Select city</option>
                          <option value="Surat">Surat</option>
                          <option value="Navsari">Navsari</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Ahmedabad">Ahmedabad</option>
                        </select>
                      </div>

                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </>
                )}

                {view === 'data' && (
                  <>
                    {view === 'data' && (
                      <div className="container-fluide">
                        <div className="row justify-content-center">
                          <div className="col-md-12">
                            <div className="card-header bg-transparent bg-dark text-white rounded-top-4 text-center">
                              <h4 className="mb-0">📋 Employee Data</h4>
                            </div>
                            <div className="card-body bg-light rounded-bottom-4">
                              {empData.length === 0 ? (
                                <p className="text-center text-dark fw-bold">No employee data available.</p>
                              ) : (
                                <div style={{ overflowX: 'auto', maxHeight: '400px', msOverflowStyle: 'none', scrollbarWidth: 'none'}}>
                                  <table className="table table-hover text-center align-middle table-striped border">
                                    <thead className="table-dark">
                                      <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Salary</th>
                                        <th>Shifts</th>
                                        <th>Gender</th>
                                        <th>City</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {empData.map((emp, index) => (
                                        <tr key={emp.id}>
                                          <td>{index + 1}</td>
                                          <td className="text-capitalize">{emp.ename}</td>
                                          <td>₹ {emp.salary}</td>
                                          <td>{emp.shift.join(', ')}</td>
                                          <td>{emp.gender}</td>
                                          <td>{emp.city}</td>
                                          <td>
                                            <button
                                              className="btn btn-sm btn-outline-primary me-2"
                                              onClick={() => onEdit(emp.id)}
                                              title="Edit"
                                            >
                                              <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button
                                              className="btn btn-sm btn-outline-danger"
                                              onClick={() => onDelete(emp.id)}
                                              title="Delete"
                                            >
                                              <i className="bi bi-trash3"></i>
                                            </button>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>

                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
