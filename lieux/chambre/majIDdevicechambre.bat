
set /p IDChambre= l'ID Chambre est :
set /p PortTuneblade= le port Tuneblade est :
set local enabledelayedexpansion
set FileToCheck=playchambre.bat
set FileToCheck1=play10chambre.bat
set FileToCheck2=play20chambre.bat
set FileToCheck3=play30chambre.bat
set FileToCheck4=play40chambre.bat
set FileToCheck5=play50chambre.bat
set FileToCheck6=play60chambre.bat
set FileToCheck7=play70chambre.bat
set FileToCheck8=play80chambre.bat
set FileToCheck9=play90chambre.bat
set FileToCheck10=play100chambre.bat
set FileToChecks=stopchambre.bat
set OutputFile=C:\Sarah\plugins\multi\lieux\chambre\playcuisine1.bat
set Cache=C:\Sarah\plugins\multi\lieux\chambre\cache.bat

for /F "skip=2 delims=" %%i in (%FileToCheck%) do echo %%i >>%OutputFile%
(echo set IDChambre=%IDChambre%
echo set PortTuneblade=%PortTuneblade%) >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToCheck%
rename "%OutputFile%" "%FileToCheck%"

for /F "skip=2 delims=" %%i in (%FileToCheck1%) do echo %%i >>%OutputFile%
(echo set IDChambre=%IDChambre%
echo set PortTuneblade=%PortTuneblade%) >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToCheck1%
rename "%OutputFile%" "%FileToCheck1%"

for /F "skip=2 delims=" %%i in (%FileToCheck2%) do echo %%i >>%OutputFile%
(echo set IDChambre=%IDChambre%
echo set PortTuneblade=%PortTuneblade%) >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToCheck2%
rename "%OutputFile%" "%FileToCheck2%"

for /F "skip=2 delims=" %%i in (%FileToCheck3%) do echo %%i >>%OutputFile%
(echo set IDChambre=%IDChambre%
echo set PortTuneblade=%PortTuneblade%) >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToCheck3%
rename "%OutputFile%" "%FileToCheck3%"

for /F "skip=2 delims=" %%i in (%FileToCheck4%) do echo %%i >>%OutputFile%
(echo set IDChambre=%IDChambre%
echo set PortTuneblade=%PortTuneblade%) >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToCheck4%
rename "%OutputFile%" "%FileToCheck4%"

for /F "skip=2 delims=" %%i in (%FileToCheck5%) do echo %%i >>%OutputFile%
(echo set IDChambre=%IDChambre%
echo set PortTuneblade=%PortTuneblade%) >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToCheck5%
rename "%OutputFile%" "%FileToCheck5%"

for /F "skip=2 delims=" %%i in (%FileToCheck6%) do echo %%i >>%OutputFile%
(echo set IDChambre=%IDChambre%
echo set PortTuneblade=%PortTuneblade%) >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToCheck6%
rename "%OutputFile%" "%FileToCheck6%"

for /F "skip=2 delims=" %%i in (%FileToCheck7%) do echo %%i >>%OutputFile%
(echo set IDChambre=%IDChambre%
echo set PortTuneblade=%PortTuneblade%) >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToCheck7%
rename "%OutputFile%" "%FileToCheck7%"

for /F "skip=2 delims=" %%i in (%FileToCheck8%) do echo %%i >>%OutputFile%
(echo set IDChambre=%IDChambre%
echo set PortTuneblade=%PortTuneblade%) >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToCheck8%
rename "%OutputFile%" "%FileToCheck8%"

for /F "skip=2 delims=" %%i in (%FileToCheck9%) do echo %%i >>%OutputFile%
(echo set IDChambre=%IDChambre%
echo set PortTuneblade=%PortTuneblade%) >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToCheck9%
rename "%OutputFile%" "%FileToCheck9%"

for /F "skip=2 delims=" %%i in (%FileToCheck10%) do echo %%i >>%OutputFile%
(echo set IDChambre=%IDChambre%
echo set PortTuneblade=%PortTuneblade%) >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToCheck10%
rename "%OutputFile%" "%FileToCheck10%"

for /F "skip=2 delims=" %%i in (%FileToChecks%) do echo %%i >>%OutputFile%
(echo set IDChambre=%IDChambre%
echo set PortTuneblade=%PortTuneblade%) >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToChecks%
rename "%OutputFile%" "%FileToChecks%"

pause