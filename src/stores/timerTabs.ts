import { makeAutoObservable } from 'mobx';
import AppTimer, { IAppTimer } from '@/stores/appTimer';
import { createContext } from 'react';

interface TimerTab {
  id: string;
  timer: IAppTimer;
  note: string;
}

export class TimerTabs {
  constructor() {
    makeAutoObservable(this);
    this._tabs = [TimerTabs.createTab()];
  }

  private _tabs: Array<TimerTab>;

  get tabs() {
    return this._tabs;
  }

  static createTab(): TimerTab {
    return {
      id: window.crypto.randomUUID(),
      timer: new AppTimer(),
      note: '',
    };
  }
  setNote(id: string, val: string) {
    const idx = this._tabs.findIndex((el) => el.id == id);
    if (idx == -1) {
      return;
    }
    const toUpdate = this._tabs.at(idx);
    if (toUpdate) {
      toUpdate.note = val;
      this._tabs = [...this._tabs];
    }
  }

  addTab(): string {
    const newTab = TimerTabs.createTab();
    this._tabs = [...this._tabs, newTab];
    return newTab.id;
  }
  closeTab(id: string) {
    this._tabs = this._tabs.filter((el) => el.id != id);
  }
}

export const TimerTabsContext = createContext(new TimerTabs());
