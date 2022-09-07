import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, ButtonBase, Typography, useTheme } from '@mui/material';
import Link from 'next/link';

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
        <Link href='/'>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <Typography variant='h4'>SAMPLE</Typography>
          </Box>
        </Link>
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
              background: theme.palette.action.selected,
              color: theme.palette.text.secondary,
              '&:hover': {
                background: theme.palette.action.selected,
                color: theme.palette.text.primary
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
