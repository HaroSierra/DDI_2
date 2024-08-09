import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../servicio/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  photos: string[] = [];
  showPhotos: boolean = false;

  constructor(private photoService: PhotoService) {}

  async ngOnInit() {
    this.loadPhotos();
  }

  loadPhotos() {
    this.photoService.listPhotos().subscribe((urls: string[]) => {
      this.photos = urls;
    });
  }

  takePhoto() {
    this.photoService.addPhoto();
    // Re-load photos after adding a new one
    this.loadPhotos();
  }

  deletePhoto(url: string) {
    this.photoService.deletePhoto(url);
    // Re-load photos after deleting one
    this.loadPhotos();
  }

  togglePhotos() {
    this.showPhotos = !this.showPhotos;
    if (this.showPhotos) {
      this.loadPhotos();
    }
  }
}
