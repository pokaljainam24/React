import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../futures/Todo/todoSlice';

function UserData() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    return (
        <div>
            <h2 className="mb-3">User List</h2>

            {users.length === 0 ? (
                <p></p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th><th>Name</th><th>Email</th><th>Password</th><th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.password}</td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => dispatch(removeUser(idx))}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default UserData;
