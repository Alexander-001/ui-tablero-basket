import { Component } from '@angular/core';
import { Fouls, Score, Timeouts } from '../../interfaces/scoreboard.interface';

@Component({
  selector: 'scoreboard-page-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  constructor() {}

  public countdown: string = '00:00';
  public changeTitle: boolean = false;
  public alertCountdown: string = '';
  public showScoreModal: boolean = false;
  public clickPause: boolean = false;
  public score: Score = { home: 0, visit: 0, disabledClick: true };
  public fouls: Fouls = { foulsHome: 0, foulsVisit: 0 };
  public timeouts: Timeouts = { timeoutsHome: 0, timeoutsVisit: 0 };
  public period: number = 1;

  private intervalId: any = null;

  //* Header actions: Home and Away
  onClickNextHome() {
    if (this.score.disabledClick) return;
    this.score.home += 1;
  }

  onClickBackHome() {
    console.log('aca :!', this.score);
    this.score.home -= 1;
  }

  onClickNextVisit() {
    if (this.score.disabledClick) return;
    this.score.visit += 1;
  }

  onClickBackVisit() {
    this.score.visit -= 1;
  }

  //* Countdown
  onClickTapToStart(minutes: number, seconds?: number) {
    if (typeof seconds === 'undefined') {
      seconds = 0;
      this.score = { home: 0, visit: 0, disabledClick: false };
      this.fouls = { foulsHome: 0, foulsVisit: 0 };
      this.timeouts = { timeoutsHome: 0, timeoutsVisit: 0 };
      this.period = 1;
    }
    const currentTime: number = new Date().getTime();
    const durationInMilliseconds: number = (minutes * 60 + seconds) * 1000;
    const targetDate: Date = new Date(currentTime + durationInMilliseconds);
    this.changeTitle = true;
    this.intervalId = setInterval(() => {
      const currentTime: number = new Date().getTime();
      const distance: number = targetDate.getTime() - currentTime;
      if (distance <= 0) {
        this.onStop();
        this.countdown = '00:00';
      } else {
        const minutes: string = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        )
          .toString()
          .padStart(2, '0');
        const seconds: string = Math.floor((distance % (1000 * 60)) / 1000)
          .toString()
          .padStart(2, '0');
        this.countdown = `${minutes}:${seconds}`;
        if (minutes === '00' && parseInt(seconds) <= 10) {
          this.alertCountdown = seconds;
        }
      }
    }, 1000);
  }

  onStop() {
    this.clearIntervalCountdown();
    this.countdown = '00:00';
    this.changeTitle = false;
    this.score.disabledClick = true;
    this.alertCountdown = '';
  }

  onClickPause() {
    this.clearIntervalCountdown();
    this.clickPause = true;
  }

  onClickPlay() {
    const splitCountdown = this.countdown.split(':');
    this.clickPause = false;
    this.onClickTapToStart(
      parseInt(splitCountdown[0]),
      parseInt(splitCountdown[1]) + 1
    );
  }

  showModalCountdown() {
    if (!this.score.disabledClick) return;
    this.showScoreModal = !this.showScoreModal;
  }

  clearIntervalCountdown() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  //* Body actions: Fouls
  onClickNextFoulsHome() {
    if (this.score.disabledClick) return;
    this.fouls.foulsHome += 1;
  }

  onClickBackFoulsHome() {
    this.fouls.foulsHome -= 1;
  }

  onClickNextFoulsVisit() {
    if (this.score.disabledClick) return;
    this.fouls.foulsVisit += 1;
  }

  onClickBackFoulsVisit() {
    this.fouls.foulsVisit -= 1;
  }

  //* Footer actions: Timeouts
  onClickNextTimeoutHome() {
    if (this.score.disabledClick) return;
    this.timeouts.timeoutsHome += 1;
  }

  onClickBackTimeoutHome() {
    this.timeouts.timeoutsHome -= 1;
  }

  onClickNextTimeoutVisit() {
    if (this.score.disabledClick) return;
    this.timeouts.timeoutsVisit += 1;
  }

  onClickBackTimeoutVisit() {
    this.timeouts.timeoutsVisit -= 1;
  }

  //* Period
  onClickNextPeriod() {
    if (this.score.disabledClick) return;
    this.period += 1;
  }

  onClickBackPeriod() {
    if (this.period > 1) {
      this.period -= 1;
    }
  }
}
