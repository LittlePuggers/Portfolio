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
          width: "128px",
          fontSize: "24px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <IoLogoFacebook />
        <IoLogoGithub />
        <IoLogoLinkedin />
      </div>
    </div>
  );
}
