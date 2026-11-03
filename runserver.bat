node service/src/server.js
node gateway/src/gateway.js
python wanted-service/server.py@echo off

cd /d "%~dp0"

start "Service" cmd /k "cd backend\service && node src\server.js"

start "Gateway" cmd /k "cd backend\gateway && node src\gateway.js"

:: AVVIO DEL SERVIZIO PYTHON WANTED
start "Wanted Service" cmd /k "cd backend\wanted-service && python server.py"

pause