import React from 'react';

function AcademicDetails() {
    return (
        <>
            <div className="card shadow-sm rounded mb-4">
                <div className="card-body">
                    <h5 className="card-title text-muted fw-bold mb-4">Academic Details</h5>

                    <div className="mb-3 d-flex align-items-start gap-3">
                        <i className="bi bi-building fs-5 text-secondary"></i>
                        <div>
                            <div className="text-danger fw-semibold small">Branch</div>
                            <div className="text-muted">Red and White Education Private Limited-Navsari</div>
                        </div>
                    </div>

                    <div className="mb-3 d-flex align-items-start gap-3">
                        <i className="bi bi-hash fs-5 text-secondary"></i>
                        <div>
                            <div className="text-danger fw-semibold small">GR Number</div>
                            <div className="text-muted">7432</div>
                        </div>
                    </div>

                    <div className="mb-3 d-flex align-items-start gap-3">
                        <i className="bi bi-laptop fs-5 text-secondary"></i>
                        <div>
                            <div className="text-danger fw-semibold small">Course Name</div>
                            <div className="text-muted">Full Stack Development</div>
                        </div>
                    </div>

                    <div className="mb-3 d-flex align-items-start gap-3">
                        <i className="bi bi-person-badge fs-5 text-secondary"></i>
                        <div>
                            <div className="text-danger fw-semibold small">Faculty Name</div>
                            <div className="text-muted">Dhaval Leelawala</div>
                        </div>
                    </div>

                    <div className="mb-3 d-flex align-items-start gap-3">
                        <i className="bi bi-clock fs-5 text-secondary"></i>
                        <div>
                            <div className="text-danger fw-semibold small">Batch Time</div>
                            <div className="text-muted">10.30</div>
                        </div>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                        <i className="bi bi-percent fs-5 text-secondary"></i>
                        <div>
                            <div className="text-danger fw-semibold small">Assessment Percentage</div>
                            <div className="text-muted">76.98%</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-muted rounded p-4 bg-white shadow-sm mb-4">
                <form method="POST" action="" noValidate>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="text-muted fw-bold mb-0">Job Opportunity</h5>
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                            aria-label="Edit"
                        >
                            {/* Bootstrap Icon Edit */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-pencil"
                                viewBox="0 0 16 16"
                            >
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-9.793 9.793a.5.5 0 0 1-.233.131l-5 1a.5.5 0 0 1-.606-.606l1-5a.5.5 0 0 1 .131-.232L12.146.146zM11.207 2L3 10.207V11h.793L13 3.793 11.207 2z" />
                            </svg>
                        </button>
                    </div>

                    <div className="mb-3 d-flex align-items-center gap-3">
                        <i class="bi bi-link-45deg fs-4 text-muted"></i>
                        <div>
                            <p className="mb-0 h5 fw-semibold text-primary fs-6">Portfolio Link</p>
                            <p className="mb-0 text-muted text-decoration-underline cursor-pointer">-</p>
                        </div>
                    </div>

                    <div className="mb-0 d-flex align-items-center gap-3">
                        <i class="bi bi-geo-alt fs-5 text-muted"></i>
                        <div>
                            <p className="mb-0 h5 fw-semibold text-primary fs-6">Preferred City</p>
                            <p className="mb-0">Surat</p>
                        </div>
                    </div>
                </form>
            </div>

            <div className="border border-muted rounded p-4 bg-white shadow-sm mb-4">
                <h5 className="fw-semibold text-muted mb-4 fw-bold">Contact Details</h5>

                <div className="d-flex flex-column gap-3">

                    {/* Email */}
                    <div className="d-flex align-items-center gap-3">
                        <i className="bi bi-envelope text-muted fs-5 flex-shrink-0"></i>
                        <div className="w-100" style={{ maxWidth: "80%" }}>
                            <p className="mb-1 fw-semibold fs-6 h5">Email</p>
                            <p className="mb-0 text-truncate" title="jainampokal@gmail.com">
                                jainampokal@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="d-flex align-items-center gap-3">
                        <i className="bi bi-telephone text-muted fs-5 flex-shrink-0"></i>
                        <div>
                            <p className="mb-1 fw-semibold fs-6 h5">Phone number</p>
                            <p className="mb-0">9016883804</p>
                        </div>
                    </div>

                    {/* Parent Phone Number */}
                    <div className="d-flex align-items-center gap-3">
                        <i className="bi bi-telephone text-muted fs-5 flex-shrink-0"></i>
                        <div>
                            <p className="mb-1 fw-semibold fs-6 h5">Parent Phone number</p>
                            <p className="mb-0">9979014222</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="border rounded p-4 bg-white position-relative w-100">
                <form method="POST" action className="mb-0" noValidate>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <h5 className="fw-semibold text-muted fw-bold mb-0">Social Links</h5>
                        </div>
                        <div>
                            <button type="button" className="btn btn-outline-secondary btn-sm p-2" aria-label="Edit">
                                <i className="bi bi-pencil" />
                            </button>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-3">
                        {/* Linkedin */}
                        <div className="d-flex align-items-center gap-3 w-100">
                            <i className="bi bi-linkedin text-muted fs-5" />
                            <div className="w-100 text-truncate" style={{ maxWidth: '80%' }}>
                                <p className="mb-1 fw-semibold h5 fs-6">Linkedin</p>
                                <a href="https://www.linkedin.com/in/jainam-pokal-484413243/" target="_blank" rel="noopener noreferrer" className="text-decoration-underline text-muted text-truncate" title="https://www.linkedin.com/in/jainam-pokal-484413243/">
                                    https://www.linkedin.com/in/jainam-pokal-484413243/
                                </a>
                            </div>
                        </div>
                        {/* Instagram */}
                        <div className="d-flex align-items-center gap-3 w-100">
                            <i className="bi bi-instagram text-muted fs-5" />
                            <div className="w-100 text-truncate" style={{ maxWidth: '80%' }}>
                                <p className="mb-1 fw-semibold h5 fs-6">Instagram</p>
                                <a href="https://www.instagram.com/jainam._.24____/?hl=en" target="_blank" rel="noopener noreferrer" className="text-decoration-underline text-muted text-truncate" title="https://www.instagram.com/jainam._.24____/?hl=en">
                                    https://www.instagram.com/jainam._.24____/?hl=en
                                </a>
                            </div>
                        </div>
                        {/* Twitter */}
                        <div className="d-flex align-items-center gap-3 w-100">
                            <i className="bi bi-twitter text-muted fs-5" />
                            <div className="w-100" style={{ maxWidth: '80%' }}>
                                <p className="mb-1 fw-semibold h5 fs-6">Twitter</p>
                                <p className="mb-0">-</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
}

export default AcademicDetails;
