import React from "react";
import {
    Button,
    CardHeader,
    CardContent,
    CardActions,
    Grid
} from "@material-ui/core/";

import ResponsiveCard from "../components/ResponsiveCard.jsx";
import ResponsiveContainerGrid from "../components/ResponsiveContainerGrid.jsx";


const Login = () => {

    return (<>
        <ResponsiveContainerGrid>
            <Grid item xs={12} sm={3}>
              <ResponsiveCard>
                <form>
                  <CardHeader title="Sign in" subheader="by github" />
                  <CardContent>
                  </CardContent>
                  <CardActions style={{ justifyContent: "space-between" }}>
                    <Button type="submit" color="primary" raised width="100%">
                      Sign in
                    </Button>
                  </CardActions>
                </form>
              </ResponsiveCard>
            </Grid>
          </ResponsiveContainerGrid>
    </>)
}

export default Login;