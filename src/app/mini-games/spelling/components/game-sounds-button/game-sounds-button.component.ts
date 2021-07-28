import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { soundOf, soundOn } from 'src/app/redux/actions/spelling.actions';
import { AppState } from 'src/app/redux/models/state.model';
import { selectIsSoundOnBool } from 'src/app/redux/selectors/spelling.selectors';
import { MiniGamesSettingsService } from 'src/app/services/mini-games-settings.service';

@Component({
  selector: 'app-spelling-game-sounds-button',
  templateUrl: './game-sounds-button.component.html',
  styleUrls: ['./game-sounds-button.component.scss'],
})
export class SpellingGameSoundsButtonComponent implements OnInit {
  isSoundOn$!: Observable<boolean>;

  constructor(private store: Store<AppState>, private settingsService: MiniGamesSettingsService) {}

  ngOnInit() {
    this.isSoundOn$ = this.store.select(selectIsSoundOnBool);
  }

  soundON() {
    this.store.dispatch(soundOn());
    this.settingsService.changeMutedState();
  }

  soundOFF() {
    this.store.dispatch(soundOf());
    this.settingsService.changeMutedState();
  }
}
