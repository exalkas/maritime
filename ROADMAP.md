# Proposed development work

These tasks extend the existing prototype. The owner should prioritize and confirm the intended scope before using this list as a project-work commitment.

- Integrate an AIS data provider, with credentials kept on the server and a clearly labeled synthetic demo mode.
- Make synthetic vessel identities stable between refreshes and support consistent vessel-detail lookup.
- Implement the vessel-details page currently linked from map markers.
- Make the AIS API address configurable and improve API error handling and fallback visibility.
- Replace static dashboard counters and status labels with values derived from the selected data source.
- Add endpoint and frontend integration tests covering successful requests, API failures, and invalid vessel identifiers.
- Implement core authentication and authorization before adding protected account or business features.
- Validate production builds and deployment configuration, including database access, CORS, and transport security.

The existing product documents also discuss weather, route planning, cargo-marketplace, administration, and analytics features. Those are future plans, not claims about the current demo.
