import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  searchToggleStatus: boolean;
  showTitle = false;
  constructor(public settings: SettingsService, private _cdr: ChangeDetectorRef, ) {
    if (!settings.layout.collapsed) {
      this.showTitle = true;
    };
  }

  toggleCollapsedSidebar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    if (!this.settings.layout.collapsed) {
      setTimeout(() => {
        this.showTitle = true;
        this._cdr.detectChanges();
      }, 50)
    } else {
      this.showTitle = false;
      this._cdr.detectChanges();
    }
  }

  searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }
}
