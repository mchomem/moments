import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { faTimes, faEdit, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment.development';
import { Moment } from 'src/app/models/Moment';
import { Comment } from 'src/app/models/Comment';
import { MomentService } from 'src/app/services/moment/moment.service';
import { CommentService } from 'src/app/services/comment/comment.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-moment-detail',
  templateUrl: './moment-detail.component.html',
  styleUrls: ['./moment-detail.component.scss']
})
export class MomentDetailComponent implements OnInit {

  moment?: Moment;
  baseApiUrlServerImageFile: string = environment.baseApiUrl;
  faTimes = faTimes;
  faEdit = faEdit;
  faArrowLeft = faArrowLeft;
  commentForm!: FormGroup;

  constructor(private momentService: MomentService
    , private commentService: CommentService
    , public messageService: MessageService
    , private router: Router
    , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMomentDetail();
    this.commentFormInit();
  }

  commentFormInit() {
    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required)
    });
  }

  get text() {
    return this.commentForm.get('text')!;
  }

  get username() {
    return this.commentForm.get('username')!;
  }

  async getMomentDetail() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    await this.momentService.get(id).subscribe({
      next: (response) => this.moment = response.data
      , error: () => {
        //TODO: tratar casos de erro
      }
      , complete: () => { }
    });
  }

  async removeMoment(id: number) {
    await this.momentService.delete(id).subscribe({
      next: () => {
        this.messageService.add('Moment successfully deleted.');
        this.router.navigate(['/']);
      }
      , error: () => {
        //TODO: tratar casos de erro
      }
      , complete: () => { }
    });
  }

  async onSubmitComment(formDirective: FormGroupDirective) {
    if (this.commentForm.invalid) {
      return;
    }

    const data: Comment = this.commentForm.value;
    data.momentId = Number(this.moment!.id);

    await this.commentService.create(data).subscribe({
      next: (response) => {
        this.moment!.comments!.push(response.data)
        this.messageService.add('Comment added.');
        // Limpar formuário.
        this.commentForm.reset();
        formDirective.resetForm();
      }
      , error: () => {
        //TODO: tratar casos de erro
      }
      , complete: () => { }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
