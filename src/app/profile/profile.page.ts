import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  id
  character
  constructor(
    private route:ActivatedRoute,
    private httpclient:HttpClient,
    private sanitizer: DomSanitizer
    ) {

   }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.httpclient.get('https://rickandmortyapi.com/api/character/'+this.id).subscribe(res=>{
      this.character=res
      console.log(this.character);
    });

  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}

}
