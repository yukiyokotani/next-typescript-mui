import { AppBar, Box, styled, Theme, Toolbar, useTheme } from '@mui/material';
import { useCallback, useState } from 'react';

import { drawerWidth, headerHeight } from '../../utils/constants';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }: { theme: Theme; open: boolean }) => ({
    backgroundColor: theme.palette.background.default,
    width: '100%',
    minHeight: `calc(100vh - ${headerHeight}px)`,
    flexGrow: 1,
    padding: '20px',
    marginTop: `${headerHeight}px`,
    marginRight: '20px',
    borderRadius: '8px',
    ...(!open && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      [theme.breakpoints.up('md')]: {
        marginLeft: -(drawerWidth - 20),
        width: `calc(100% - ${drawerWidth}px)`
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: '20px',
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px'
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '10px',
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px',
        marginRight: '10px'
      }
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.down('md')]: {
        marginLeft: '20px'
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '10px'
      }
    })
  })
);

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const theme = useTheme();

  const [leftDrawerOpened, setLeftDrawerOpened] = useState(true);

  const handleLeftDrawerToggle = useCallback(() => {
    setLeftDrawerOpened(!leftDrawerOpened);
  }, [leftDrawerOpened]);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* header */}
      <AppBar
        enableColorOnDark
        position='fixed'
        color='inherit'
        elevation={0}
        sx={{
          bgcolor: '#fff',
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
