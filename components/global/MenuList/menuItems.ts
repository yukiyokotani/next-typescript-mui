import { SvgIconComponent } from '@mui/icons-material';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SegmentIcon from '@mui/icons-material/Segment';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

export type MenuGroup = {
  id: string;
  title?: string;
  caption?: string;
  type: 'group';
  children?: Array<MenuCollapse | MenuItem>;
};

export type MenuCollapse = {
  id: string;
  title?: string;
  caption?: string;
  type: 'collapse';
  icon?: SvgIconComponent;
  children?: MenuItem[];
};

export type MenuItem = {
  id: string;
  title?: string;
  caption?: string;
  type: 'item';
  url: string;
  icon?: SvgIconComponent;
  target?: boolean;
  disabled?: boolean;
};

export const menuItems: MenuGroup[] = [
  {
    id: 'sample',
    title: 'Sample',
    caption: '実装サンプル',
    type: 'group',
    children: [
      {
        id: 'typography',
        title: 'Typography',
        type: 'item',
        url: '/sample/typography',
        icon: FontDownloadOutlinedIcon
      },
      {
        id: 'layout',
        title: 'Layout',
        type: 'item',
        url: '/sample/layout',
        icon: ViewQuiltIcon
      }
    ]
  },
  {
    id: 'menu-level',
    title: 'Menu Levels',
    caption: 'メニューレベル',
    type: 'group',
    children: [
      {
        id: 'level1-item',
        title: 'Level1 Item',
        type: 'item',
        url: '/#1',
        icon: MenuIcon
      },
      {
        id: 'level1-cpllapse',
        title: 'Level1 Collapse',
        type: 'collapse',
        icon: SegmentIcon,
        children: [
          {
            id: 'level2-item1',
            title: 'Level2 Item1',
            type: 'item',
            url: '#2'
          },
          {
            id: 'level2-item2',
            title: 'Level2 Item2',
            type: 'item',
            url: '#3'
          }
        ]
      }
    ]
  }
];
