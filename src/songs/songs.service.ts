import { Injectable } from '@nestjs/common';
import { Song } from './songs.model';

@Injectable()
export class SongsService {
  private readonly songs: Song[] = [];

  createSong(song: Song): Song[] {
    // save the song in db
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch all songs from db
    return this.songs;
  }
}
