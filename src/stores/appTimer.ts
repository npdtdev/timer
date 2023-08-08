import { makeAutoObservable } from 'mobx';

export interface IAppTimer {
  isPaused: boolean;
  secondsLeft: number;
  seconds: number;
  elapsed: number;
  hasFinished: boolean;
  pause: VoidFunction;
  start: VoidFunction;
  restart: VoidFunction;
  setSeconds: (s: number) => void;
}

export default class AppTimer implements IAppTimer {
  constructor() {
    makeAutoObservable(this);
  }
  get elapsed() {
    return this._elapsed;
  }

  private _isPaused = true;
  private _seconds = 0;
  private _elapsed = 0;

  private intervalFn: NodeJS.Timer | undefined;
  get hasFinished() {
    return this.secondsLeft < 0;
  }
  get isPaused() {
    return this._isPaused;
  }

  get seconds() {
    return this._seconds;
  }

  get secondsLeft() {
    return this._seconds - this._elapsed;
  }

  pause() {
    clearInterval(this.intervalFn);
    this._isPaused = true;
  }

  start() {
    this.intervalFn = setInterval(() => {
      this._handleTick();
    }, 1000);
    this._isPaused = false;
  }

  restart() {
    clearInterval(this.intervalFn);
    this._elapsed = 0;
  }

  _handleTick() {
    this._elapsed = this._elapsed + 1;
  }

  setSeconds(s: number) {
    if (s < 0) {
      throw new Error('Must be greater than 0');
    }
    if (!this._isPaused) {
      throw new Error('Timer must be first paused');
    }
    this._elapsed = 0;
    this._seconds = s;
  }
}
