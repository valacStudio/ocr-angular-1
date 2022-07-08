import {RouterModule, Routes} from "@angular/router";
import {FaceSnapListComponent} from "../face-snaps/components/face-snap-list/face-snap-list.component";
import {NewFaceSnapComponent} from "../face-snaps/components/new-face-snap/new-face-snap.component";
import {SingleFaceSnapComponent} from "../face-snaps/components/single-face-snap/single-face-snap.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";

const routes : Routes = [
  { path: 'auth/login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
