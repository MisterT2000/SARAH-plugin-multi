set IDSalon=""
set PortTuneblade=40000
start curl.exe -X PUT -H "Content-Type: application/json" -H "Content-Length: 38" -d "{\"Status\": \"Disconnect\", \"Volume\": 50}" http://localhost:%PortTuneblade%/devices/%IDSalon% 
