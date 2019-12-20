import { Component, OnInit, Type } from '@angular/core';
import { WindowComponent, WindowDelegate } from '../../window/window-delegate';
import { WalletAppService } from './wallet-app.service';

@Component({
  selector: 'app-wallet-app',
  templateUrl: './wallet-app.component.html',
  styleUrls: ['./wallet-app.component.scss']
})
export class WalletAppComponent extends WindowComponent implements OnInit {

  walletEdit: boolean;

  constructor(
    private walletAppService: WalletAppService
  ) {
    super();
    if (!this.walletAppService.wallet) {
      this.setWalletEditStatus(true);
    }
  }

  ngOnInit() {
  }

  setWalletEditStatus(status: boolean): void {
    this.walletEdit = status;
  }
}

export class WalletAppWindowDelegate extends WindowDelegate {
  title = 'Wallet';
  icon = 'assets/desktop/img/wallet_app.svg';
  type: Type<any> = WalletAppComponent;
}