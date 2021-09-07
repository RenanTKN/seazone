import React from "react";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TasksContext } from "../../contexts/TasksContext";

import {
  getMonthName,
  getWeek,
  getWeekDayName,
  isSameDate,
} from "../../helpers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardHeader: {
      padding: `${theme.spacing(3)}px 0`,
    },
    dayCell: {
      width: "calc(100%/7)",
    },
    today: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      marginTop: -5,
    },
  })
);

export default function CardHeader() {
  const classes = useStyles();
  const { date } = React.useContext(TasksContext);
  const week = getWeek(date);

  return (
    <Grid
      container
      justifyContent="space-evenly"
      className={classes.cardHeader}
      spacing={1}
    >
      {week.map((day, i) => (
        <Grid item key={i} className={classes.dayCell}>
          <Typography component="span" variant="h5" align="center">
            <Grid container justifyContent="center" spacing={1}>
              <Grid item>
                {isSameDate(new Date(), day) ? (
                  <Avatar className={classes.today}>{day.getDate()}</Avatar>
                ) : (
                  day.getDate()
                )}
              </Grid>
              <Grid item>{getMonthName(day.getMonth())}</Grid>
            </Grid>
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary">
            {getWeekDayName(day.getDay())}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
