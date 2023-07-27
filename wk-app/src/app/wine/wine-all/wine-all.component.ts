import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/types/wine';
import { WineService } from '../wine.service';

@Component({
  selector: 'app-wine-all',
  templateUrl: './wine-all.component.html',
  styleUrls: ['./wine-all.component.css']
})
export class WineAllComponent implements OnInit {
  wines: Wine[] = [];
  isLoading: boolean = true;

  constructor(private wineService: WineService) {}

  ngOnInit(): void {
    this.wineService.getAllWines().subscribe({
      next: (winesList) => {
        this.isLoading = false;
        console.log(winesList);
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      }
    });
  }

}
