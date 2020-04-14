import React from "react";
import '../css/ModalRegisterForm.css';

class ModalRegisterForm extends React.Component {
    render() {
        return (
            <div className="formContainer">
                <div className="modal fade" id="modalContactForm" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Write to us</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body mx-3">
                                <div className="md-form mb-5 text-left">
                                    <i className="mt-2 fas fa-user prefix grey-text" />
                                    <input type="text" id="form34" className="form-control validate" />
                                    <label className="active" data-error="wrong" data-success="right" htmlFor="form34">Your name</label>
                                </div>
                                <div className="md-form mb-5 text-left">
                                    <i className="mt-2 fas fa-envelope prefix grey-text" />
                                    <input type="email" id="form29" className="form-control" />
                                    <label className="active" data-error="wrong" data-success="right" htmlFor="form29">Your email</label>
                                </div>
                                <div className="md-form mb-5 text-left">
                                    <i className="mt-2 fas fa-tag prefix grey-text" />
                                    <input type="text" id="form32" className="form-control validate" />
                                    <label className="active" data-error="wrong" data-success="right" htmlFor="form32">Subject</label>
                                </div>
                                <div className="md-form">
                                    <i className="fas fa-pencil prefix grey-text" />
                                    <textarea type="text" id="form8" className="md-textarea form-control" rows={4} defaultValue={""} />
                                    <label className="active" data-error="wrong" data-success="right" htmlFor="form8">Your message</label>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <button className="btn btn-default">Send <i className="fas fa-paper-plane-o ml-1" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a href className="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalContactForm">Launch
                        Modal Contact Form</a>
                </div>
            </div>
        )
    }
}
export default ModalRegisterForm;