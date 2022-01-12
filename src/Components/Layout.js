import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Tab, Tabs } from '@mui/material';
import { Link, Outlet, useLocation } from 'react-router-dom';
import NavDrawer from './NavDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

export default function Layout() {
	const [openDrawer, setOpenDrawer] = useState(true);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const [value, setValue] = useState(0);
	const handleTabChange = (event, newValue) => {
		setValue(newValue);
	};

	const location = useLocation();

	useEffect(() => {
		let path = location.pathname;
		if (path === '/' && value !== 0) setValue(0);
		else if (path === '/usmap' && value !== 1) setValue(1);
		else if (path === '/counties' && value !== 2) setValue(2);
		// else if (path === '/counties:*' && selectedTab !== 2) setSelectedTab(2); // need to find way to set tab indicator when on indexed route i.e. counties:'countiesID'.
	
	}, [value, location.pathname])

	return (
		<div
			style={{
				textAlign: 'center',
			}}
		>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar color='transparent' elevation={0} position='static' >
					<Toolbar>
						{isMobile ? (
							<NavDrawer
								openDrawer={openDrawer}
								setOpenDrawer={setOpenDrawer}
							/>
						) : (
							<Tabs centered  value={value} onChange={handleTabChange}>
								<Tab label='Home' to='/' component={Link}  />
								<Tab label='Map' to='/usmap' component={Link} />
								<Tab label='Counties' to='/counties' component={Link} />
							</Tabs>
						)}
						<Typography variant='h5' component='div' sx={{ flexGrow: 1, mr: '10%'}}>
							AdaptationApps.com
						</Typography>

						{isMobile ? (
							<IconButton onClick={() => setOpenDrawer(true)}>
								<MenuIcon />
							</IconButton>
						) : (
							<IconButton
								size='large'
								edge='start'
								color='inherit'
								aria-label='github'
								sx={{ mr: 0}}
								target='_blank'
								href='https://github.com/hugoguzman/fema-buyouts-orgtypes.git'
							>
								<GitHubIcon />
							</IconButton>
						)}
					</Toolbar>
				</AppBar>
			</Box>

			<Outlet />
			
		</div>
	);
}
