interface VitalSignCardProps {
  icon: 'heart' | 'respiratory' | 'temperature';
  label: string;
  value: string | number;
  unit?: string;
  status: string;
  bgColor: string;
}

export default function VitalSignCard({ icon, label, value, unit, status, bgColor }: VitalSignCardProps) {
  const icons = {
    heart: (
      <svg className="w-24 h-24" viewBox="0 0 96 96" fill="currentColor">
        <path d="M48 84c-1.1 0-2.2-.3-3.1-.9C43.4 82.3 12 62.8 12 37c0-11.6 9.4-21 21-21 7.4 0 14 3.9 17.6 10.2.5.9 1.5 1.4 2.4 1.4s1.9-.5 2.4-1.4C59 19.9 65.6 16 73 16c11.6 0 21 9.4 21 21 0 25.8-31.4 45.3-42.9 46.1-.9.6-2 .9-3.1.9z"/>
      </svg>
    ),
    respiratory: (
      <svg className="w-24 h-24" viewBox="0 0 96 96" fill="currentColor">
        <path d="M68 16H28c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V28c0-6.6-5.4-12-12-12zM48 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"/>
      </svg>
    ),
    temperature: (
      <svg className="w-24 h-24" viewBox="0 0 96 96" fill="currentColor">
        <path d="M58 40V24c0-5.5-4.5-10-10-10s-10 4.5-10 10v16c-4.4 2.5-7 7.2-7 12.2 0 7.7 6.3 14 14 14s14-6.3 14-14c0-5-2.6-9.7-7-12.2zM48 58c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
      </svg>
    ),
  };

  return (
    <div className="bg-card rounded-md p-5 flex flex-col gap-3" style={{ boxShadow: 'var(--shadow)' }}>
      <div className={`w-24 h-24 rounded-full flex items-center justify-center ${bgColor}`}>
        {icons[icon]}
      </div>
      <div>
        <p className="text-base font-medium text-foreground">{label}</p>
        <p className="text-3xl font-extrabold text-foreground mt-1">
          {value}{unit && <span className="text-2xl"> {unit}</span>}
        </p>
      </div>
      <p className="text-sm text-muted-foreground">{status}</p>
    </div>
  );
}
