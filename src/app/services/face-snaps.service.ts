import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
  providedIn: "root"
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [{
    id:1,
    title:"Logan",
    description: "Logan dit papa !",
    createdDate: new Date(),
    snaps: 100,
    imageUrl: "https://pbs.twimg.com/profile_images/859446866244665344/XB2yVxCj_400x400.jpg",
    location: "Bordeaux"
  }, {
    id:2,
    title: "Astrée",
    description: "Astrée boude !",
    createdDate: new Date(),
    snaps: 0,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Salvatore_Rosa_001.jpg",
    location: "Quelque part en Grèce"
  }, {
    id:3,
    title: "Victoria",
    description: "Victoria fait l'ado !",
    createdDate: new Date(),
    snaps: 0,
    imageUrl: "https://cultureauxtrousses.files.wordpress.com/2022/04/victoria-tout-savoir-sur-serie-qui-arrive-sur-cherie-septembre.jpg"
  }
  ];

  getAllFacesSnaps():FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId:number):FaceSnap {
    let faceSnap = this.faceSnaps.find(fs => fs.id === faceSnapId);
    if (faceSnap) {
      return faceSnap;
    }else {
      throw new Error('FaceSnap not found !')
    }
  }

  snapFaceSnapById(id:number, snapType: 'snap'|'unsnap'):void {
    let faceSnap = this.getFaceSnapById(id);
    snapType === "snap" ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
    const faceSnap: FaceSnap = {
      ...formValue,
      snaps: 0,
      createdDate: new Date(),
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    };
    this.faceSnaps.push(faceSnap);
  }

}
