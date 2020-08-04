import { Dashboard, PickUp, Schedule, Settings } from '../../pages/dashboard/'

export const routes = [
  {
    primaryText: 'Dashboard',
    icon: 'dashboard',
    path: '/dashboard',
    exact: false,
    component: Dashboard
  },
  {
    primaryText: 'Schedule',
    icon: 'event_note',
    path: '/schedule',
    exact: false,
    component: Schedule
  },
  {
    primaryText: 'Pick Up',
    icon: 'delete_sweep',
    path: '/pickup',
    exact: false,
    component: PickUp
  },
  {
    primaryText: 'Settings',
    icon: 'settings',
    path: '/settings',
    exact: false,
    component: Settings
  }
]
