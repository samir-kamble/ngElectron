import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import { LyTheme2, ThemeVariables } from '@alyle/ui';

const STYLES = (theme: ThemeVariables) => ({
  '@global': {
    body: {
      backgroundColor: theme.background.default,
      color: theme.text.default,
      fontFamily: theme.typography.fontFamily,
      margin: 0,
      direction: theme.direction
    },
    drawerContainer: {
      height: '270px',
      transform: 'translate3d(0,0,0)'
    },
    drawerContent: {
      padding: '1em'
    }
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly classes = this.theme.addStyleSheet(STYLES);
  mode = 'over';
  hasBackdrop: boolean | null = null;
  constructor(private theme: LyTheme2,
              public electronService: ElectronService,
              private translate: TranslateService) {
    translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Mode electron123');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }
}
