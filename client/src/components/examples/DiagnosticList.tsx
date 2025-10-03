import DiagnosticList from '../DiagnosticList';

//todo: remove mock functionality
const mockDiagnostics = [
  { name: "Hypertension", description: "Chronic high blood pressure", status: "Under Observation" },
  { name: "Type 2 Diabetes", description: "Insulin resistance and elevated blood sugar", status: "Cured" },
  { name: "Asthma", description: "Respiratory condition causing breathing difficulties", status: "Inactive" },
  { name: "Osteoarthritis", description: "Joint pain and stiffness", status: "Untreated" },
  { name: "Allergic Rhinitis", description: "Seasonal allergies", status: "Active" },
  { name: "Gastroesophageal Reflux", description: "Acid reflux disease", status: "Under Observation" },
];

export default function DiagnosticListExample() {
  return (
    <div className="p-8 bg-background">
      <DiagnosticList diagnostics={mockDiagnostics} />
    </div>
  );
}
