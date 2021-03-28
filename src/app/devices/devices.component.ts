import { Component, OnInit } from '@angular/core';

import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  deviceList = [{ deviceName: 'Flow Meter', imageurl: "flowMeter_01.jpg" }, { deviceName: 'Energy Meter', imageurl: "smaEnergyMeter.jpg" }];

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          devCard: { cols: 1, rows: 1 },
        };
      }

      return {
        columns: 3,
        devCard: { cols: 1, rows: 2 },
      };
    })
  )

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
