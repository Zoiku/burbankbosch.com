import "../styles/Contact.scss";
import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { Button1 } from "../components/MUIButton";
import GoogleMap from "./GoogleMap";
import svgArt from "../assets/pngtree-grass-silhouette-png-image_2952514-removebg-preview.png";

const Contact = () => {
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
    <section className="Contact">
      <div className="contactSectionContainer">
        <div className="contactSection">
          <div className="contactFormContainer">
            <div className="contactFormBackgroundArtContainer">
              <img src={svgArt} alt="" className="contactFormBackgroundArt" />
            </div>

            <div className="contactForm">
              <div className="contactFormTitleContainer">
                <div className="title">Contact Us</div>
                <div className="titleHelper">
                  Our friendly team will love to hear from you
                </div>
              </div>
              <div className="contentFormBody">
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
                      variant="outlined"
                      fullWidth
                      label="First Name"
                      name="firstName"
                      type="text"
                      required
                    />
                    <TextField
                      onChange={onInput}
                      variant="outlined"
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
                      variant="outlined"
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      required
                    />
                    <TextField
                      onChange={onInput}
                      variant="outlined"
                      fullWidth
                      label="Phone"
                      name="phone"
                      type="tel"
                    />
                  </div>
                  <div className="form-input">
                    <TextField
                      onChange={onInput}
                      variant="outlined"
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
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={5}
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
          <div className="mapContainer">
            <GoogleMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
