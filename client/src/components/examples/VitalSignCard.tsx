import VitalSignCard from '../VitalSignCard';

export default function VitalSignCardExample() {
  return (
    <div className="p-8 bg-background grid grid-cols-3 gap-5">
      <VitalSignCard
        icon="heart"
        label="Heart Rate"
        value={78}
        unit="bpm"
        status="Lower than Average"
        bgColor="bg-[#FFE6F1]"
      />
      <VitalSignCard
        icon="respiratory"
        label="Respiratory Rate"
        value={20}
        unit="bpm"
        status="Normal"
        bgColor="bg-[#E0F3FA]"
      />
      <VitalSignCard
        icon="temperature"
        label="Temperature"
        value={98.6}
        unit="°F"
        status="Normal"
        bgColor="bg-[#FFE6E9]"
      />
    </div>
  );
}
