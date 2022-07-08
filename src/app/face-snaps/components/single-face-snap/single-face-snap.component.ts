import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap$!: Observable<FaceSnap>;

  userSnapped!:boolean;
  buttonSnap!:string;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(snapId);
    this.buttonSnap = "Oh Snap!";
    this.userSnapped = false;
  }

  onSnap(faceSnapId:number){
    if (!this.userSnapped){
      this.addSnap(faceSnapId);
    }else {
      this.removeSnap(faceSnapId);
    }
  }

  addSnap(faceSnapId:number){
    this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId,'snap').pipe(
      tap(()=>{
        this.userSnapped=true;
        this.buttonSnap = "Oops, unSnap!";
      })
    );

  }

  removeSnap(faceSnapId:number){
    this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId,'unsnap').pipe(
      tap(()=>{
        this.userSnapped=false;
        this.buttonSnap = "Oh Snap!";
      })
    );
  }

}
