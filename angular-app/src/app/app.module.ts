import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FarmListComponent } from './farm/farm-list/farm-list.component';
import { FarmCreateComponent } from './farm/farm-create/farm-create.component';
import { FarmDetailComponent } from './farm/farm-detail/farm-detail.component';
import { FarmUpdateComponent } from './farm/farm-update/farm-update.component';
import { MovementDetailComponent } from './movement/movement-detail/movement-detail.component';
import { MovementUpdateComponent } from './movement/movement-update/movement-update.component';
import { MovementCreateComponent } from './movement/movement-create/movement-create.component';
import { MovementListComponent } from './movement/movement-list/movement-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UploadFileComponent } from './upload/upload-file/upload-file.component';
import { UploadMovmentComponent } from './upload/upload-movment/upload-movment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    FarmListComponent,
    FarmCreateComponent,
    FarmDetailComponent,
    FarmUpdateComponent,
    MovementCreateComponent,
    MovementListComponent,
    MovementDetailComponent,
    MovementUpdateComponent,
    UploadFileComponent,
    UploadMovmentComponent,
    LoginComponent,
    RegisterComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
