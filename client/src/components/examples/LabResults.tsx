import LabResults from '../LabResults';

//todo: remove mock functionality
const mockResults = [
  "Blood Tests",
  "CT Scans",
  "Radiology Reports",
  "X-Rays",
  "Urine Test",
  "Cholesterol Test",
  "Liver Function Test",
  "Kidney Function Test",
];

export default function LabResultsExample() {
  return (
    <div className="p-8 bg-background">
      <LabResults results={mockResults} />
    </div>
  );
}
