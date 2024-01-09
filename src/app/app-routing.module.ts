//  import necessary elements 
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import bootstrap from "../main.server";

// routes for the home about and contact with its component 

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];

// keep getting error message about no call signature, 'validtors' and declaration expection
// page appears blank
// @new NgModel({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule],
// })

export class AppRoutingModule {}