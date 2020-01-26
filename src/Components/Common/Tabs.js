import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import UserCard from './UserCard';
import GridRepos from './GridRepos';
import Loader from './Loader';

function TabPanel(props) {
    const { children, value, index, userData, repos, loadingUser, loadingRepos, ...other } = props;

    return (
        <React.Fragment>
            <Typography
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box p={3}>{children}</Box>}
            </Typography>
        </React.Fragment>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    userData: PropTypes.object,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function SimpleTabs(props) {
    const [value, setValue] = React.useState(0);
    const { userData, repos, loadingUser, loadingRepos } = props

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid item xs={9} style={{ marginTop: '50px' }}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Datos del usuario" {...a11yProps(0)} disabled={!userData && true} />
                <Tab label="Repositorios" {...a11yProps(1)} disabled={!repos && true} />
                <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0} userData={userData}>
                <Grid container xs={4} justify={"center"}>
                    <Loader status={loadingUser} color={"primary"} />
                    {userData && <UserCard data={userData} />}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1} repos={repos}>
                <Loader status={loadingRepos} color={"secondary"} />
                {repos && <GridRepos data={repos} />}
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
      </TabPanel>
        </Grid>
    );
}