import React from 'react';
import {Container,Grid,Paper,Box,Button} from '@material-ui/core';
import axios from 'axios';

class Home extends React.Component {
    render() {
        console.log(process.env.REACT_APP_API_KEY)
        return (
            <Grid container spacing={3}>

                <Grid item xs={3}>
                    <Box borderColor="primary.main" style={{border: "1px solid"}} borderRadius={12}>
                        <Button >Default</Button>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default Home;