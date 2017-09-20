import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule',
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { 
        path: 'commissions', 
        loadChildren: './commissions/commissions.module#CommissionsModule',
      },
      { 
        path: 'transactions', 
        loadChildren: './transactions/transactions.module#TransactionsModule',
      },
      { 
        path: 'lands', 
        loadChildren: './lands/lands.module#LandsModule',
      },
      { 
        path: 'portfolio', 
        loadChildren: './portfolio/portfolio.module#PortfolioModule',
      },
      { 
        path: 'profile', 
        loadChildren: './profile/profile.module#ProfileModule',
      },
      {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule',
      },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' }
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
