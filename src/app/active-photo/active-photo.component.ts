import { PhotoService } from './../srvices/photo.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../interface/photo';

@Component({
  selector: 'app-active-photo',
  templateUrl: './active-photo.component.html',
  styleUrls: ['./active-photo.component.scss']
})
export class ActivePhotoComponent implements OnInit {
  activePhoto$: Observable<Photo | undefined> = this.photoService.activePhoto$;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
  }

  hidePhoto() {
    this.photoService.activePhotoID$.next(this.photoService.noPhotoID);
  }

}
