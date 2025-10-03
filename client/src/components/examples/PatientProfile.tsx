import PatientProfile from '../PatientProfile';

//todo: remove mock functionality
const mockPatient = {
  name: "Jessica Taylor",
  gender: "Female",
  age: 28,
  profile_picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
  date_of_birth: "1996-08-23",
  phone_number: "(415) 555-1234",
  emergency_contact: "(415) 555-5678",
  insurance_type: "Sunrise Health Assurance",
};

export default function PatientProfileExample() {
  return (
    <div className="p-8 bg-background">
      <PatientProfile {...mockPatient} />
    </div>
  );
}
