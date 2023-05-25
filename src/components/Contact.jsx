import "../styles/Contact.scss";
import GoogleMap from "../components/GoogleMap";
import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { Button1 } from "../components/MUIButton";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { Close } from "@mui/icons-material/";
import AlertTitle from "@mui/material/AlertTitle";

const MUIAlert = ({ severity, alertTitle, alertMessage, open }) => (
  <Collapse in={true}>
    <Alert
      severity={severity}
      sx={{ mb: 2 }}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {}}
        >
          <Close fontSize="inherit" />
        </IconButton>
      }
    >
      <AlertTitle>{alertTitle}</AlertTitle>
      {alertMessage}
    </Alert>
  </Collapse>
);

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

  const onContactFormSubmit = (e) => {
    e.preventDefault();
    setFormState({
      ...formState,
      response: { ...formState.response, loading: true },
    });

    setTimeout(() => {
      setFormState({
        request: { ...formState.request, payload: null },
        response: {
          loading: false,
          data: [],
          error: null,
          status: 200,
          alert: {
            open: true,
            severity: "success",
            alertTitle: "Success",
            alertMessage: "This is a test message",
          },
        },
      });

      e.target.reset();
    }, 10000);
  };

  return (
    <Box
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
      {formState.response.alert && (
        <MUIAlert
          alertMessage={formState.response.alert.alertMessage}
          alertTitle={formState.response.alert.alertTitle}
          severity={formState.response.alert.alertSeverity}
          open={formState.response.alert.open}
        />
      )}

      <div className="form-input-duo">
        <TextField
          onChange={onInput}
          variant="outlined"
          fullWidth
          label="Full Name"
          name="fullName"
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
