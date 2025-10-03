import PatientSidebar from '../PatientSidebar';

//todo: remove mock functionality
const mockPatients = [
  { name: "Emily Williams", gender: "Female", age: 18, profile_picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily" },
  { name: "Ryan Johnson", gender: "Male", age: 45, profile_picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan" },
  { name: "Brandon Mitchell", gender: "Male", age: 36, profile_picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brandon" },
  { name: "Jessica Taylor", gender: "Female", age: 28, profile_picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica" },
];

export default function PatientSidebarExample() {
  return <PatientSidebar patients={mockPatients} activePatient="Jessica Taylor" />;
}
