import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { MenuItem } from './menuItems';
type NavItemProps = {
  item: MenuItem;
  level: number;
};

export const NavItem = ({ item, level }: NavItemProps) => {
  const router = useRouter();

  const itemIcon = item?.icon ? (
    <item.icon sx={{ size: '1.3rem' }} />
  ) : (
    <FiberManualRecordIcon
      sx={{ width: 8, height: 8 }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  const isSelected = router.pathname === item.url;

  return (
    <Link href={item.url}>
      <ListItemButton selected={isSelected}>
        <ListItemIcon sx={{ my: 'auto', minWidth: !item.icon ? 18 : 36 }}>
          {itemIcon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant='h6' color='inferit'>
              {item.title}
            </Typography>
          }
          secondary={
            item.caption && (
              <Typography variant='caption' display='block' gutterBottom>
                {item.caption}
              </Typography>
            )
          }
        />
      </ListItemButton>
    </Link>
  );
};
