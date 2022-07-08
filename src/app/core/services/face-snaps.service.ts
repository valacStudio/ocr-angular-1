import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FaceSnapsService {

  constructor(private http: HttpClient) {
  }

  getAllFacesSnaps():Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>("http://localhost:3000/facesnaps");
  }

  getFaceSnapById(faceSnapId:number):Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  snapFaceSnapById(faceSnapId:number, snapType: 'snap'|'unsnap'):Observable<FaceSnap> {
    // let faceSnap = this.getFaceSnapById(id);
    // snapType === "snap" ? faceSnap.snaps++ : faceSnap.snaps--;
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps : faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updateFaceSnape => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`,updateFaceSnape))
    );
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
    return this.getAllFacesSnaps().pipe(
      map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
      map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
      map(previousFacesnap => ({
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: previousFacesnap.id + 1
      })),
      switchMap(newFacesnap => this.http.post<FaceSnap>(
        'http://localhost:3000/facesnaps',
        newFacesnap)
      )
    );
  }

}