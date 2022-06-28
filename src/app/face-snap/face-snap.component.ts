import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  title!:string;
  description!:string;
  createdDate!: Date;
  snaps!:number;
  urlImg!: string;
  userSnapped!:boolean;
  buttonSnap!:string;

  ngOnInit(): void {
    this.buttonSnap = "Oh Snap!";
    this.userSnapped = false;
    this.title = "Logan";
    this.description = "Logan dit papa !";
    this.createdDate = new Date();
    this.snaps = 100000;
    this.urlImg ="https://pbs.twimg.com/profile_images/859446866244665344/XB2yVxCj_400x400.jpg";
  }

  onSnap(){
    if (!this.userSnapped){
      this.addSnap();
    }else {
      this.removeSnap();
    }
  }

  addSnap(){
    this.snaps++;
    this.userSnapped=true;
    this.buttonSnap = "Oops, unSnap!";
  }

  removeSnap(){
    this.snaps--;
    this.userSnapped=false;
    this.buttonSnap = "Oh Snap!";
  }
}
