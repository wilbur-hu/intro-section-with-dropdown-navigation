export type MenuItem = {
  icon?: string | null;
  label: string;
  subMenu?: MenuItem[];
};
export type MenuData = MenuItem[];
