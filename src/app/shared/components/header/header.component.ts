import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
const styles = {
  drawerContainer: {
    height: '270px',
    transform: 'translate3d(0,0,0)'
  },
  drawerContent: {
    padding: '1em'
  }
};

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarWithIconsComponent {
  classes = this._theme.addStyleSheet(styles);
  mode = 'side';
  hasBackdrop: boolean | null = null;

  constructor(private _theme: LyTheme2) { }
}
