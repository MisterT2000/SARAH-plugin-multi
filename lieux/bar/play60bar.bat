set IDBar=F4CAE5512C5F@FreeboxServer
set PortTuneblade=40000
start curl.exe -X PUT -H "Content-Type: application/json" -H "Content-Length: 35" -d "{\"Status\": \"Connect\", \"Volume\": 60}" http://localhost:%PortTuneblade%/devices/%IDBar% 
