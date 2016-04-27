set IDSalon=""
set PortTuneblade=40000
start curl.exe -X PUT -H "Content-Type: application/json" -H "Content-Length: 35" -d "{\"Status\": \"Connect\", \"Volume\": 60}" http://localhost:%PortTuneblade%/devices/%IDSalon% 
