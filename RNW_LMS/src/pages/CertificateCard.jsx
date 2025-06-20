import React from 'react'

function CertificateCard() {
    return (
        <>
            <div>
                &lt; !--Sidebar --&gt;
                <div className="d-flex">
                    {/* Sidebar */}
                    <nav className="bg-white border-end position-fixed h-100" style={{ width: 280, zIndex: 1060 }}>
                        {/* Logo and Close Button */}
                        <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                            <a href="/student" className="d-flex align-items-center">
                                <img src="/rnw/rnw-logo.png" alt="Red and White LOGO" style={{ height: 40, width: '100%' }} />
                            </a>
                            <button className="btn btn-outline-secondary d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu">
                                <i className="bi bi-x-lg" />
                            </button>
                        </div>
                        {/* Sidebar Menu */}
                        <div className="overflow-auto px-3 py-4" style={{ height: 'calc(100vh - 64px)' }}>
                            <ul className="nav flex-column" id="sidebarMenu">
                                <li className="nav-item">
                                    <a className="nav-link text-muted" href="/student">
                                        <i className="bi bi-grid-fill me-2" /> Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-muted" href="/student/applications">
                                        <i className="bi bi-file-earmark-text me-2" /> My Applications
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-muted" href="/student/find-job">
                                        <i className="bi bi-search me-2" /> Find Job
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-primary bg-primary bg-opacity-10" href="/student/public-profile">
                                        <i className="bi bi-person me-2" /> Public Profile
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-muted" href="/student/remarks">
                                        <i className="bi bi-chat-left-text me-2" /> Remarks List
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-muted" href="/student/hold-request">
                                        <i className="bi bi-pause-circle me-2" /> Hold Request
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-muted" href="/student/cancel-request">
                                        <i className="bi bi-x-circle me-2" /> Cancel Request
                                    </a>
                                </li>
                                {/* Settings with Collapse */}
                                <li className="nav-item">
                                    <a className="nav-link text-muted d-flex justify-content-between align-items-center" data-bs-toggle="collapse" href="#settingsSubmenu" role="button" aria-expanded="false" aria-controls="settingsSubmenu">
                                        <span><i className="bi bi-gear me-2" /> Setting</span>
                                        <i className="bi bi-chevron-down small" />
                                    </a>
                                    <div className="collapse ps-4" id="settingsSubmenu">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link text-muted" href="/student/change-password">
                                                    <i className="bi bi-key me-2" /> Change Password
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default CertificateCard
