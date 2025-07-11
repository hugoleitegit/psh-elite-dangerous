import { Routes } from '@angular/router';

export const routes: Routes = [
    /**
     * Esta ruta hace que el layout no se recargue al moverse por la página
     */
    {
        path:'',
        loadComponent: () => import('./components/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'materials',
                loadChildren: () => import('./pages/materials/materials.module').then(m => m.MaterialsModule)
            },
            {
                path: 'targoids',
                loadChildren: () => import('./pages/targoids/targoids.module').then(m => m.TargoidsModule)
            },
            {
                path: 'fleetcarriers',
                loadChildren: () => import('./pages/fleetcarriers/fleetcarriers.module').then(m => m.FleetcarriersModule)
            }
        ]
    },
    /* {
        path: 'materials',
        loadComponent: () => import('./components/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/targoids/targoids.module').then(m => m.TargoidsModule)
            }
        ]
    }, */
    /* {
        path: 'targoids',
        loadComponent: () => import('./components/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/targoids/targoids.module').then(m => m.TargoidsModule)
            }
        ]
    }, */
    /* {
        path: 'fleetcarriers',
        loadComponent: () => import('./components/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
            }
        ]
    }, */
];
