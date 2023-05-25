import "../styles/Contact.scss";
import GoogleMap from "../components/GoogleMap";
import { useRef, useState } from "react";
import { Box, TextField } from "@mui/material";
import { Button1 } from "../components/MUIButton";
import emailjs from "@emailjs/browser";

const FormBox = () => {
  const initialState = {
    request: {
      payload: null,
    },
    response: {
      loading: false,
      data: null,
      error: null,
      status: null,
      alert: null,
    },
  };

  const formRef = useRef();
  const [formState, setFormState] = useState(initialState);

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
      response: { ...formState.response, loading: true },
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
          request: { ...formState.request, payload: null },
          response: {
            loading: false,
            data: [],
            error: null,
            status,
            alert: {
              open: true,
              message: "Thank you for your message!",
              severity: "success",
            },
          },
        });
      } else {
        setFormState({
          request: { ...formState.request, payload: null },
          response: {
            loading: false,
            data: null,
            error: text,
            status,
            alert: {
              open: true,
              message: text,
              severity: "error",
            },
          },
        });
      }
    } catch (error) {
      setFormState({
        request: { ...formState.request, payload: null },
        response: {
          loading: false,
          data: null,
          error: "Something went wrong, please try again",
          status: 500,
          alert: {
            open: true,
            message: "Something went wrong, please try again",
            severity: "warning",
          },
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
          loading={formState.response.loading}
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
