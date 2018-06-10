import { Component } from '@angular/core';
import { DatacarrierService } from './core/datacarrier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatacarrierService]
})
export class AppComponent {
  title = 'app works!';
}
