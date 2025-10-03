interface DashboardHeaderProps {
  patientName?: string;
}

export default function DashboardHeader({ patientName }: DashboardHeaderProps) {
  return (
    <div className="bg-card border-b border-card-border px-8 py-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-xl">TC</span>
        </div>
        <h1 className="font-extrabold text-2xl text-foreground">Tech.Care</h1>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            data-testid="input-search"
            className="w-64 px-4 py-2 pl-10 bg-background border border-input rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            onChange={(e) => console.log('Search:', e.target.value)}
          />
          <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            data-testid="button-notifications"
            className="p-2 hover-elevate active-elevate-2 rounded-md relative"
            onClick={() => console.log('Notifications clicked')}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          
          <button 
            data-testid="button-settings"
            className="p-2 hover-elevate active-elevate-2 rounded-md"
            onClick={() => console.log('Settings clicked')}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2 pl-4 border-l border-border">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <span className="text-sm font-bold">SM</span>
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Senior Martinez</p>
              <p className="text-xs text-muted-foreground">General Practitioner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
