import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface DiagnosisHistoryItem {
  month: string;
  year: number;
  blood_pressure: {
    systolic: { value: number; levels: string };
    diastolic: { value: number; levels: string };
  };
}

interface BloodPressureChartProps {
  data: DiagnosisHistoryItem[];
}

export default function BloodPressureChart({ data }: BloodPressureChartProps) {
  const latestReading = data[0];
  
  const chartData = {
    labels: data.slice().reverse().map(item => `${item.month.slice(0, 3)}, ${item.year}`),
    datasets: [
      {
        label: 'Systolic',
        data: data.slice().reverse().map(item => item.blood_pressure.systolic.value),
        borderColor: '#E66FD2',
        backgroundColor: 'rgba(230, 111, 210, 0.1)',
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: '#E66FD2',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
      {
        label: 'Diastolic',
        data: data.slice().reverse().map(item => item.blood_pressure.diastolic.value),
        borderColor: '#8C6FE6',
        backgroundColor: 'rgba(140, 111, 230, 0.1)',
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: '#8C6FE6',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#072635',
        padding: 12,
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#E3E4E6',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 180,
        ticks: {
          stepSize: 20,
          color: '#072635',
          font: {
            size: 12,
          },
        },
        grid: {
          color: '#E3E4E6',
        },
      },
      x: {
        ticks: {
          color: '#072635',
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-card rounded-md p-5 space-y-5" style={{ boxShadow: 'var(--shadow)' }}>
      <h2 className="font-extrabold text-2xl text-foreground">Diagnosis History</h2>
      
      <div className="bg-[#F4F0FE] rounded-md p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg text-foreground">Blood Pressure</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#E66FD2]"></div>
              <span className="text-foreground">Systolic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#8C6FE6]"></div>
              <span className="text-foreground">Diastolic</span>
            </div>
          </div>
          <select 
            data-testid="select-timeframe"
            className="text-sm px-3 py-1 rounded-full border border-input bg-background"
            onChange={(e) => console.log('Timeframe changed:', e.target.value)}
          >
            <option value="6months">Last 6 months</option>
            <option value="year">Last year</option>
          </select>
        </div>
        
        <div className="h-64">
          <Line data={chartData} options={options} />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#E66FD2]"></div>
            <span className="font-bold text-sm text-foreground">Systolic</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{latestReading.blood_pressure.systolic.value}</p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {latestReading.blood_pressure.systolic.levels === 'Higher than Average' && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            )}
            {latestReading.blood_pressure.systolic.levels}
          </p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#8C6FE6]"></div>
            <span className="font-bold text-sm text-foreground">Diastolic</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{latestReading.blood_pressure.diastolic.value}</p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {latestReading.blood_pressure.diastolic.levels === 'Lower than Average' && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            )}
            {latestReading.blood_pressure.diastolic.levels}
          </p>
        </div>
      </div>
    </div>
  );
}
