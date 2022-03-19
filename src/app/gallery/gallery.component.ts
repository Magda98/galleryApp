import { Component, OnInit } from '@angular/core';
import { Photo } from '../interface/photo';
import { PhotoService } from '../srvices/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  photosList: Photo[] = this.photosService.photos;

  constructor(private photosService: PhotoService) {}

  ngOnInit(): void {
  }

}
