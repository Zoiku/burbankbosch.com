import "../styles/Contact.scss";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import NearMeIcon from "@mui/icons-material/NearMe";
import { Box, TextField } from "@mui/material";
import { Button1 } from "../components/MUIButton";
import leftFormContainerBgArt from "../assets/Dayflow - Message.svg";
import { useState } from "react";

const initialState = {
  request: {
    payload: null,
  },
  response: {
    loading: false,
    data: null,
    error: null,
    status: null,
  },
};

const Contact = () => {
  const [formState, setFormState] = useState(initialState);

  const onContactFormSubmit = (e) => {
    e.preventDefault();
    setFormState({
      ...formState,
      response: { ...formState.response, loading: true },
    });

    setTimeout(() => {
      setFormState({
        request: { ...formState.request, payload: null },
        response: { loading: false, data: [], error: null, status: 200 },
      });

      e.target.reset();
    }, 8000);
  };

  const onInput = (e) => {
    setFormState({
      ...formState,
      request: {
        ...formState.request,
        payload: {
          ...formState.request.payload,
          [`${e.target.name}`]: e.target.value,
        },
      },
    });
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
              <div className="leftContainer">
                <div
                  data-aos-duration="1000"
                  data-aos="fade-right"
                  className="left"
                >
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
                <div className="right">
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
                            onChange={onInput}
                            variant="filled"
                            fullWidth
                            label="First Name"
                            name="firstName"
                            type="text"
                            required
                          />
                          <TextField
                            onChange={onInput}
                            variant="filled"
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            type="text"
                            required
                          />
                        </div>
                        <div className="form-input-duo">
                          <TextField
                            onChange={onInput}
                            variant="filled"
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            required
                          />
                          <TextField
                            onChange={onInput}
                            variant="filled"
                            fullWidth
                            label="Phone"
                            name="phone"
                            type="tel"
                            required
                          />
                        </div>
                        <div className="form-input">
                          <TextField
                            onChange={onInput}
                            variant="filled"
                            fullWidth
                            label="Subject"
                            name="subject"
                            type="text"
                            required
                          />
                        </div>
                        <div className="form-input">
                          <TextField
                            onChange={onInput}
                            variant="filled"
                            fullWidth
                            multiline
                            rows={1}
                            label="Message"
                            name="message"
                            type="text"
                            required
                          />
                        </div>
                        <div className="form-input">
                          <Button1
                            loadingIndicator="Sending..."
                            loading={formState.response.loading}
                            variant="contained"
                            type="submit"
                          >
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
