import { Avatar, Grid, Typography } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

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
    today: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      marginTop: -5,
    },
  })
);

export default function CardHeader() {
  const classes = useStyles();
  const week = getWeek();
  const today = new Date();

  return (
    <Grid
      container
      justifyContent="space-evenly"
      className={classes.cardHeader}
    >
      {week.map((day, i) => (
        <Grid item key={i}>
          <Typography variant="h5" align="center">
            <Grid container spacing={1}>
              <Grid item>
                {isSameDate(today, day) ? (
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
