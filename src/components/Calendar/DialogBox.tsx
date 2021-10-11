import { useContext } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { red, yellow } from "@material-ui/core/colors";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { SelectedTaskContext } from "../../contexts/SelectedTaskContext";
import CopyButton from "../CopyButton";
import WhatsAppButton from "../WhatsAppButton";
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

export default function DialogBox() {
  const classes = useStyles();

  const {
    open,
    id,
    name,
    type,
    dateIn,
    isCamaQuente,
    isCheckinComplete,
    handleClose,
  } = useContext(SelectedTaskContext);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
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
          <div className={classes.close} onClick={handleClose}>
            &times;
          </div>
        </>
      </DialogTitle>
      <DialogContent>
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
        <Divider variant="fullWidth" />
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
                IUDIQGI
                <CopyButton />
              </Typography>
            </Grid>
            <Grid item>
              <Typography component="span" variant="body1">
                {name}
                <br /> +55 47 99123456 <CopyButton /> <WhatsAppButton />
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <Divider variant="fullWidth" />
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" disableFocusRipple>
          Preencher Informações
        </Button>
        <Button
          onClick={handleClose}
          variant="outlined"
          disableFocusRipple
          autoFocus
        >
          Realizar Check-in
        </Button>
      </DialogActions>
    </Dialog>
  );
}
