import { SvgIconComponent } from '@mui/icons-material';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';

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
      }
    ]
  }
];
