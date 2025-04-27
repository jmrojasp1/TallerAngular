import { Component, Input, OnInit } from '@angular/core';
import { Series } from '../Series';
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent implements OnInit {
  @Input() seriesDetail: Series[] = [];
  averageSeasons: number = 0;
  selectedSerie: Series | null = null;


  constructor() {
    
  }
  
  ngOnInit(){
   this.seriesDetail=dataSeries;
   this.calculateAverageSeasons();
  }
  private calculateAverageSeasons(): void {
    this.averageSeasons = this.getAverageSeasons();
  }
  getAverageSeasons(): number {
    if (this.seriesDetail.length === 0) return 0;
    const totalSeasons = this.seriesDetail.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / this.seriesDetail.length;
  }
  selectSerie(serie: Series): void {
    this.selectedSerie = serie;
  }

}