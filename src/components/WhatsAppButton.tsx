import { Tooltip } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { WhatsApp as WhatsAppIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      cursor: "pointer",
      color: green[600],
    },
  })
);

export default function WhatsAppButton() {
  const classes = useStyles();

  return (
    <Tooltip arrow title="WhatsApp" className={classes.button}>
      <WhatsAppIcon fontSize="small" />
    </Tooltip>
  );
}
