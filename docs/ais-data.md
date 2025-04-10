can you show how to get AIS data?

# Getting AIS Data for Maritime SAAS

AIS (Automatic Identification System) data can be obtained through several methods:

## 1. Commercial AIS Data Providers

- **AISHub**: Offers data sharing program where you can get access by contributing your own AIS station
- **MarineTraffic**: Commercial API access starting at ~$100/month
- **VesselFinder**: API services with various subscription levels
- **Spire Maritime**: Enterprise-level AIS data with global coverage
- **exactEarth**: Satellite AIS data provider
- **FleetMon**: AIS data API with reasonable pricing for startups

## 2. Sample API Integration (MarineTraffic)

```javascript
const axios = require("axios");

async function getVesselPosition(mmsi) {
  try {
    const response = await axios.get(
      "https://api.marinetraffic.com/exportvessel/v:5",
      {
        params: {
          MMSI: mmsi,
          timespan: 60, // minutes
          protocol: "jsono", // JSON output
          msgtype: "simple",
          key: "YOUR_API_KEY",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching AIS data:", error);
    throw error;
  }
}
```

## 3. Self-Hosted AIS Receiver (DIY Option)

For cost-efficient MVP, you could set up your own AIS receiver:

- RTL-SDR USB dongle (~$30)
- VHF antenna (~$50)
- Raspberry Pi (~$45)
- Software: AIS Dispatcher or RTL-AIS (open source)

This solution has limited range (coastal/port areas only) but could be sufficient for early testing.

## 4. Open AIS Data Sources

- **AIS Stream**: Some countries provide open AIS data feeds
- **Danish Maritime Authority**: Offers open AIS data for Danish waters
- **Norwegian Coastal Administration**: Provides AIS data for Norwegian waters
- **NOAA**: Limited AIS data available for US waters

For your MVP with one client, I'd recommend starting with either a basic commercial API package or the DIY receiver approach if your client operates in a specific geographic area.
