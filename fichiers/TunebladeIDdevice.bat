
set /p IPduPC=Quelle est l'adresse IP du PC :
set /p PortTuneblade=Quel est le Port Tuneblade :
start http://%IPduPC%:%PortTuneblade%/devices
pause