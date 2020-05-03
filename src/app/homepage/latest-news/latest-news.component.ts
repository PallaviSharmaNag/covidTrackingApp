import { Component, OnInit } from '@angular/core';
import { NewsDetailService } from 'src/app/core/services/news-detail.service';
import { INews } from '../../shared/interfaces/INews';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  news: INews[];

  constructor(private newsDetailService: NewsDetailService) { }

  ngOnInit(): void {
    this.listAllNews();  
  }

  listAllNews() {
    this.newsDetailService.getNewsDetails().subscribe(data => {
      this.news = data;
    });
  }

}
