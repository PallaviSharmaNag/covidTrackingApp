import { Component, OnInit } from '@angular/core';
import { INews } from 'src/app/shared/interfaces/INews';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsDetailService } from '../../core/services/news-detail.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  news: INews;
  newsForm: FormGroup;

  constructor(public fb: FormBuilder, private router: Router,
    private newsDetailService: NewsDetailService, private toastrService: ToastrService) { }

  ngOnInit() {
      this.newsForm = this.fb.group({
          title: ["", [Validators.required, Validators.minLength(10)]],
          description: [""],
          summary: [""],
          fullnews: ["", Validators.required]
      });
  }

  save(latestNews: INews) {
    this.newsDetailService.addNews(latestNews).subscribe();
    this.toastrService.success('News added successfully!', 'Covid Tracking App');
    this.router.navigate(['/homepage/latestnews']);
  }


}
