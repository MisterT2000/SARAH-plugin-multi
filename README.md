
# SARAH-Plugin--MultiroomTuneblade
=====================

1 PREREQUIS
2 INSTALLATION
3 CONFIGURATION PROGRAMME
4 CONFIGURATION PLUGIN MULTI

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
1 PREREQUIS
Dans un premier temps, il vous faut plusieurs programmmes pour faire fonctionner ce plugin:

1.1 Tuneblade
C'est ce logiciel qui stream la musique vers d'autres devices ou logiciels compatibles upnp dlna ou airplay.
Il est gratuit si vous streamez sous certains devices ou logiciels (pour nous kodi et raspberry)sinon il est payant a 9 petits euros et uniquement une fois payant
vous pouvez le telecharger a cette adresse ou disponible dans le dossier logiciel du plugin

http://tuneblade.com/

1.2 Curl
Curl permet d'envoyer les commandes via l'api de Tuneblade. celui ci est totalement gratuit.
Vous pouvez le telecharger a cette adresse ou disponible dans le dossier logiciel du plugin (x32 ou x64)

http://www.confusedbycode.com/curl/#downloads

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

2 INSTALLATION
Passons a la configuration des programmes

2.1 Tuneblade
Rien de plus simple, il suffit d'executer le programme et de l'installer ou vous voulez sur votre pc

2.2 Curl
Rien de plus simple, il suffit d'executer le programme et de l'installer. N'OUBLIEZ PAS DE REDEMARRER VOTRE PC POUR PRISE EN COMPTE

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

3 CONFIGURATION PROGRAMME

3.1 Tuneblade
Une fois que vous avez executer Tuneblade.exe, il faut aller dans les parametres pour le configurer. cliquez sur la roue crantée en haut a droite pour y acceder puis:
onglet general : cochez "Auto-check" "Show wider volume control" "Show streaming mode options" "Show master control options"
onglet Airplay Streaming : c'est vous qui voyez
onglet Audio capture : c'est vous qui voyez
onglet video : c'est vous qui voyez
onglet Remote control: cochez "Enable Remote COntrol" cochez "Manual" et choisissez un numero de port. exemple pour moi j'ai mis 40000
onglet Airplay receivers :c'est vous qui voyez

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

4 CONFIGURATION PLUGIN MULTI

4.1 Récupérez les ID Tuneblade
	Il va falloir récupérer les ID des devices connectés a Tuneblade:
	- Pour ce faire cliquez sur le batch "Tunebladeiddevice.bat" situé dans le dossier fichier du plugin. 
	- Le batch va vous ouvrir une fenetre internet. Copiez le contenu dans un fichier texte (un fichier texte est deja present dans ce dossier)

4.2 Mettre a jour les ID par lieu
	Il va falloir mettre a jour chaque dossier lieu en fonction de l'id Tuneblade du device correspondant:
	- Pour ce faire dans chaque dossier de lieux (cuisine, bar, salon....) se trouve le .bat majIDdevice.....  Executer le batch et suivez les insrtuctions: nom du port Tuneblade et ID Tuneblade du device correspondant
	(reprenez le fichier texte ou vous avez copiez les ID Tuneblade)
	exemple: id tuneblade=40000 iddevice cuisine=1C2800D2F280@Cuisine
	ATTENTION : LE CHEMIN DE SARAH EST DEFINIE COMME : C:\Sarah. SI LE VOTRE EST DIFFERENT IL FAUDRA MODIFIER CHAQUE FICHIER majIDdevice.. ET CHANGER le chemin des variables "set Outputfile" et "Set Cache"
	- Dans le dossier lieux/tous se trouve le .bat majIDtous.bat   Executer le batch et suivez les instructions (le chemin complet comprend l'executable exemple :C:\Program Files (x86)\Kodi\Kodi.exe)
	
	
