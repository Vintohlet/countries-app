import "./RegionSelect.module.scss"
interface RegionSelectProps {
  onRegionChange: (region: string) => void;
}
export default function RegionSelect({ onRegionChange }: RegionSelectProps) {
  return (
    <select  className="select" onChange={(e) => onRegionChange(e.target.value)}>
      <option value="all">All regions</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
