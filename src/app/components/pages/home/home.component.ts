import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/models/Moment';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment.development';

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

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
    this.load();
  }

  async load() {
    await this.momentService.getAll().subscribe((items) => {
      const data = items.data;
      const limitChar = 30;
      // Tratando as datas.
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
        item.title = item.title.length > limitChar ? `${item.title.substring(0, limitChar)} ...` : item.title;
      });

      this.moments = this.allMoments = data;
      this.loader = false;
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
