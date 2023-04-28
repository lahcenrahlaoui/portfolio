import {
    GrFacebookOption,
    GrTwitter,
    GrGithub,
    GrLinkedin,
} from "react-icons/gr";

const Footer = () => {
    return (
        <div id="Contact" className="h-20 flex justify-center ">
            <div className="flex justify-between w-96 text-4xl">
                <div>
                    <GrFacebookOption className="hover:text-facebook"/>{" "}
                </div>
                <div>
                    <GrTwitter className="hover:text-twitter"/>
                </div>
                <div>
                    <GrGithub className="hover:text-github"/>
                </div>
                <div>
                    <GrLinkedin className="hover:text-linkedin"/>{" "}
                </div>
            </div>
        </div>
    );
};

export default Footer;
