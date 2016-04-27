
set /p PortTuneblade= le port Tuneblade est :
set /p Chemintuneblade= le chemin complet Tuneblade (ex: C:....TuneBlade.exe) est :
set /p Nomlecteuraudio= donnez un nom au lecteur audio :
set /p Nomexelecteuraudio= le nom de l'executable (exe: Kodi.exe)du lecteur audio est :
set /p Cheminlecteuraudio= le chemin complet du lecteur audio est (ex: C:....Kodi.exe) :
set local enabledelayedexpansion
set FileToCheck=playall.bat
set FileToCheck1=pauseall.bat
set FileToCheck2=startmultiroom.bat
set FileToCheck3=startmultiroommusic.bat
set FileToCheck4=stopmultiroom.bat
set FileToCheck5=stopmultiroommusic.bat
set OutputFile=C:\Sarah\plugins\multi\lieux\tous\playcuisine1.bat
set Cache=C:\Sarah\plugins\multi\lieux\tous\cache.bat

for /F "skip=1 delims=" %%i in (%FileToCheck%) do echo %%i >>%OutputFile%
(echo set PortTuneblade=%PortTuneblade%) >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToCheck%
rename "%OutputFile%" "%FileToCheck%"

for /F "skip=1 delims=" %%i in (%FileToCheck1%) do echo %%i >>%OutputFile%
(echo set PortTuneblade=%PortTuneblade%) >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToCheck1%
rename "%OutputFile%" "%FileToCheck1%"

for /F "skip=2 delims=" %%i in (%FileToCheck2%) do echo %%i >>%OutputFile%
(echo @echo off
echo start "TuneBlade" "%Chemintuneblade%") >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToCheck2%
rename "%OutputFile%" "%FileToCheck2%"

for /F "skip=4 delims=" %%i in (%FileToCheck3%) do echo %%i >>%OutputFile%
(echo @echo off
echo start "TuneBlade" "%Chemintuneblade%"
echo timeout /t 1
echo start "%Nomlecteuraudio%" "%Cheminlecteuraudio%") >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToCheck3%
rename "%OutputFile%" "%FileToCheck3%"

for /F "skip=2 delims=" %%i in (%FileToCheck5%) do echo %%i >>%OutputFile%
(echo @echo off
echo taskkill /im TuneBlade.exe
echo timeout /t 1
echo taskkill /im %Nomexelecteuraudio%) >%Cache%
type %OutputFile% >>%Cache%
type %Cache% >%OutputFile%
del %Cache%
del %FileToCheck5%
rename "%OutputFile%" "%FileToCheck5%"

pause