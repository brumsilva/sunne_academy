import { Element } from './../../../../node_modules/chart.js/types/element.d';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Livro } from 'src/livro';
import { Analytics } from '../../../analytics';
import { AnalyticsService } from '../../../services/analytics.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LivroService } from 'src/services/livro.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  analytics!: Analytics[];
  month!: string[];
  monthTotals!: number[];
  total!: number[];

  genders!: Array<Object>;
  livros!: Livro[];
  labels!: String[];
  dataChart!: any[];

  @ViewChild('totalBooks', { static: true }) totalBooks?: ElementRef;

  @ViewChild('chart2', { static: true }) element?: ElementRef;

  @ViewChild('totalCount', { static: true }) totalCount?: ElementRef;

  @ViewChild('countByGender', { static: true }) totalPerGender?: ElementRef;

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit(): void {
    this.listarDados();
  }

  listarDados() {
    this.analyticsService.listar().subscribe((resultado) => {
      console.log(resultado);
      this.analytics = resultado;

      this.monthTotals = this.analytics.map((item) => item.monthTotals);
      console.log(this.monthTotals);

      this.month = this.analytics.map((item) => item.month);
      console.log(this.month);


      this.monthTotal();
      this.countByGender();
    });
  }

  monthTotal(): void {
    new Chart(this.totalBooks!.nativeElement, {
      type: 'bar',
      data: {
        labels: this.month ?? [],
        datasets: [
          {
            data: this.monthTotals ?? [],
            backgroundColor: '#ff8a34',
            hoverBorderColor: '#fce337',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }

  countByGender() {
    new Chart(this.totalPerGender!.nativeElement, {
      type: 'bar',
      data: {
        labels: [
          'Tecnologia',
          'Empreendedorismo',
          'Energias Renováveis',
          'Outros',
        ],
        datasets: [
          {
            data: [42, 50, 55, 73],
            backgroundColor: '#ff8a34',
            hoverBorderColor: '#fce337',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
