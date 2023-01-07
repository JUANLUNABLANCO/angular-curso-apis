import { Component } from '@angular/core';

import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  // token='';
  imgFile = '';

  constructor(
    private usersService: UsersService,
    private filesService: FilesService
  ){}

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
  createUser() {
    this.usersService.create({
      name: 'Jonhy Deep',
      email: 'johnydeep@gmail.com',
      password: '12345678'
    })
    .subscribe(rta => {
      console.log(rta);
    });
  }

  downloadPDF() {
    this.filesService.getFile(
      'Angular 2 y el futuro de la web',
      '/assets/downloads/Angular 2 y el futuro de las arquitecturas web.pdf',
      'application/pdf'
      )
    .subscribe()
  }

  onUploadFile(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.filesService.uploadFile(file)
      .subscribe(response => {
        this.imgFile = response.location;
      });
    }
  }
}
