import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartOptions } from 'chart.js';
import { NgChartjsModule } from 'ng-chartjs';

interface UserData {
  streaming: number;
  download: number;
  upload: number;
  web: number;
  social: number;
  gaming: number;
  others: number;
  customer_id: number;
}

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-data-usage-dashboard',
  templateUrl: './data-usage-dashboard.component.html',
  styleUrls: ['./data-usage-dashboard.component.css']
})
export class DataUsageDashboardComponent  {
  users: User[] = [
    { id: 1, name: "Ahmed Ali" },
    { id: 2, name: "Salma Elsayed" },
    { id: 3, name: "Ali Farid" },
    { id: 4, name: "Alaa Mohamed" },
  ];

  userData: UserData[] = [
    { streaming: 10, download: 10, upload: 5, web: 10, social: 8, gaming: 12, others: 5, customer_id: 1 },
    { streaming: 20, download: 40, upload: 50, web: 25, social: 28, gaming: 22, others: 7, customer_id: 2 },
    { streaming: 70, download: 20, upload: 15, web: 9, social: 4, gaming: 32, others: 3, customer_id: 3 },
    { streaming: 50, download: 45, upload: 23, web: 35, social: 18, gaming: 22, others: 25, customer_id: 4 }
  ];

  selectedUser: User | null = null;

  doughnutChart!: Chart<'doughnut', number[], unknown>;
  progressiveLineChart!: Chart<'line', number[], unknown>;
  barChart!: Chart<'bar', number[], unknown>;
  showMessage  = true
  constructor() { }

  ngOnInit() {
   
    if (this.users.length > 0) {
      //this.selectedUser = this.users[0];
      this.createDoughnutChart();
      this.createProgressiveLineChart();
      this.createBarChart();
      this.updateCharts();
    }
  }

  selectUser(user: User) {
    this.selectedUser = user;
    this.showMessage  = false;
    this.updateCharts();
  }
  dismissMessage() {
    this.showMessage  = false; 
  }
  private updateCharts() {
    const userData = this.userData.find(data => data.customer_id == this.selectedUser?.id);

    if (userData) {
      // Update doughnut chart
      this.doughnutChart.data.datasets[0].data = [
        userData.streaming,
        userData.download,
        userData.upload,
        userData.web,
        userData.social,
        userData.gaming,
        userData.others
      ];
      this.doughnutChart.update();

      // Update line chart
      this.progressiveLineChart.data.datasets[0].data = [
        userData.streaming,
        userData.download,
        userData.upload,
        userData.web,
        userData.social,
        userData.gaming,
        userData.others
      ];
      this.progressiveLineChart.update();

      // Update bar chart
      this.barChart.data.datasets[0].data = [
        userData.streaming,
        userData.download,
        userData.upload,
        userData.web,
        userData.social,
        userData.gaming,
        userData.others
      ];
      this.barChart.update();
    }
  }

  createDoughnutChart() {
    const doughnutCanvas = document.getElementById('doughnutChart') as HTMLCanvasElement;
    this.doughnutChart = new Chart(doughnutCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Streaming', 'Download', 'Upload', 'Web', 'Social', 'Gaming', 'Others'],
        datasets: [{
          data: [0, 0, 0, 0, 0, 0, 0], // Initial data will be updated dynamically
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
            '#C9CBCF'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
            '#C9CBCF'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 5000,
          easing: 'easeInOutCubic',
         // loop:true
        },
        plugins: {
          title: {
            display: true,
            text: 'Data Usage'
          }
        }
      }
    });
  }

  createProgressiveLineChart() {
    const lineCanvas = document.getElementById('progressiveLineChart') as HTMLCanvasElement;
    this.progressiveLineChart = new Chart(lineCanvas, {
      type: 'line',
      data: {
        labels: ['Streaming', 'Download', 'Upload', 'Web', 'Social', 'Gaming', 'Others'],
        datasets: [{
          label: 'Data Usage',
          data: [0, 0, 0, 0, 0, 0, 0], // Initial data will be updated dynamically
          borderColor: 'rgb(75, 192, 192)',
          fill: true,
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 8000,
          easing: 'easeInCubic',
          //loop:true
          
        },
        plugins: {
          title: {
            display: true,
            text: 'Data Usage over Time'
          }
        }
      }
    });
  }

  createBarChart() {
    const barCanvas = document.getElementById('barChart') as HTMLCanvasElement;
    this.barChart = new Chart(barCanvas, {
      type: 'bar',
      data: {
        labels: ['Streaming', 'Download', 'Upload', 'Web', 'Social', 'Gaming', 'Others'],
        datasets: [{
          label: 'Data Usage',
          data: [0, 0, 0, 0, 0, 0, 0], 
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 5000,
          easing: 'easeInCubic',
          //loop:true,
          
        },
        plugins: {
          title: {
            display: true,
            text: 'Data Usage by Category'
          }
        }
      }
    });
  }
}