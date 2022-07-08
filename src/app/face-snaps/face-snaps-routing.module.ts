import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FaceSnapListComponent} from "./components/face-snap-list/face-snap-list.component";
import {SingleFaceSnapComponent} from "./components/single-face-snap/single-face-snap.component";
import {NewFaceSnapComponent} from "./components/new-face-snap/new-face-snap.component";
import {AuthGuard} from "../core/guards/auth.guard";

const routes : Routes = [
  { path: '', component: FaceSnapListComponent},
  { path: 'create', component: NewFaceSnapComponent },
  { path: ':id', component: SingleFaceSnapComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FaceSnapsRoutingModule { }
