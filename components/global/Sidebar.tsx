import { Box, Drawer, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { drawerWidth, headerHeight } from '../../utils/constants';

import { MenuList } from './MenuList/MenuList';

type SidebarProps = {
  drawerOpen: boolean;
  drawerToggle: () => void;
};

export const Sidebar = ({ drawerOpen, drawerToggle }: SidebarProps) => {
  const theme = useTheme();
  const matchDownSm = useMediaQuery(theme.breakpoints.down('md'));

  const drawer = (
    <>
      <Box padding={2}>
        <MenuList />
      </Box>
    </>
  );

  return (
    <Box
      component='nav'
      sx={{ flexShrink: { md: 0 }, width: matchDownSm ? 'auto' : drawerWidth }}
      aria-label='mailbox folders'
    >
      <Drawer
        variant={matchDownSm ? 'temporary' : 'persistent'}
        anchor='left'
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: theme.palette.background.paper,
            color: theme.palette.text.primary,
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: `${headerHeight}px`
            }
          }
        }}
        ModalProps={{ keepMounted: true }}
        color='inherit'
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
