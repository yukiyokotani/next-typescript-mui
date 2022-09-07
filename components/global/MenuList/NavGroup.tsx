import { Divider, List, Typography } from '@mui/material';

import { MenuGroup } from './menuItems';
import { NavCollapse } from './NavCollapse';
import { NavItem } from './NavItem';

type MenuGroupProps = {
  item: MenuGroup;
};

export const NavGroup = ({ item }: MenuGroupProps) => {
  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case 'collapse':
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case 'item':
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={item.id} variant='h6' color='error' align='center'>
            MenuGroup Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        subheader={
          item.title && (
            <Typography variant='h5' display='block' gutterBottom>
              {item.title}
              {item.caption && (
                <Typography variant='caption' display='block' gutterBottom>
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
};
