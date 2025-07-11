import { ChangeDetectionStrategy, Component } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-targoids',
  standalone: false,
  templateUrl: './targoids.component.html',
  styleUrl: './targoids.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TargoidsComponent {

}
