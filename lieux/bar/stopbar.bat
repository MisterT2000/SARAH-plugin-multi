set IDBar=F4CAE5512C5F@FreeboxServer
set PortTuneblade=40000
start curl.exe -X PUT -H "Content-Type: application/json" -H "Content-Length: 38" -d "{\"Status\": \"Disconnect\", \"Volume\": 50}" http://localhost:%PortTuneblade%/devices/%IDBar% 
