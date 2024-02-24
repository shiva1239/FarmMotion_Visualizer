import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FarmListComponent } from './farm/farm-list/farm-list.component';
import { FarmCreateComponent } from './farm/farm-create/farm-create.component';
import { FarmDetailComponent } from './farm/farm-detail/farm-detail.component';
import { FarmUpdateComponent } from './farm/farm-update/farm-update.component';
import { MovementListComponent } from './movement/movement-list/movement-list.component';
import { MovementCreateComponent } from './movement/movement-create/movement-create.component';
import { MovementDetailComponent } from './movement/movement-detail/movement-detail.component';
import { MovementUpdateComponent } from './movement/movement-update/movement-update.component';
import { UploadFileComponent } from './upload/upload-file/upload-file.component';
import { UploadMovmentComponent } from './upload/upload-movment/upload-movment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AnimalMovementVisualizationComponent } from './animal-movement-visualization/animal-movement-visualization.component';



const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  //farm routes
  { path: 'farms', component: FarmListComponent },
  { path: 'farms/create', component: FarmCreateComponent },
  { path: 'farms/{:id}', component: FarmDetailComponent },
  { path: 'farms/update/:id', component: FarmUpdateComponent },
  


  // Movement routes
  { path: 'movements', component: MovementListComponent },
  { path: 'movements/create', component: MovementCreateComponent },
  { path: 'movements/:id', component: MovementDetailComponent },
  { path: 'movements/update/:id', component: MovementUpdateComponent },
  { path: 'movements/update/:id', component: MovementUpdateComponent },
  { path: 'visualize', component: AnimalMovementVisualizationComponent },

  { path: 'upload-file', component: UploadFileComponent },
  {path:'upload-movement',component:UploadMovmentComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
