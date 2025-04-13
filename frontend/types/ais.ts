export interface Vessel {
  mmsi: string; // Maritime Mobile Service Identity
  name: string; // Vessel name
  lat: number; // Latitude
  lng: number; // Longitude
  course: number; // Course over ground in degrees
  speed: number; // Speed in knots
  heading?: number; // True heading in degrees (optional)
  shipType: number; // Type of ship based on AIS codes
  timestamp: string; // ISO timestamp of the data
  destination?: string; // Destination (optional)
  eta?: string; // Estimated time of arrival (optional)
  status?: number; // Navigation status (e.g., "underway", "at anchor")
  callSign?: string; // Radio call sign (optional)
  imo?: string; // IMO ship ID (optional)
  length?: number; // Length in meters (optional)
  width?: number; // Width in meters (optional)
}

export interface AisApiResponse {
  vessels: Vessel[];
  timestamp: string;
}

export enum VesselStatus {
  UnderWay = 0,
  AtAnchor = 1,
  NotUnderCommand = 2,
  RestrictedManeuverability = 3,
  ConstrainedByDraft = 4,
  Moored = 5,
  Aground = 6,
  EngagedInFishing = 7,
  UnderWaySailing = 8,
  Reserved = 9,
  Reserved2 = 10,
  PowerDrivenVessel = 11,
  Reserved3 = 12,
  Reserved4 = 13,
  SartMobAisTransmitter = 14,
  Undefined = 15,
}

export enum VesselType {
  NotAvailable = 0,
  // 20-29 Wing in ground effect vessels
  WingInGround = 20,
  // 30-39 Fishing vessels
  Fishing = 30,
  // 40-49 Towing vessels
  Tug = 31,
  // 50-59 Passenger vessels
  PassengerVessel = 60,
  // 70-79 Cargo vessels
  Cargo = 70,
  // 80-89 Tankers
  Tanker = 80,
  // More types can be added as needed
}
