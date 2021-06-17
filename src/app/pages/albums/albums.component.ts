import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlbumsService } from '../../services/albums.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  constructor(
    private albumsService: AlbumsService,
    public dialog: MatDialog,
    public loader: LoadingService
  ) {}

  loading$ = this.loader.loading$;
  albums;

  ngOnInit() {
    this.albumsService.getAlbums().subscribe((res) => {
      this.albums = res;
    });
  }

  openDialog() {
    this.dialog.open(AddAlbumDialog);
  }

  openDelete(album) {
    this.dialog.open(DeleteAlbumDialog, {
      data: {
        id: album.payload.doc.id,
      },
    });
  }

  openEdit(album) {
    this.dialog.open(EditAlbumDialog, {
      data: {
        id: album.payload.doc.id,
        name: album.payload.doc.data().name,
        band: album.payload.doc.data().band,
        genre: album.payload.doc.data().genre,
        label: album.payload.doc.data().label,
        producer: album.payload.doc.data().producer,
      },
    });
  }
}

@Component({
  selector: 'add-album-dialog',
  templateUrl: 'add-album-dialog.html',
})
export class AddAlbumDialog {
  constructor(
    public formBuilder: FormBuilder,
    public albumsService: AlbumsService
  ) {}
  newAlbumForm = this.formBuilder.group({
    name: new FormControl(null, [Validators.required]),
    band: new FormControl(null, [Validators.required]),
    genre: new FormControl(null, [Validators.required]),
    label: new FormControl(null, [Validators.required]),
    producer: new FormControl(null, [Validators.required]),
  });

  onAdd() {
    let data = this.newAlbumForm.value;
    this.albumsService.createAlbum(data);
  }
}

@Component({
  selector: 'edit-album-dialog',
  templateUrl: 'edit-album-dialog.html',
})
export class EditAlbumDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Data,
    public formBuilder: FormBuilder,
    public albumsService: AlbumsService
  ) {}
  editAlbumForm = this.formBuilder.group({
    name: new FormControl(null, [Validators.required]),
    band: new FormControl(null, [Validators.required]),
    genre: new FormControl(null, [Validators.required]),
    label: new FormControl(null, [Validators.required]),
    producer: new FormControl(null, [Validators.required]),
  });

  onEdit(id) {
    let data = this.editAlbumForm.value;
    this.albumsService.editAlbum(data, id);
  }
}

@Component({
  selector: 'delete-album-dialog',
  templateUrl: 'delete-album-dialog.html',
})
export class DeleteAlbumDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Data,
    public albumsService: AlbumsService
  ) {}

  deleteAlbum = (data) => this.albumsService.deleteAlbum(data);
}
