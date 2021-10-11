import { Tooltip } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  FileCopy as FileCopyIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginLeft: theme.spacing(1),
      cursor: "pointer",
    },
  })
);

export default function CopyButton() {
  const classes = useStyles();

  return (
    <Tooltip arrow title="Copiar" className={classes.button}>
      <FileCopyIcon fontSize="small" />
    </Tooltip>
  );
}
