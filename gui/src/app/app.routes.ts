import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurrentWorkoutComponent } from './current-workout/current-workout.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent
    }, 
    { 
        path: 'current-workout',
        component: CurrentWorkoutComponent
    }, 
    { 
        path: 'profile', 
        component: ProfileComponent
    }
];
