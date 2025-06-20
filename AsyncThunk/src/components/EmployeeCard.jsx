import React from "react";
import { FaUserCircle } from "react-icons/fa";   // optional fallback icon

/**
 * Pretty Bootstrap card for a single employee.
 * Pass { name, role, bio, avatar } in `employee`.
 */
function EmployeeCard({ employee }) {
    return (
        <div className="card h-100 border-0 shadow rounded-4 overflow-hidden">
            {/* 2‑column layout: avatar on the left, details on the right */}
            <div className="row g-0 h-100">
                {/* Avatar / placeholder */}
                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center bg-light">
                    {employee.avatar ? (
                        <img
                            src={employee.avatar}
                            alt={employee.name}
                            className="img-fluid rounded-circle p-3"
                            style={{ width: "110px", height: "110px", objectFit: "cover" }}
                        />
                    ) : (
                        <FaUserCircle size={110} className="text-secondary" />
                    )}
                </div>

                {/* Text + actions */}
                <div className="col-12 col-md-8 d-flex flex-column">
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-bold mb-1">{employee.name}</h5>
                        <h6 className="card-subtitle mb-3 text-muted">
                            {employee.role || "Employee"}
                        </h6>

                        <p className="card-text text-body small">{employee.bio}</p>

                        {/* Push buttons to the bottom */}
                        <div className="mt-auto d-flex gap-2">
                            <button className="btn btn-sm btn-outline-primary">Details</button>
                            <button className="btn btn-sm btn-primary">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeCard;
