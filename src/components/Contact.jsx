import "../styles/Contact.scss";
import GoogleMap from "../components/GoogleMap";
import { useRef, useState } from "react";
import { Box, TextField } from "@mui/material";
import { Button1 } from "../components/MUIButton";
import emailjs from "@emailjs/browser";
import { contactFormInitialState } from "../components/States";

const FormBox = () => {
  const formRef = useRef();
  const [formState, setFormState] = useState(contactFormInitialState);

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

  const onContactFormSubmit = async (e) => {
    e.preventDefault();
    setFormState({
      ...formState,
      loading: true,
    });

    try {
      const { status, text } = await emailjs.sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      );

      if (status === 200) {
        e.target.reset();
        setFormState({
          loading: false,
          request: { ...formState.request, payload: null },
          response: {
            data: [],
            error: null,
            status,
          },
        });
      } else {
        setFormState({
          loading: false,
          request: { ...formState.request, payload: null },
          response: {
            data: null,
            error: text,
            status,
          },
        });
      }
    } catch (error) {
      setFormState({
        loading: false,
        request: { ...formState.request, payload: null },
        response: {
          data: null,
          error: null,
          status: 500,
        },
      });
    }
  };

  return (
    <Box
      ref={formRef}
      className="formContainer"
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
          label="Full Name"
          name="name"
          type="text"
          required
        />
        <TextField
          onChange={onInput}
          variant="outlined"
          fullWidth
          label="Email"
          name="email"
          type="email"
          required
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
          rows={3}
          label="Message"
          name="message"
          type="text"
          required
        />
      </div>
      <div className="form-input">
        <Button1
          loadingIndicator="Sending..."
          loading={formState.loading}
          variant="contained"
          type="submit"
          fullWidth
        >
          Send Message
        </Button1>
      </div>
    </Box>
  );
};

const Contact = () => {
  return (
    <div className="Contact">
      <div className="contactMapContainer">
        <GoogleMap />
      </div>

      <div className="contactFormOverlayContainer">
        <div className="contactFormOverlay">
          <div className="titleContainer">
            <div className="title">Get in touch</div>
            <div className="titleHelper">
              Our friendly team would love to hear from you
            </div>
          </div>
          <FormBox />
        </div>
      </div>
    </div>
  );
};

export default Contact;
