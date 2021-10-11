import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { red, yellow } from "@material-ui/core/colors";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  FileCopy as FileCopyIcon,
  WhatsApp as WhatsAppIcon,
} from "@material-ui/icons";

import { TaskType } from "../../contexts/TasksContext";
import { formatDate, formatType } from "./format";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      position: "absolute",
      top: theme.spacing(1),
      right: theme.spacing(2),
      fontWeight: "normal",
      color: "rgba(0, 0, 0, 0.54)",
      cursor: "pointer",
    },
    isIncomplete: {
      background: red[400],
      padding: 3,
      marginLeft: 3,
      color: "#fff",
      borderRadius: theme.shape.borderRadius,
      fontWeight: "bold",
    },
    camaQuente: {
      background: yellow[800],
      padding: 3,
      marginLeft: 3,
      color: "#fff",
      borderRadius: theme.shape.borderRadius,
      fontWeight: "bold",
    },
  })
);

interface DialogBoxProps {
  open: boolean;
  id: string;
  name?: string;
  type: TaskType;
  dateIn: Date;
  isCamaQuente: boolean;
  isCheckinComplete: boolean;
  onClose: () => void;
}

export default function DialogBox({
  open,
  id,
  name,
  type,
  dateIn,
  isCamaQuente,
  isCheckinComplete,
  onClose,
}: DialogBoxProps) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <>
          {formatType(type)}
          <Box display="inline" ml={2}>
            <Typography variant="body2" color="textSecondary" display="inline">
              {formatDate(dateIn)}
            </Typography>
          </Box>
          <div className={classes.close} onClick={onClose}>
            &times;
          </div>
        </>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography component="span" variant="body2" color="textSecondary">
            <Grid container justifyContent="space-between">
              <Grid item>4 adultos &middot; 1 pet &middot; 9 diárias</Grid>
              <Grid item>
                {!isCheckinComplete && (
                  <span className={classes.isIncomplete}>À receber</span>
                )}
                {isCamaQuente && (
                  <span className={classes.camaQuente}>Cama quente</span>
                )}
              </Grid>
            </Grid>
          </Typography>
        </DialogContentText>
        <Divider variant="fullWidth" />
        <DialogContentText>
          <Typography variant="h6" color="textPrimary">
            {id}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Av. Búzios 1800, Jurerê Internacional
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Florianópolis - SC, CEP 123456789
          </Typography>
          <Box mt={2}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography component="span" variant="body1">
                  Cód da reserva
                  <br />
                  IUDIQGI <FileCopyIcon fontSize="small" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="span" variant="body1">
                  {name}
                  <br /> +55 47 99123456 <FileCopyIcon fontSize="small" />{" "}
                  <WhatsAppIcon fontSize="small" />
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </DialogContentText>
      </DialogContent>
      <Divider variant="fullWidth" />
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Preencher Informações
        </Button>
        <Button onClick={onClose} variant="outlined" autoFocus>
          Realizar Check-in
        </Button>
      </DialogActions>
    </Dialog>
  );
}
