import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { MangasService } from "../../services/mangas.service";
import { Manga } from "../../../models/Manga";
@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {
  
  id!: string;
  manga!: Manga;

  constructor(
    private activeRoute : ActivatedRoute,
    private router : Router,
    private mangasService : MangasService
  ) { 
    
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params=>{
      this.id = params['id'];
      this.mangasService.getManga(this.id).subscribe(
        res => {
          this.manga = res;
          console.log(this.manga)
        },
        err => console.log(err)
      )
      console.log(this.id)
    }) 
  }

}
