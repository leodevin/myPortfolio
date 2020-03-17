import React from "react";
import '../css/Footer.css';
import '../../node_modules/animate.css';


class Footer extends React.Component {
    render() {
        return (
            <footer class="page-footer font-small elegant-color colordarken-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 py-5">
                            <div class="mb-5 flex-center">
                                <a class="at-ic" href="mailto:leonard.devincre@free.fr">
                                    <i class="fas fa-at fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a class="li-ic" href="https://www.linkedin.com/in/léonard-devincre-861308151/">
                                    <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="li-ic" href="https://github.com/leodevin">
                                    <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a> Léonard Devincre</a>
                </div>
            </footer>
        )

    }
}

export default Footer;