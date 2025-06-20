import React, { useState } from 'react';

const App = () => {
  const [user, setUser] = useState({ email: '', password: '', image: '' });
  const [usersData, setUsersData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prev) => ({ ...prev, image: reader.result }));
      };
      if (files[0]) reader.readAsDataURL(files[0]);
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedUsers = [...usersData];
      updatedUsers[editIndex] = user;
      setUsersData(updatedUsers);
      setEditIndex(null);
    } else {
      setUsersData([...usersData, user]);
    }
    setUser({ email: '', password: '', image: '' });
  };

  const handleEdit = (index) => {
    setUser(usersData[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filteredUsers = usersData.filter((_, i) => i !== index);
    setUsersData(filteredUsers);
    if (editIndex === index) {
      setUser({ email: '', password: '', image: '' });
      setEditIndex(null);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Profile With Img</h2>
      <form onSubmit={handleSubmit} className="col-md-6 mx-auto border p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            value={user.email}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="file"
            name="image"
            className="form-control"
            onChange={handleChange}
            accept="image/*"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {editIndex !== null ? 'Update Profile' : 'Add Profile'}
        </button>
      </form>

      <hr className="my-5" />
      <h2 className="text-center mb-4">Profile Details With Img</h2>

      <div className="row">
        {usersData.map((u, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              {u.image && <img src={u.image} className="card-img-top" alt="Profile" height="200px" />}
              <div className="card-body">
                <h5 className="card-title">{u.email}</h5>
                <p className="card-text">Password: {u.password}</p>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
