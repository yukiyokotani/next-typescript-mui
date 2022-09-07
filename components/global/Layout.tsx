import {
  AppBar,
  Box,
  styled,
  Theme,
  Toolbar,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

import { drawerWidth, headerHeight } from '../../constants';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }: { theme: Theme; open: boolean }) => ({
    width: '100%',
    minHeight: `calc(100vh - ${headerHeight}px)`,
    flexGrow: 1,
    padding: '20px',
    marginTop: `${headerHeight}px`,
    ...(!open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      [theme.breakpoints.up('md')]: {
        marginLeft: -drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`
      },
      [theme.breakpoints.down('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px'
      },
      [theme.breakpoints.down('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px'
      }
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.down('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px'
      },
      [theme.breakpoints.down('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px'
      }
    })
  })
);

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const theme = useTheme();
  const matchDownSm = useMediaQuery(theme.breakpoints.down('md'));

  const [leftDrawerOpened, setLeftDrawerOpened] = useState(true);

  const handleLeftDrawerToggle = useCallback(() => {
    setLeftDrawerOpened(!leftDrawerOpened);
  }, [leftDrawerOpened]);

  useEffect(() => {
    setLeftDrawerOpened(!matchDownSm);
  }, [matchDownSm]);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* header */}
      <AppBar
        enableColorOnDark
        position='fixed'
        color='inherit'
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.paper,
          transition: leftDrawerOpened
            ? theme.transitions.create('width')
            : 'none'
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar
        drawerOpen={leftDrawerOpened}
        drawerToggle={handleLeftDrawerToggle}
      />

      {/* main content */}
      <Main theme={theme} open={leftDrawerOpened}>
        {children}
      </Main>
    </Box>
  );
};
