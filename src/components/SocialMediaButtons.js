import React from "react";

function SocialMediaButtons() {
  return (
    <div className="socialmediabuttons">
      <a
        href="https://www.linkedin.com/in/erkin-berk-t%C3%BCre-76ab60163/"
        className="socialmediabutton"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/201_Linkedin_logo_logos-512.png"
          alt="linkedin"
          height="30px"
          width="30px"
          style={{ opacity: ".6" }}
          className="socialmediabuttonimage"
        />
      </a>
      <a
        href="https://github.com/configtheworld"
        className="socialmediabutton"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
          alt="github"
          height="30px"
          width="30px"
          style={{ opacity: ".6" }}
          className="socialmediabuttonimage"
        />
      </a>

      <a
        href="https://gitlab.com/users/configtheworld/"
        className="socialmediabutton"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/144_Gitlab_logo_logos-512.png"
          alt="gitlab"
          height="30px"
          width="30px"
          style={{ opacity: ".6" }}
          className="socialmediabuttonimage"
        />
      </a>
      <a
        href="https://stackoverflow.com/users/13969786/configtheworld"
        className="socialmediabutton"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111640.png"
          alt="stackoverflow"
          height="30px"
          width="30px"
          style={{ opacity: "0.6", marginBottom: "5px" }}
          className="socialmediabuttonimage"
        />
      </a>
      <a
        href="https://codepen.io/configtheworld"
        className="socialmediabutton"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Codepen-512.png"
          alt="gitlab"
          height="30px"
          width="30px"
          style={{ opacity: ".6" }}
          className="socialmediabuttonimage"
        />
      </a>

      <br />
      <small style={{ color: "#111" }}>© 2024 Developed by Erkin Ture</small>
    </div>
  );
}

export default SocialMediaButtons;
