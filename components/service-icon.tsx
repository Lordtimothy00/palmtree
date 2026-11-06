import {
  Sun,
  Zap,
  BatteryCharging,
  SunMedium,
  Truck,
  Cctv,
  Wrench,
  GraduationCap,
  PanelsTopLeft,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  sun: Sun,
  inverter: Zap,
  battery: BatteryCharging,
  panels: PanelsTopLeft,
  truck: Truck,
  cctv: Cctv,
  wrench: Wrench,
  graduation: GraduationCap,
};

export function ServiceIcon({
  name,
  className = "size-5",
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? SunMedium;
  return <Icon className={className} aria-hidden="true" strokeWidth={1.75} />;
}
