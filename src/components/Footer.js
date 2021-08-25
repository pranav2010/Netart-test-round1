import { FaFacebook, FaGlobe, FaPhoneSquareAlt } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <a href="tel:1800 200 1234">
                <FaPhoneSquareAlt size="25" />
                <span> Toll Free 1800 200 1234</span>
            </a>

            <a href="https://www.facebook.com/cripumps">
                <FaFacebook size="25" />
                <span> www.facebook.com/cripumps</span>
            </a>

            <a href="https://www.crigroups.com/">
                <FaGlobe size="25" />
                <span> www.crigroups.com</span>
            </a>
        </div>
    );
}

export default Footer;
