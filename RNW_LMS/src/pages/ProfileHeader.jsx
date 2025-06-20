import React from 'react'

function ProfileHeader() {
    return (
        <>
            <div class="banner container"></div>
            <div className="container mt-5">
                <img src="https://storage.googleapis.com/rnw-placement-portal-67a2f.appspot.com/rnw/production/user/1748630639620_0_.jpg" alt="Profile" className="profile-img" />
                <div className="profile-card text-start">
                    <div className="d-flex justify-content-between gap-3 mt-3">
                        <h4 className="mt-3 fw-bold text-aling">JAINAM JAGDISHBHAI POKAL</h4>
                        <div className='d-flex justify-content-between align-items-center gap-2'>
                            <button className="btn btn-resume"><i className="bi bi-file-earmark-text" /> Resume</button>
                            <button className="btn btn-signature"><i className="bi bi-pen" /> Signature</button>
                        </div>
                    </div>
                    <p className="info-text text-aling">
                        <i className="bi bi-calendar info-icon" /> 24 Apr, 2003
                        &nbsp;&nbsp;
                        <i className="bi bi-geo-alt info-icon" /> Navsari
                    </p>
                    <p className="text-muted mt-3 text-aling">
                        Skilled in full-stack web development with a knack for seamless integration across front-end and back-end systems and intuitive problem-solving. Passionate about bringing new projects to life and translating business needs into scalable, end-to-end technical solutions. Eager to launch a career as an entry-level full-stack developer with a technology-driven firm.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProfileHeader
