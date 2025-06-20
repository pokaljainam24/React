import React from 'react';

function EducationCard() {
    return (
        <div className="container">
            <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center px-4">
                    <h5 className="mb-0 text-primary h5">Educations</h5>
                    <button type="button" className="btn btn-outline-secondary btn-sm p-1" title="Add">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5V7.5H11.5a.5.5 0 0 1 0 1H8.5V11.5a.5.5 0 0 1-1 0V8.5H4.5a.5.5 0 0 1 0-1H7.5V4.5A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
                </div>
                <div className="card-body px-4">
                    <div className="mb-3">
                        <h6 className="fw-semibold mb-1">Vallabhbudhi Polytechnic, Navsari</h6>
                        <div className="small text-dark mb-2">
                            Diploma in Engineering <span className="mx-2">&bull;</span> 2022 <span className="mx-2">&bull;</span>
                            <span className="badge bg-danger rounded rounded-5 px-3 p-2">84%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center px-4">
                    <h5 className="mb-0 text-primary h5">Professional Certificate</h5>
                    <button type="button" className="btn btn-outline-secondary btn-sm p-1" title="Add">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5V7.5H11.5a.5.5 0 0 1 0 1H8.5V11.5a.5.5 0 0 1-1 0V8.5H4.5a.5.5 0 0 1 0-1H7.5V4.5A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
                </div>
                <div className="card-body px-4">
                    <div className="mb-3">
                        <h6 className="mb-1 fw-semibold">Mern Stack</h6>
                        <div className="text-dark small mb-2">
                            Red And White Institute <span className="mx-2">&bull;</span> 22 May, 2025
                        </div>
                        <p className="mb-2">
                            <a href="https://thingqbator.nasscomfoundation.org/home/certificate/nnVBvz64SAzDUu4x" target="_blank" rel="noopener noreferrer" className="text-decoration-underline text-muted small">
                                https://thingqbator.nasscomfoundation.org/home/certificate/nnVBvz64SAzDUu4x
                            </a>
                        </p>
                        <p className="text-dark">
                            The certificate I've received from thingQbator indicates my successful completion of a technology-focused learning program offered by the Nasscom Foundation in collaboration with Cisco.
                        </p>
                    </div>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center px-4">
                    <h5 className="mb-0 text-primary h5">Experiences</h5>
                    <button type="button" className="btn btn-outline-secondary btn-sm p-1" title="Add">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5V7.5H11.5a.5.5 0 0 1 0 1H8.5V11.5a.5.5 0 0 1-1 0V8.5H4.5a.5.5 0 0 1 0-1H7.5V4.5A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
                </div>
                <div className="card-body px-4">
                    <p className="text-muted mb-0">No education details found.</p>
                </div>
            </div>

            <div class="card border rounded-md p-4 mb-4 shadow-sm">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="mb-0 text-primary h5">Skills</h5>
                    <button type="button" class="btn btn-outline-secondary btn-sm" title="Edit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-pencil" viewBox="0 0 16 16">
                            <path
                                d="M12.146.146a.5.5 0 0 1 .708 0L15 2.293a.5.5 0 0 1 0 .708l-9.146 9.147a.5.5 0 0 1-.168.11l-4 1.5a.5.5 0 0 1-.65-.65l1.5-4a.5.5 0 0 1 .11-.168L12.146.146zm.708.708L13 1.707 14.293 3 14.854 2.439 12.854.439a.5.5 0 0 0-.708.707zM11.5 2.5L2 12v1h1l9.5-9.5-1-1z" />
                        </svg>
                    </button>
                </div>

                <div class="d-flex flex-wrap gap-2">
                    <span class="badge rounded-pill bg-light text-dark border">PD/ENTR/FRLNC/INTTECH</span>
                    <span class="badge rounded-pill bg-light text-dark border">Node js, Express js, MongoDB_WEB</span>
                    <span class="badge rounded-pill bg-light text-dark border">JavaScript &amp; ECMAScript_Web</span>
                    <span class="badge rounded-pill bg-light text-dark border">HTML-CSS_FSD</span>
                    <span class="badge rounded-pill bg-light text-dark border">BT-JQ_FSD</span>
                    <span class="badge rounded-pill bg-light text-dark border">C Language</span>
                    <span class="badge rounded-pill bg-light text-dark border">React JS_Web</span>
                </div>
            </div>


            <div className="container">
                <div className="card p-4 container-fluid">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="text-danger h5 mb-0">Projects</h5>
                        <button className="btn btn-outline-secondary btn-sm" title="Add">
                            <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} fill="currentColor" viewBox="0 0 256 256">
                                <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8" />
                            </svg>
                        </button>
                    </div>
                    <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {/* Slide 1 */}
                            <div className="carousel-item active">
                                <div className="card">
                                    <img src="https://storage.googleapis.com/rnw-placement-portal-67a2f.appspot.com/rnw/production/student/6828413b03dbda8205c76d19/project/1747472971916_0.png" className="card-img-top" alt="Apple Clone" />
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <h6 className="card-title mb-1">Apple Clone</h6>
                                        <button className='btn'><i className="bi bi-eye text-info me-1 fs-3"></i></button>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 2 */}
                            <div className="carousel-item">
                                <div className="card">
                                    <img src="https://storage.googleapis.com/rnw-placement-portal-67a2f.appspot.com/rnw/production/student/6828413b03dbda8205c76d19/project/1749150030851_0_.png" className="card-img-top" alt="Jainam Vlogs" />
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <h6 className="card-title mb-1">Jainam Vlogs - Blog Application</h6>
                                        <button className='btn'><i className="bi bi-eye text-info me-1 fs-3"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Controls */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" />
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationCard;
