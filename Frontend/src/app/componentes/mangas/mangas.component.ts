import { Component, OnInit } from '@angular/core';
import { MangasService  } from "../../services/mangas.service";
import { Manga } from 'src/models/Manga';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.css']
})
export class MangasComponent implements OnInit {
  mangas : Array<Manga>

  constructor(private mangasService : MangasService) { 
    this.mangas = [
      new Manga ('','','','','',0,'')
    ]
  }

  ngOnInit(): void {
    this.mangasService.getMangas()
    .subscribe(
      res => {
        console.log(res);
        console.log('alo');
        console.log(res.mangas)
        for (let i = 0; i < res.mangas.length; i++) {
         this.mangas[i] = new Manga(
           res.mangas[i]._id,
           res.mangas[i].mangaName,
           res.mangas[i].mangaDescription,
           res.mangas[i].mangaDemography,
           res.mangas[i].mangaGender,
           res.mangas[i].mangaPrecio,
           res.mangas[i].imagePath
         )
 
        }
      
    
      },
      err => console.log
    )
  }

}
