import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { WhatsApp, Call, Instagram } from "@mui/icons-material";

const MUISpeedDial = () => {
  const doSomething = () => {};

  const actions = [
    {
      icon: <Instagram />,
      name: "Connect via Instagram",
      function: doSomething,
    },
    { icon: <WhatsApp />, name: "Connect Via Whatsapp", function: doSomething },
    { icon: <Call />, name: "Call Us", function: doSomething },
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
