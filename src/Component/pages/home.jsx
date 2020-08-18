import React from 'react';
import {Container,Grid,Paper,Box,Button} from '@material-ui/core';

class Home extends React.Component {
    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Box color="text.primary" borderRadius={16} borderColor="grey.500">
                        <Button>Default</Button>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                <Paper>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper>xs=3</Paper>
                </Grid>
            </Grid>
        )
    }
}

export default Home;