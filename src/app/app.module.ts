import { BrowserModule } from "@angular/platform-browser";
import { NgModel } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { AppComponent } from "./app.component";

@NgModel({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
});

export class AppModule {}