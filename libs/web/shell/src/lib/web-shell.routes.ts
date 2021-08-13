import { Routes } from '@angular/router'
import { LayoutComponent } from './layout/main/layout.component'

export const xactCheckoutShellRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
]
