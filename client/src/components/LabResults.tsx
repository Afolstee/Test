//todo: remove mock functionality
interface LabResultsProps {
  results: string[];
}

export default function LabResults({ results }: LabResultsProps) {
  return (
    <div className="bg-card rounded-md p-5" style={{ boxShadow: 'var(--shadow)' }}>
      <h2 className="font-extrabold text-2xl text-foreground mb-5">Lab Results</h2>
      
      <div className="space-y-3 max-h-[300px] overflow-y-auto">
        {results.map((result, index) => (
          <div 
            key={index}
            data-testid={`item-lab-result-${index}`}
            className="flex items-center justify-between p-3 hover-elevate active-elevate-2 rounded-md cursor-pointer"
            onClick={() => console.log(`Download ${result}`)}
          >
            <span className="text-sm text-foreground">{result}</span>
            <button 
              data-testid={`button-download-${index}`}
              className="p-1"
              onClick={(e) => {
                e.stopPropagation();
                console.log(`Download ${result} clicked`);
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
