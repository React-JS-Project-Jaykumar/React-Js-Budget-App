import React from 'react';
import { Segment,Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayBalances(props) {
    return (
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title='Incoming:' value='1223.44' color='green'/>
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance title='Expenses:' value='645.5' color='red'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
}

export default DisplayBalances;