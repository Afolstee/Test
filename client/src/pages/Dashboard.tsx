import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import DashboardHeader from '@/components/DashboardHeader';
import PatientSidebar from '@/components/PatientSidebar';
import BloodPressureChart from '@/components/BloodPressureChart';
import VitalSignCard from '@/components/VitalSignCard';
import PatientProfile from '@/components/PatientProfile';
import DiagnosticList from '@/components/DiagnosticList';
import LabResults from '@/components/LabResults';

interface PatientData {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: Array<{
    month: string;
    year: number;
    blood_pressure: {
      systolic: { value: number; levels: string };
      diastolic: { value: number; levels: string };
    };
    heart_rate: { value: number; levels: string };
    respiratory_rate: { value: number; levels: string };
    temperature: { value: number; levels: string };
  }>;
  diagnostic_list: Array<{
    name: string;
    description: string;
    status: string;
  }>;
  lab_results: string[];
}

export default function Dashboard() {
  const [selectedPatient] = useState("Jessica Taylor");

  const { data: allPatients, isLoading: patientsLoading } = useQuery({
    queryKey: ['patients', 'all'],
    queryFn: async () => {
      const response = await fetch('/api/patients/all');
      if (!response.ok) throw new Error('Failed to fetch patients');
      return response.json();
    },
  });

  const { data: patientData, isLoading: patientLoading, error } = useQuery<PatientData>({
    queryKey: ['patient', selectedPatient],
    queryFn: async () => {
      const response = await fetch('/api/patients');
      if (!response.ok) throw new Error('Failed to fetch patient data');
      return response.json();
    },
  });

  if (patientsLoading || patientLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg">Loading patient data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg text-red-500">Error loading patient data. Please try again.</div>
      </div>
    );
  }

  if (!patientData) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg">No patient data available.</div>
      </div>
    );
  }

  const latestVitals = patientData.diagnosis_history[0];

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <PatientSidebar 
        patients={allPatients || []} 
        activePatient={selectedPatient} 
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader patientName={selectedPatient} />
        
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <BloodPressureChart data={patientData.diagnosis_history} />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <VitalSignCard
                    icon="heart"
                    label="Heart Rate"
                    value={latestVitals.heart_rate.value}
                    unit="bpm"
                    status={latestVitals.heart_rate.levels}
                    bgColor="bg-[#FFE6F1]"
                  />
                  <VitalSignCard
                    icon="respiratory"
                    label="Respiratory Rate"
                    value={latestVitals.respiratory_rate.value}
                    unit="bpm"
                    status={latestVitals.respiratory_rate.levels}
                    bgColor="bg-[#E0F3FA]"
                  />
                  <VitalSignCard
                    icon="temperature"
                    label="Temperature"
                    value={latestVitals.temperature.value}
                    unit="°F"
                    status={latestVitals.temperature.levels}
                    bgColor="bg-[#FFE6E9]"
                  />
                </div>
                
                <DiagnosticList diagnostics={patientData.diagnostic_list} />
              </div>
              
              <div className="space-y-8">
                <PatientProfile
                  name={patientData.name}
                  gender={patientData.gender}
                  age={patientData.age}
                  profile_picture={patientData.profile_picture}
                  date_of_birth={patientData.date_of_birth}
                  phone_number={patientData.phone_number}
                  emergency_contact={patientData.emergency_contact}
                  insurance_type={patientData.insurance_type}
                />
                
                <LabResults results={patientData.lab_results} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
