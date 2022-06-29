import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  userSnapped!:boolean;
  buttonSnap!:string;

  constructor(private faceSnapsService: FaceSnapsService, private router: Router) {
  }

  ngOnInit(): void {
    this.buttonSnap = "Oh Snap!";
    this.userSnapped = false;
  }

  onSnap(){
    if (!this.userSnapped){
      this.addSnap();
    }else {
      this.removeSnap();
    }
  }

  addSnap(){
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
    this.userSnapped=true;
    this.buttonSnap = "Oops, unSnap!";
  }

  removeSnap(){
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
    this.userSnapped=false;
    this.buttonSnap = "Oh Snap!";
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
