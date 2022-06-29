import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;

  userSnapped!:boolean;
  buttonSnap!:string;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
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
