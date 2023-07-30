import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment/moment.service';
import { Moment } from 'src/app/models/Moment';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { DataFormatService } from 'src/app/services/util/data-format.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrlServerImageFile: string = environment.baseApiUrl;
  faSearch = faSearch;
  faSpinner = faSpinner;
  seatchTerm: string = '';
  loader: boolean = true;

  constructor(private momentService: MomentService
    , private route: Router
    , private dataFormatService: DataFormatService) { }

  ngOnInit(): void {
    this.load();
  }

  async load() {
    await this.momentService.getAll().subscribe((items) => {
      const data = items.data;
      // Tratando as datas.
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
        item.title = this.dataFormatService.redux(item.title, 30);
      });

      this.moments = this.allMoments = data;
      this.loader = false;
    }, (error) => {
      this.route.navigate(['error']);
    });
  }

  search(event: Event): void {

    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();

    this.moments = this.allMoments.filter(moment => {
      return moment.title
        .toLocaleLowerCase()
        .includes(value);
    });

  }

}
