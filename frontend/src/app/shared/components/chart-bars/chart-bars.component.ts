import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { ChartBarsType } from 'src/app/shared/models/chartBars.model';
import { PrimengModule } from '../../modules/primeng/primeng.module';

@Component({
    selector: 'af-chartBars',
    templateUrl: './chart-bars.component.html',
    styleUrls: ['./chart-bars.component.scss'],
    standalone: true,
    imports: [SharedModule, PrimengModule],

})
export class ChartBarsComponent implements OnInit {
    @Input() public type: ChartBarsType | undefined;
    @Input() public data: any;
    @Input() public options: any;

    constructor() {

    }
    public ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = "blue";
        const textColorSecondary = "red";
        const surfaceBorder = "green";

        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: "red",
                    tension: 0.4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: "blue",
                    tension: 0.4
                }
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
}
