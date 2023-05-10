import "../styles/Contact.scss";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import NearMeIcon from "@mui/icons-material/NearMe";
import { Box, TextField } from "@mui/material";
import { Button1 } from "../components/MUIButton";
import leftFormContainerBgArt from "../assets/Hands - Phone.svg";

const Contact = () => {
  const onContactFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Contact">
      <section className="ContactSectionsCenteredContainer">
        <div className="ContactSectionsCentered">
          <div className="titleContainer">
            <div className="titleHeading">Reach Us</div>
            <div className="title">Contact</div>
          </div>

          <div className="contactFormContainer">
            <div className="contactForm">
              <div
                data-aos-duration="1000"
                data-aos="fade-right"
                className="leftContainer"
              >
                <div className="left">
                  <div className="leftTitleContainer">
                    <div className="title">Contact Information</div>
                    <div className="titleHelper">
                      Our Team will get to your in less than 24 hours
                    </div>
                  </div>
                  <div className="formContainer">
                    <div className="form">
                      <div className="contact-info">
                        <span>
                          <CallIcon />
                        </span>
                        <span>Tel: 233-555-777</span>
                      </div>
                      <div className="contact-info">
                        <span>
                          <EmailIcon />
                        </span>
                        <span>Email: email@email.com</span>
                      </div>
                      <div className="contact-info">
                        <span>
                          <NearMeIcon />
                        </span>
                        <span>Location: Rangoon Lane St</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="leftFormContainerBgArt">
                  <img src={leftFormContainerBgArt} alt="" />
                </div>
              </div>
              <div className="rightContainer">
                <div
                  data-aos-duration="1000"
                  data-aos="zoom-in"
                  className="right"
                >
                  <div className="formContainer">
                    <div className="form">
                      <Box
                        component="form"
                        autoComplete="off"
                        onSubmit={onContactFormSubmit}
                        sx={{
                          "& > :not(style)": {
                            width: "100%",
                            margin: "0 0 15px 0",
                          },
                        }}
                      >
                        <div className="form-input-duo">
                          <TextField
                            variant="standard"
                            fullWidth
                            label="First Name"
                            name="firstName"
                          />
                          <TextField
                            variant="standard"
                            fullWidth
                            label="Last Name"
                            name="firstName"
                          />
                        </div>
                        <div className="form-input-duo">
                          <TextField
                            variant="standard"
                            fullWidth
                            label="Email Mail"
                            name="email"
                          />
                          <TextField
                            variant="standard"
                            fullWidth
                            label="Phone"
                            name="phone"
                          />
                        </div>
                        <div className="form-input">
                          <TextField
                            variant="standard"
                            fullWidth
                            label="Subject"
                            name="subject"
                          />
                        </div>
                        <div className="form-input">
                          <TextField
                            variant="standard"
                            fullWidth
                            multiline
                            rows={2}
                            label="Message"
                            name="message"
                          />
                        </div>
                        <div className="form-input">
                          <Button1 variant="contained" type="submit">
                            Send Message
                          </Button1>
                        </div>
                      </Box>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
