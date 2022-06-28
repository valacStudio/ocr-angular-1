import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  userSnapped!:boolean;
  buttonSnap!:string;

  constructor(private faceSnapsService: FaceSnapsService) {
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

}
