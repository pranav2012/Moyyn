import React from "react";
import "../../styles/footer.scss";
import 'tachyons';

function footer() {
    return (
        <div className='footer bg-white flex flex-column mt2 w-100'>
            <div className='center ma4 flex flex-column w-90 flex-row-l justify-center'>
                <div className='flex flex-column items-start foot1'>
                    <h4 className='leftheader f6 f5-l f5-m'>Sourcing talents to germany</h4>
                    <div>
                        <ul className='pa0'>
                            <li className='list fw5 f7 mb3 flex items-center footerli'><i className="iconfooter fa fa-map-marker"></i><span className="ml2">Startup Incubator Berlin, Rohrdamm 88, 13629 Berlin</span></li>
                            <li className='list fw5 f7 flex items-center footerli'><i className="iconfooter fa fa-envelope"></i><span className="ml2">talent@moyyn.com</span></li>
                        </ul>
                    </div>
                    <p className='footleftp'>Moyyn Group is a venture of MyHelpBuddy UG supported by European Union Social Fund and Berlin Senate</p>
                    <div className='flex w3 justify-between'>
                        <a href="https://facebook.com/moyyn/" target="_blank" rel="noopener noreferrer"> <i className="iconfooter socialfoot fa fa-facebook-square"></i></a>
                        <a href="https://www.linkedin.com/company/moyyn/" target="_blank" rel="noopener noreferrer"> <i className="iconfooter socialfoot fa fa-linkedin-square"></i> </a>
                    </div>
                </div>
                <div className='foot2 flex items-start items-center-l flex-column'>
                    <h4 className='leftheader f6 f5-l f5-m'>Links</h4>
                    <div>
                        <ul className='pa0'>
                            <li className='list'><a className='link gray flex items-center mt2 f7' href="https://moyyn.com/apply"> <i className="iconfooter mr3 f4 fa fa-angle-right"></i><span className='footerlinks'>Submit your CV</span> </a></li>
                            <li className='list'><a className='link gray flex items-center mt2 f7' href="https://moyyn.com/jobs-germany"> <i className="iconfooter mr3 f4 fa fa-angle-right"></i><span className='footerlinks'>Jobs</span> </a></li>
                            <li className='list'><a className='link gray flex items-center mt2 f7' href="https://moyyn.com/index.php/companies"> <i className="iconfooter mr3 f4 fa fa-angle-right"></i><span className='footerlinks'>Companies</span> </a></li>
                            <li className='list'><a className='link gray flex items-center mt2 f7' href="https://moyyn.com/index.php/terms-and-conditions-2"> <i className="iconfooter mr3 f4 fa fa-angle-right"></i><span className='footerlinks'>Terms</span> </a></li>
                            <li className='list'><a className='link gray flex items-center mt2 f7' href="https://moyyn.com/index.php/privacy"> <i className="iconfooter mr3 f4 fa fa-angle-right"></i><span className='footerlinks'>Privacy</span> </a></li>
                            <li className='list'><a className='link gray flex items-center mt2 f7' href="https://moyyn.com/index.php/imprint"> <i className="iconfooter mr3 f4 fa fa-angle-right"></i><span className='footerlinks'>Imprint</span> </a></li>
                        </ul>
                    </div>
                </div>
                <div className='foot3 flex items-center flex-column items-center'>
                    <h4 className='leftheader f6 f5-l f5-m'>Supported by</h4>
                    <a href="http://startup-incubator.berlin/"><img alt='supportimg' className='footsupportimg mt4' src="https://moyyn.com/wp-content/uploads/2020/04/1_SIB_Logo.png" /></a>
                    <a href="https://www.berlin.de/sen/wirtschaft/en/"><img alt='supportimg' className='footsupportimg mt4' src="https://moyyn.com/wp-content/uploads/2020/04/3_be_Berlin_Logo-300x73.png" /></a>
                    <a href="https://ec.europa.eu/esf/home.jsp"><img alt='supportimg' className='footsupportimg mt4' src="https://moyyn.com/wp-content/uploads/2020/03/S2A-european-union-social-fund-288x300.jpg" /></a>
                </div>
            </div>
            <div className='copyfoot w-100 white tc f7 f5-m f5-l'>
                <p>© {new Date().getFullYear()} Moyyn. All rights reserved. </p>
            </div>
        </div>
    );
}

export default footer;