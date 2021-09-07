import {
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
    cardBody: {},
  })
);

export default function Calendar() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        className={classes.cardHeader}
      >
        <Grid item>
          <Button startIcon={<ArrowBackIosIcon />}>Semana anterior</Button>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Exibir:
            <FormControlLabel control={<Checkbox checked />} label="Check-in" />
            <FormControlLabel control={<Checkbox />} label="Check-out" />
            <FormControlLabel control={<Checkbox />} label="Limpeza" />
          </Typography>
        </Grid>
        <Grid item>
          <Button endIcon={<ArrowForwardIosIcon />}>Próxima semana</Button>
        </Grid>
      </Grid>
      <div className={classes.cardBody}>
        <CardHeader />
        <CardContent />
      </div>
    </Card>
  );
}
