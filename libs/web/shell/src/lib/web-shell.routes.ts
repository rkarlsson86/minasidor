import { Routes } from '@angular/router'
import { LayoutComponent } from './layout/main/layout.component'

export const xactCheckoutShellRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        loadChildren: () =>
          import('@xact-checkout/web/home/feature').then((m) => m.WebHomeFeatureModule),
      },
      {
        path: 'sell',
        loadChildren: () =>
          import('@xact-checkout/web/sell').then((m) => m.WebSellModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
]
