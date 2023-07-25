import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Moment } from 'src/app/models/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-moment-edit',
  templateUrl: './moment-edit.component.html',
  styleUrls: ['./moment-edit.component.scss']
})
export class MomentEditComponent implements OnInit {

  moment!: Moment;
  btnText: string = 'Edit';

  constructor(private momentService: MomentService
    , private router: Router
    , private activatedRoute: ActivatedRoute
    , public messageService: MessageService) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.momentService.get(id).subscribe((response) => {
      this.moment = response.data;
      console.log(response.data);
      console.log(this.moment);
    });
  }

  async editHandler(momentData: Moment) {
    const id = this.moment.id;

    const formData = new FormData();
    formData.append('title', momentData.title);
    formData.append('description', momentData.description);

    if (momentData.image) {
      formData.append('image', momentData.image);
    }

    await this.momentService.update(id!, formData).subscribe(() => {
      this.messageService.add(`Moment ${id} was successfully updated.`);
      this.router.navigate(['/']);
    });
  }

}
