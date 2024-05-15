import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from '../song.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail-page.component.html',
  styleUrls: ['./song-detail-page.component.css']
})
export class SongDetailPageComponent implements OnInit {
  song: any;

  constructor(
    private route: ActivatedRoute,
    private songService: SongService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.songService.getSongById(id).subscribe(data => {
        this.song = data;
      });
    } else {
      console.error('Song ID is null');
    }
  }
}
