import { Typography } from '@mui/material';

import { menuItems } from './menuItems';
import { NavGroup } from './NavGroup';

export const MenuList = (): JSX.Element => {
  const navItems = menuItems.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant='h6' color='error' align='center'>
            MenuList Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};
