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
import GridOrgs from './GridOrgs';
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
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function SimpleTabs(props) {
    const [value, setValue] = React.useState(0);
    const { userData, repos, loadingUser, loadingRepos, error_userData, orgs } = props

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid item xs={9} style={{ marginTop: '50px' }}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Datos" {...a11yProps(0)} disabled={!userData && true} />
                <Tab label="Repositorios" {...a11yProps(1)} disabled={!repos && true} />
                <Tab label="Organizaciones" {...a11yProps(2)} disabled={!orgs && true} />
            </Tabs>
            <TabPanel value={value} index={0} userData={userData}>
                <Grid container alignItems="center" justify={"center"}>
                    <Loader status={loadingUser} color={"primary"} />
                    {userData ? <UserCard data={userData} />
                        : error_userData ?
                            <Typography noWrap component="h2" id="incorrectUser" color={"secondary"}>
                                No se ha encontrado el usuario introducido, pruebe otro!
                            </Typography>
                            :
                            <Typography noWrap component="h2" color={"primary"}>
                                Busca un usuario de GitHub para que se muestren sus datos, repositorios y organizaciones...
                       </Typography>
                    }
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1} repos={repos}>
                <Grid container alignItems="center" justify={"center"}>
                    <Loader status={loadingRepos} color={"primary"} />
                    {repos && <GridRepos data={repos} />}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Loader status={loadingUser} color={"primary"} />
                {orgs && <GridOrgs data={orgs} />}
            </TabPanel>
        </Grid>
    );
}