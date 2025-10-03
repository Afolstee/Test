import BloodPressureChart from '../BloodPressureChart';

//todo: remove mock functionality
const mockData = [
  { month: "March", year: 2024, blood_pressure: { systolic: { value: 160, levels: "Higher than Average" }, diastolic: { value: 78, levels: "Lower than Average" } } },
  { month: "February", year: 2024, blood_pressure: { systolic: { value: 140, levels: "Normal" }, diastolic: { value: 80, levels: "Normal" } } },
  { month: "January", year: 2024, blood_pressure: { systolic: { value: 145, levels: "Normal" }, diastolic: { value: 82, levels: "Normal" } } },
  { month: "December", year: 2023, blood_pressure: { systolic: { value: 130, levels: "Normal" }, diastolic: { value: 75, levels: "Normal" } } },
  { month: "November", year: 2023, blood_pressure: { systolic: { value: 135, levels: "Normal" }, diastolic: { value: 77, levels: "Normal" } } },
  { month: "October", year: 2023, blood_pressure: { systolic: { value: 125, levels: "Normal" }, diastolic: { value: 70, levels: "Normal" } } },
];

export default function BloodPressureChartExample() {
  return (
    <div className="p-8 bg-background">
      <BloodPressureChart data={mockData} />
    </div>
  );
}
