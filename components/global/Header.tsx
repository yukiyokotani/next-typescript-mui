import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, ButtonBase, Typography, useTheme } from '@mui/material';

type HeaderProps = {
  handleLeftDrawerToggle: () => void;
};

export const Header = ({ handleLeftDrawerToggle }: HeaderProps) => {
  const theme = useTheme();

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexGrow: 1,
            alignItems: 'center'
          }}
        >
          <Typography variant='h4'>SAMPLE</Typography>
        </Box>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant='rounded'
            sx={{
              cursor: 'pointer',
              borderRadius: '8px',
              width: '34px',
              height: '34px',
              fontSize: '1.2rem',
              transition: 'all .2s ease-in-out',
              background: theme.palette.primary.light,
              color: theme.palette.primary.dark,
              '&:hover': {
                background: theme.palette.primary.dark,
                color: theme.palette.primary.light
              }
            }}
            onClick={handleLeftDrawerToggle}
            color='inherit'
          >
            <MenuIcon />
          </Avatar>
        </ButtonBase>
      </Box>

      {/* header search */}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />
    </>
  );
};
