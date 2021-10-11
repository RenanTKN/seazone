import React from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  ArrowBackIos as ArrowBackIosIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
} from "@material-ui/icons";

import CardContent from "./CalendarContent";
import CardHeader from "./CalendarHeader";

import { SelectedTaskProvider } from "../../contexts/SelectedTaskContext";
import { TasksContext } from "../../contexts/TasksContext";
import { getNextWeek, getPreviousWeek } from "../../helpers";
import DialogBox from "./DialogBox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: "#F6F6F6",
      borderRadius: 8,
    },
    cardHeader: {
      backgroundColor: "#fff",
      padding: theme.spacing(2),
    },
    today: {
      background: "#f50057",
      display: "inline-block",
      color: "#fff",
      marginTop: -2.5,
      padding: 5,
      width: 27,
      height: 27,
      borderRadius: "50%",
    },
  })
);

export default function Calendar() {
  const classes = useStyles();

  const {
    date,
    showCheckIn,
    showCheckOut,
    showLimpeza,
    setDate,
    setIsLoading,
    setShowCheckIn,
    setShowCheckOut,
    setShowLimpeza,
  } = React.useContext(TasksContext);

  return (
    <SelectedTaskProvider>
      <Card className={classes.card}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          className={classes.cardHeader}
        >
          <Grid item>
            <Button
              startIcon={<ArrowBackIosIcon />}
              onClick={() => {
                setIsLoading(true);
                setDate(getPreviousWeek(date));
              }}
            >
              Semana anterior
            </Button>
          </Grid>
          <Grid item>
            <Typography component="span" variant="body1">
              <Box mr={2} display="inline">
                Exibir:
              </Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showCheckIn}
                    onChange={() => setShowCheckIn(!showCheckIn)}
                  />
                }
                label="Check-in"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showCheckOut}
                    onChange={() => setShowCheckOut(!showCheckOut)}
                  />
                }
                label="Check-out"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showLimpeza}
                    onChange={() => setShowLimpeza(!showLimpeza)}
                  />
                }
                label="Limpeza"
              />
            </Typography>
          </Grid>
          <Grid item>
            <Button
              endIcon={<ArrowForwardIosIcon />}
              onClick={() => {
                setIsLoading(true);
                setDate(getNextWeek(date));
              }}
            >
              Próxima semana
            </Button>
          </Grid>
        </Grid>
        <div>
          <CardHeader />
          <CardContent />
        </div>
      </Card>
      <DialogBox />
    </SelectedTaskProvider>
  );
}
