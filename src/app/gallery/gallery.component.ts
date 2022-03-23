import { Component, OnInit } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Photo } from '../interface/photo';
import { PhotoService } from '../srvices/photo.service';
import { v4 as uuidv4 } from 'uuid';
import { FileContent, readFileContent } from "../read-file-content"

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  photosList: Observable<Photo[]> = this.photosService.photos$;
  filesCollection = ""

  constructor(private photosService: PhotoService) {}

  ngOnInit(): void {
  }

  handleFileInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const images = target.files ?? [];
    const imagesCollection = Array.from(images)
    const imagesContent: Array<Promise<FileContent>> =
        imagesCollection.map(file => readFileContent(file))

    const uploadedImages$ = forkJoin(imagesContent).pipe(
        map(imagesSources => {
            const imagesWithSource = imagesCollection.map(
                (image, idx) => ({
                    name: image.name,
                    id: uuidv4(),
                    url: imagesSources[idx]
                })
            )

            return imagesWithSource
        }),
    )
        
    uploadedImages$.subscribe(
        photos => this.photosService.addData(photos)
    )
}

}
