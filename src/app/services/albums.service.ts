import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private firestore: AngularFirestore) {}

  form = new FormGroup({
    name: new FormControl(''),
    band: new FormControl(''),
    label: new FormControl(''),
    genre: new FormControl(''),
    producer: new FormControl(''),
    completed: new FormControl(false),
  });

  getAlbums() {
    return this.firestore.collection('albums').snapshotChanges();
  }

  createAlbum(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('albums')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }

  editAlbum(data, id) {
    return this.firestore.collection('albums').doc(id).update({
      name: data.name,
      band: data.band,
      genre: data.genre,
      label: data.label,
      producer: data.producer,
    });
  }

  deleteAlbum(id) {
    return this.firestore.collection('albums').doc(id).delete();
  }
}
