import { Box, Drawer, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { drawerWidth, headerHeight } from '../../utils/constants';

type SidebarProps = {
  drawerOpen: boolean;
  drawerToggle: () => void;
};

export const Sidebar = ({ drawerOpen, drawerToggle }: SidebarProps) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  const drawer = (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
          <div>test</div>
        </Box>
      </Box>
    </>
  );

  return (
    <Box
      component='nav'
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}
      aria-label='mailbox folders'
    >
      <Drawer
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor='left'
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: '#fff',
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