import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/models/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.scss']
})
export class NewMomentComponent implements OnInit {

  btnText: string = 'Share!';

  constructor(private momentService: MomentService
    , private messageService: MessageService
    , private router: Router) { }

  ngOnInit(): void { }

  async createHandler(moment: Moment) {
    const formData = new FormData();
    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.create(formData).subscribe();
    this.messageService.add('Moment created.');
    this.router.navigate(['/']);
  }
}
