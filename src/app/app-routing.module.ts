import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from "./body/body.component";
import { MainComponent } from "./main/main.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  { path: 'Header', component: HeaderComponent },
  { path: 'Body', component: BodyComponent },
  { path: 'Main', component: MainComponent },
  { path: 'Welcome', component: WelcomeComponent },
  { path: '**', redirectTo: '/Welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeaderComponent, BodyComponent, MainComponent, WelcomeComponent];
