import { useState } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import PatientSidebar from '@/components/PatientSidebar';
import BloodPressureChart from '@/components/BloodPressureChart';
import VitalSignCard from '@/components/VitalSignCard';
import PatientProfile from '@/components/PatientProfile';
import DiagnosticList from '@/components/DiagnosticList';
import LabResults from '@/components/LabResults';

//todo: remove mock functionality - Replace with API data
const mockPatients = [
  { name: "Emily Williams", gender: "Female", age: 18, profile_picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily" },
  { name: "Ryan Johnson", gender: "Male", age: 45, profile_picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan" },
  { name: "Brandon Mitchell", gender: "Male", age: 36, profile_picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brandon" },
  { name: "Jessica Taylor", gender: "Female", age: 28, profile_picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica" },
];

//todo: remove mock functionality - Replace with API data
const mockPatientData = {
  name: "Jessica Taylor",
  gender: "Female",
  age: 28,
  profile_picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
  date_of_birth: "1996-08-23",
  phone_number: "(415) 555-1234",
  emergency_contact: "(415) 555-5678",
  insurance_type: "Sunrise Health Assurance",
  diagnosis_history: [
    { 
      month: "March", 
      year: 2024, 
      blood_pressure: { 
        systolic: { value: 160, levels: "Higher than Average" }, 
        diastolic: { value: 78, levels: "Lower than Average" } 
      },
      heart_rate: { value: 78, levels: "Lower than Average" },
      respiratory_rate: { value: 20, levels: "Normal" },
      temperature: { value: 98.6, levels: "Normal" }
    },
    { 
      month: "February", 
      year: 2024, 
      blood_pressure: { 
        systolic: { value: 140, levels: "Normal" }, 
        diastolic: { value: 80, levels: "Normal" } 
      },
      heart_rate: { value: 75, levels: "Normal" },
      respiratory_rate: { value: 18, levels: "Normal" },
      temperature: { value: 98.4, levels: "Normal" }
    },
    { 
      month: "January", 
      year: 2024, 
      blood_pressure: { 
        systolic: { value: 145, levels: "Normal" }, 
        diastolic: { value: 82, levels: "Normal" } 
      },
      heart_rate: { value: 76, levels: "Normal" },
      respiratory_rate: { value: 19, levels: "Normal" },
      temperature: { value: 98.5, levels: "Normal" }
    },
    { 
      month: "December", 
      year: 2023, 
      blood_pressure: { 
        systolic: { value: 130, levels: "Normal" }, 
        diastolic: { value: 75, levels: "Normal" } 
      },
      heart_rate: { value: 72, levels: "Normal" },
      respiratory_rate: { value: 17, levels: "Normal" },
      temperature: { value: 98.3, levels: "Normal" }
    },
    { 
      month: "November", 
      year: 2023, 
      blood_pressure: { 
        systolic: { value: 135, levels: "Normal" }, 
        diastolic: { value: 77, levels: "Normal" } 
      },
      heart_rate: { value: 74, levels: "Normal" },
      respiratory_rate: { value: 18, levels: "Normal" },
      temperature: { value: 98.6, levels: "Normal" }
    },
    { 
      month: "October", 
      year: 2023, 
      blood_pressure: { 
        systolic: { value: 125, levels: "Normal" }, 
        diastolic: { value: 70, levels: "Normal" } 
      },
      heart_rate: { value: 70, levels: "Normal" },
      respiratory_rate: { value: 16, levels: "Normal" },
      temperature: { value: 98.2, levels: "Normal" }
    },
  ],
  diagnostic_list: [
    { name: "Hypertension", description: "Chronic high blood pressure", status: "Under Observation" },
    { name: "Type 2 Diabetes", description: "Insulin resistance and elevated blood sugar", status: "Cured" },
    { name: "Asthma", description: "Respiratory condition causing breathing difficulties", status: "Inactive" },
    { name: "Osteoarthritis", description: "Joint pain and stiffness", status: "Untreated" },
    { name: "Allergic Rhinitis", description: "Seasonal allergies", status: "Active" },
    { name: "Gastroesophageal Reflux", description: "Acid reflux disease", status: "Under Observation" },
  ],
  lab_results: [
    "Blood Tests",
    "CT Scans",
    "Radiology Reports",
    "X-Rays",
    "Urine Test",
    "Cholesterol Test",
    "Liver Function Test",
    "Kidney Function Test",
  ],
};

export default function Dashboard() {
  const [selectedPatient] = useState("Jessica Taylor");
  const latestVitals = mockPatientData.diagnosis_history[0];

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <PatientSidebar patients={mockPatients} activePatient={selectedPatient} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader patientName={selectedPatient} />
        
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <BloodPressureChart data={mockPatientData.diagnosis_history} />
                
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
                
                <DiagnosticList diagnostics={mockPatientData.diagnostic_list} />
              </div>
              
              <div className="space-y-8">
                <PatientProfile
                  name={mockPatientData.name}
                  gender={mockPatientData.gender}
                  age={mockPatientData.age}
                  profile_picture={mockPatientData.profile_picture}
                  date_of_birth={mockPatientData.date_of_birth}
                  phone_number={mockPatientData.phone_number}
                  emergency_contact={mockPatientData.emergency_contact}
                  insurance_type={mockPatientData.insurance_type}
                />
                
                <LabResults results={mockPatientData.lab_results} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
