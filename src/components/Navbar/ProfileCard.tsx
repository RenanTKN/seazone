import { Avatar, Box, Card, Grid, Typography } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { StarRate as StarRateIcon } from "@material-ui/icons";
import { truncate } from "lodash";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profileContainer: {
      position: "absolute",
      bottom: theme.spacing(4),
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    profileCard: {
      padding: theme.spacing(1),
      background: "#202739",
      borderRadius: 15,
    },
  })
);

export default function ProfileCard() {
  const classes = useStyles();

  return (
    <div className={classes.profileContainer}>
      <Box maxWidth={190}>
        <Card className={classes.profileCard}>
          <Grid
            container
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <Avatar
                alt="Eduarda Cardoso"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
            </Grid>
            <Grid item>
              <Box color="#fff">
                <Typography>
                  {truncate("Eduarda Cardoso", { length: 15 })}
                </Typography>
                <Typography variant="body2">
                  Anfitrião <StarRateIcon fontSize="small" /> 9.67
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </div>
  );
}
