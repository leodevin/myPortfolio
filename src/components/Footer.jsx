import React from "react";
import '../css/Footer.css';
import '../../node_modules/animate.css';


class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer font-small elegant-color colordarken-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-5">
                            <div className="mb-5 flex-center">
                                <a className="at-ic" href="mailto:leonard.devincre@free.fr">
                                    <i className="fas fa-at fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="li-ic" href="https://www.linkedin.com/in/léonard-devincre-861308151/">
                                    <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="li-ic" href="https://github.com/leodevin">
                                    <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2020 Copyright: Léonard Devincre</div>
            </footer>
        )

    }
}

export default Footer;