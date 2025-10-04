import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
}

interface PatientSidebarProps {
  patients: Patient[];
  activePatient?: string;
}

export default function PatientSidebar({ patients, activePatient }: PatientSidebarProps) {
  return (
    <div className="w-[367px] bg-card border-r border-card-border h-screen flex flex-col">
      <div className="p-5 border-b border-card-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">TC</span>
          </div>
        </div>
      </div>
      
      <div className="p-5 flex-1 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-extrabold text-2xl text-foreground">Patients</h2>
          <button 
            data-testid="button-search-patients"
            className="p-2 hover-elevate active-elevate-2 rounded-md"
            onClick={() => console.log('Search patients triggered')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-3">
          {patients.map((patient) => (
            <div
              key={patient.name}
              data-testid={`card-patient-${patient.name.replace(/\s+/g, '-').toLowerCase()}`}
              className={`flex items-center gap-3 p-4 rounded-md cursor-pointer hover-elevate active-elevate-2 ${
                activePatient === patient.name ? 'bg-accent' : ''
              }`}
              onClick={() => console.log(`Selected patient: ${patient.name}`)}
            >
              <Avatar className="w-12 h-12">
                <AvatarImage src={patient.profile_picture} alt={patient.name} />
                <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm text-foreground truncate">{patient.name}</p>
                <p className="text-sm text-muted-foreground">{patient.gender}, {patient.age}</p>
              </div>
              <button 
                data-testid={`button-more-${patient.name.replace(/\s+/g, '-').toLowerCase()}`}
                className="p-1 hover-elevate active-elevate-2 rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(`More options for ${patient.name}`);
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
