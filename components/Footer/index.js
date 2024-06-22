import { Container } from "..";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

import { socials } from "../../data/socials.json";
import usersInfo from "../../data/usersInfo.json";

function Footer() {
  return (
    <div
      id="footer"
      className="relative w-screen h-[20vh] py-5 px-3 bg-dark-300"
    >
      <Container>
        <div className="relative flex flex-row items-center justify-between">
          <div className="left flex flex-row">
            <h1 className=" text-[15px] ">
              <span className="font-extrabold">
                {usersInfo.github_username}
              </span>
            </h1>
            <small className="ml-[20px] text-white-200">
              &copy; {new Date().getFullYear()} All Right Reserved.
            </small>
          </div>
          <div className="right">
            <div className="socials flex flex-row items-center justify-center">
              {socials.twitter && (
                <SocialLink url={socials.twitter}>
                  <FaTwitter />
                </SocialLink>
              )}
              {socials.instagram && (
                <SocialLink url={socials.instagram}>
                  <FaInstagram />
                </SocialLink>
              )}
              {socials.github && (
                <SocialLink url={socials.github}>
                  <FaGithub />
                </SocialLink>
              )}
              {socials.email && (
                <SocialLink url={`mailto:${socials.email}`}>
                  <AiFillMail />
                </SocialLink>
              )}
              {socials.linkedin && (
                <SocialLink url={socials.linkedin}>
                  <FaLinkedin />
                </SocialLink>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;

function SocialLink({ url, children }) {
  return (
    <a
      href={url.includes("@") ? `mailto:${url}` : url}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline text-white-100 decoration-none hover:text-white-100 mr-4"
    >
      {children}
    </a>
  );
}
