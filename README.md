# Testy REST API przy użyciu Jest i Supertest
Do pisania testów i ich odpalania będzie nam potrzebne środowisko node.js Visual Studio Code oraz Jest i Supertest
1.	https://code.visualstudio.com/Download
2.	https://nodejs.org/en/download/

Po zainstalowaniu VSC i node.js wykonujemy następujące kroki:

1.	Z menu VSC wybieramy File -> Open Folder 
 ![Screenshot](https://github.com/noemiwol/imagesGifs/blob/main/img/redmeSupertestJest/1.jpg)
 
##### Tworzymy nowy folder gdzie będziemy pisać testy i ten folder wybieramy.	Tworzymy nowy folder gdzie będziemy pisać testy i ten folder wybieramy.
  
2.	Musimy otworzyć terminal w tym celu klikamy prawym przyciskiem myszy w polu poniżej naszego folderu. Wybieramy Open Integrated Terminal
![Screenshot](https://github.com/noemiwol/imagesGifs/blob/main/img/redmeSupertestJest/2.jpg)

3.	Pojawi nam się Terminal
![Screenshot](https://github.com/noemiwol/imagesGifs/blob/main/img/redmeSupertestJest/3.jpg)

4.	Przechodzimy do instalacji Jest wchodzimy na stronę https://jestjs.io/docs/getting-started i kopiujemy do terminala 
### npm install --save-dev jest 
##### zatwierdzamy enterem
 
5.	Następnie przechodzimy do instalacji Supertest wchodzimy na stronę https://www.npmjs.com/package/supertest i kopujemy do terminala
### npm install supertest --save-dev  
##### zatwierdzamy enterem

6.	Po zainstalowaniu musimy edytować plik package.json musimy dodać zależności 

### },  "scripts" : {
### "test": "jest"
### },
  
##### i zapisujemy plik

Plik package.json po edycji 
 
![Screenshot](https://github.com/noemiwol/imagesGifs/blob/main/img/redmeSupertestJest/6.jpg)

7.	Tworzymy folder w którym będziemy pisali testy nazwa musi być &#95;&#95;tests&#95;&#95; w nim będziemy tworzyć pliki js z testami. Lub będziemy zaciągać z GitHub folder z testami
8.	W terminalu wpisujemy komendę 
### npm test 
##### i zatwierdzamy enterem.
![Alt Text](https://github.com/noemiwol/imagesGifs/blob/main/gif/redmeSupertestJest/2.gif)
 
