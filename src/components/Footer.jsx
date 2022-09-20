import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export function Footer() {
  return (
    <div
      style={{
        margin: "16px 128px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>
        <h6
          style={{
            margin: "0",
            width: "128px",
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: "normal",
          }}
        >
          anaiko© 2022
        </h6>
      </div>
      <div
        style={{
          width: "136px",
          fontSize: "24px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <a
          className="social-icons"
          href="https://www.facebook.com/anaibarram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoFacebook />
        </a>
        <a
          className="social-icons"
          href="https://github.com/LittlePuggers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub />
        </a>
        <a
          className="social-icons"
          href="https://www.linkedin.com/in/ana-lucia-ibarra-millan-66b015251/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin />
        </a>
      </div>
    </div>
  );
}
