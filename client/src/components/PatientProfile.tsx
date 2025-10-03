import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

//todo: remove mock functionality
interface PatientProfileProps {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
}

export default function PatientProfile({
  name,
  gender,
  age,
  profile_picture,
  date_of_birth,
  phone_number,
  emergency_contact,
  insurance_type,
}: PatientProfileProps) {
  return (
    <div className="bg-card rounded-md p-8 flex flex-col items-center gap-6" style={{ boxShadow: 'var(--shadow)' }}>
      <Avatar className="w-48 h-48">
        <AvatarImage src={profile_picture} alt={name} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      
      <div className="text-center">
        <h2 className="font-extrabold text-2xl text-foreground" data-testid="text-patient-name">{name}</h2>
      </div>
      
      <div className="w-full space-y-5">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">Date Of Birth</p>
            <p className="text-sm font-bold text-foreground" data-testid="text-dob">{new Date(date_of_birth).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">Gender</p>
            <p className="text-sm font-bold text-foreground" data-testid="text-gender">{gender}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">Contact Info</p>
            <p className="text-sm font-bold text-foreground" data-testid="text-phone">{phone_number}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">Emergency Contacts</p>
            <p className="text-sm font-bold text-foreground" data-testid="text-emergency">{emergency_contact}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">Insurance Provider</p>
            <p className="text-sm font-bold text-foreground" data-testid="text-insurance">{insurance_type}</p>
          </div>
        </div>
      </div>
      
      <button 
        data-testid="button-show-info"
        className="w-full bg-accent hover-elevate active-elevate-2 text-accent-foreground font-bold py-3 px-6 rounded-full"
        onClick={() => console.log('Show All Information clicked')}
      >
        Show All Information
      </button>
    </div>
  );
}
