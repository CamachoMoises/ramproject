import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {
  characters=[];

  constructor(private httpClient:HttpClient,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.httpClient.get('https://rickandmortyapi.com/api/character')
      .subscribe((res:any)=>{
        console.log(res);
        this.characters=res.results
      });
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}

}
