import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState({ email: '', password: '', hobbies: [] });
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editUser, setEditUser] = useState({ email: '', password: '', hobbies: [] });

  const hobbyOptions = ['Reading', 'Gaming', 'Traveling', 'Cooking'];

  useEffect(() => {
    const storedList = localStorage.getItem('userList');
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userList', JSON.stringify(list));
  }, [list]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;
    const updatedHobbies = checked
      ? [...user.hobbies, value]
      : user.hobbies.filter((hobby) => hobby !== value);
    setUser({ ...user, hobbies: updatedHobbies });
  };

  const handleEditHobbyChange = (e) => {
    const { value, checked } = e.target;
    const updatedHobbies = checked
      ? [...editUser.hobbies, value]
      : editUser.hobbies.filter((hobby) => hobby !== value);
    setEditUser({ ...editUser, hobbies: updatedHobbies });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, user]);
    setUser({ email: '', password: '', hobbies: [] });
  };

  const handleDelete = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditUser(list[index]);
  };

  const handleSave = (index) => {
    const updatedList = [...list];
    updatedList[index] = editUser;
    setList(updatedList);
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="form-control w-100 mx-auto mt-3">
              <h2 className='text-start'>Sign-Up</h2>
              <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3 text-start">
                <label className="form-label d-block">Hobbies</label>
                {hobbyOptions.map((hobby) => (
                  <div key={hobby} className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="hobbies"
                      value={hobby}
                      checked={user.hobbies.includes(hobby)}
                      onChange={handleHobbyChange}
                    />
                    <label className="form-check-label">{hobby}</label>
                  </div>
                ))}
              </div>

              <button type="submit" className="btn btn-primary w-100 fw-bold">Submit</button>
            </form>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 mx-auto">
            <h3>User List</h3>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Hobbies</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {list.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">No users yet.</td>
                  </tr>
                ) : (
                  list.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {editIndex === index ? (
                          <input
                            type="email"
                            name="email"
                            value={editUser.email}
                            onChange={handleEditChange}
                            className="form-control"
                          />
                        ) : (
                          item.email
                        )}
                      </td>
                      <td>
                        {editIndex === index ? (
                          <input
                            type="text"
                            name="password"
                            value={editUser.password}
                            onChange={handleEditChange}
                            className="form-control"
                          />
                        ) : (
                          item.password
                        )}
                      </td>
                      <td>
                        {editIndex === index ? (
                          hobbyOptions.map((hobby) => (
                            <div key={hobby} className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={hobby}
                                checked={editUser.hobbies.includes(hobby)}
                                onChange={handleEditHobbyChange}
                              />
                              <label className="form-check-label">{hobby}</label>
                            </div>
                          ))
                        ) : (
                          item.hobbies.join(', ')
                        )}
                      </td>
                      <td>
                        {editIndex === index ? (
                          <>
                            <button
                              className="btn btn-success btn-sm me-2"
                              onClick={() => handleSave(index)}
                            >
                              Save
                            </button>
                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={handleCancel}
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="btn btn-warning btn-sm me-2"
                              onClick={() => handleEdit(index)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDelete(index)}
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
