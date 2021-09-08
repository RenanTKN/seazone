import React from "react";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { blue, green, red, yellow } from "@material-ui/core/colors";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Check as CheckIcon,
  FileCopy as FileCopyIcon,
  WhatsApp as WhatsAppIcon,
  Whatshot as WhatshotIcon,
} from "@material-ui/icons";
import { TaskProps, TaskType } from "../../contexts/TasksContext";
import { isSameDate } from "../../helpers";

import CardFlag from "./CardFlag";
import { formatDate, formatType } from "./format";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: (props: any) => ({
      opacity: props.isConcluded ? 0.5 : 1,
      padding: theme.spacing(1),
      paddingRight: theme.spacing(2),
      borderLeft: `5px solid ${props.color}`,
      borderRadius: `0 10px 10px 0`,
      marginBottom: 5,
      cursor: "pointer",
    }),
    close: {
      position: "absolute",
      top: theme.spacing(1),
      right: theme.spacing(2),
      fontWeight: "normal",
      color: "rgba(0, 0, 0, 0.54)",
      cursor: "pointer",
    },
    checkedIn: {
      color: "#fff",
      backgroundColor: green[400],
      padding: 0,
      width: 25,
      height: 25,
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
    cardIcon: {
      fontSize: 15,
    },
  })
);

interface TaskCardProps {
  task: TaskProps;
}

const getBorderColor = (type: TaskType) => {
  switch (type) {
    case "checkin":
      return blue[800];
    case "limpeza":
      return green["A200"];
    case "checkout":
      return red[600];
  }
};

export default function TaskCard({ task }: TaskCardProps) {
  const [open, setOpen] = React.useState(false);

  const {
    dateIn,
    dateOut,
    name,
    id,
    isCheckinComplete,
    isConcluded,
    isDataComplete,
    time,
    type,
  } = task;

  const color = getBorderColor(type);
  const props = { isConcluded, color };
  const classes = useStyles(props);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isCamaQuente = () => type === "checkin" && isSameDate(dateIn, dateOut);

  return (
    <>
      <Card className={classes.card} onClick={handleOpen}>
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="body1" color="textSecondary">
              <strong>
                {formatType(type)} {time}
              </strong>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {id}
            </Typography>
            {!!name && (
              <Typography variant="subtitle1" color="textSecondary">
                {name}
              </Typography>
            )}
          </Grid>
          <Grid item xs={1}>
            <div>
              {["checkin", "checkout"].includes(type) && (
                <CardFlag
                  backgroundColor={isDataComplete ? green[400] : red[400]}
                  icon={<ChatBubbleOutlineIcon />}
                />
              )}
              {isCamaQuente() && (
                <CardFlag
                  backgroundColor={yellow[800]}
                  icon={<WhatshotIcon />}
                />
              )}
              {type === "limpeza" && isCheckinComplete && (
                <CardFlag backgroundColor={green[400]} icon={<CheckIcon />} />
              )}
            </div>
          </Grid>
        </Grid>
      </Card>
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
              <Typography
                variant="body2"
                color="textSecondary"
                display="inline"
              >
                {formatDate(dateIn)}
              </Typography>
            </Box>
            <div className={classes.close} onClick={handleClose}>
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
                  {isCamaQuente() && (
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
          <Button onClick={handleClose} variant="outlined">
            Preencher Informações
          </Button>
          <Button onClick={handleClose} variant="outlined" autoFocus>
            Realizar Check-in
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
