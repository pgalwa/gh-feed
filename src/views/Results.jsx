import React from 'react';
import {
    Grid
} from "@material-ui/core/";

import ResponsiveCard from "../components/ResponsiveCard.jsx";
import ResponsiveContainerGrid from "../components/ResponsiveContainerGrid.jsx";
import Repository from "../components/Repository.jsx";


const Results = ({repositories}) => {

    const repos = repositories && repositories.map(r =>
        <Repository 
            name={r.name}
            owner={r.owner}
            stars={r.stars}
            primaryLanguage={r.primaryLanguage}
        />
    );

    return (<>
        <ResponsiveContainerGrid>
            <Grid item xs={12} sm={3}>
              <ResponsiveCard>
                {repos}
              </ResponsiveCard>
            </Grid>
          </ResponsiveContainerGrid>
    </>)
}

export default Results;
