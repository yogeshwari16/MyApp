import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'home',
    name: 'Home',
    type: 'link',
    icon: '',

  },
  {
    state: 'profile',
    name: 'Profile',
    type: 'link',
    icon: '',
  },
  {
    state: 'skills',
    subState: 'dashboard',
    name: 'My Skills',
    type: 'link',
    icon: '',
  },
  {
    state: 'projects',
    name: 'Projects',
    type: 'link',
    icon: '',
  },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
