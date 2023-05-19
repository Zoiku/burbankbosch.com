import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { WhatsApp, Instagram } from "@mui/icons-material";

const MUISpeedDial = () => {
  const speedDialActionTypes = {
    WHATSAPP: "WHATSAPP",
    INSTAGRAM: "INSTAGRAM",
  };

  const doWhatsAppAction = () => {
    console.log("Check WhatsApp");
  };

  const doInstagramAction = () => {
    console.log("Check Instagram");
  };

  const doAction = (type) => () => {
    switch (type) {
      case speedDialActionTypes.WHATSAPP:
        doWhatsAppAction();
        break;

      case speedDialActionTypes.INSTAGRAM:
        doInstagramAction();
        break;

      default:
        break;
    }
  };

  const actions = [
    {
      icon: <Instagram />,
      name: "Connect via Instagram",
      function: doAction(speedDialActionTypes.INSTAGRAM),
    },
    {
      icon: <WhatsApp />,
      name: "Connect Via Whatsapp",
      function: doAction(speedDialActionTypes.WHATSAPP),
    },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.function}
        />
      ))}
    </SpeedDial>
  );
};

export default MUISpeedDial;
