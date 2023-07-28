import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleAllComponent } from './article-all/article-all.component';
import { ArticleRoutingModule } from './article-all/article-routing.module';



@NgModule({
  declarations: [
    ArticleAllComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ],
  exports: [
    ArticleAllComponent
  ]
})
export class ArticleModule { }
