set IDCuisine=1C2800D2F280@Cuisine
set PortTuneblade=40000
start curl.exe -X PUT -H "Content-Type: application/json" -H "Content-Length: 36" -d "{\"Status\": \"Connect\", \"Volume\": 100}" http://localhost:%PortTuneblade%/devices/%IDCuisine% 
