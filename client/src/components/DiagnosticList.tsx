import { Badge } from "@/components/ui/badge";

//todo: remove mock functionality
interface Diagnostic {
  name: string;
  description: string;
  status: string;
}

interface DiagnosticListProps {
  diagnostics: Diagnostic[];
}

export default function DiagnosticList({ diagnostics }: DiagnosticListProps) {
  return (
    <div className="bg-card rounded-md p-5" style={{ boxShadow: 'var(--shadow)' }}>
      <h2 className="font-extrabold text-2xl text-foreground mb-5">Diagnostic List</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-card-border">
              <th className="text-left py-3 px-4 font-bold text-sm text-foreground">Problem/Diagnosis</th>
              <th className="text-left py-3 px-4 font-bold text-sm text-foreground">Description</th>
              <th className="text-left py-3 px-4 font-bold text-sm text-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnostics.map((diagnostic, index) => (
              <tr 
                key={index} 
                className="border-b border-card-border last:border-0 hover-elevate"
                data-testid={`row-diagnostic-${index}`}
              >
                <td className="py-4 px-4 text-sm text-foreground">{diagnostic.name}</td>
                <td className="py-4 px-4 text-sm text-foreground">{diagnostic.description}</td>
                <td className="py-4 px-4">
                  <Badge variant="secondary" className="font-normal">
                    {diagnostic.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
