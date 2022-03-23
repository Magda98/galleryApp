import { PhotoService } from './../srvices/photo.service';
import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../interface/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photo!: Photo;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
  }

  onPhotoClick(id: string) {
    console.log(id);
    this.photoService.activePhotoID$.next(id)
  }

}
