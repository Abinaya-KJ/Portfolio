@echo off
echo ==========================================
echo      Rebuilding Portfolio Project...
echo ==========================================

echo 1. Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] npm install failed.
    pause
    exit /b %errorlevel%
)

echo 2. Building React Frontend...
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] npm run build failed.
    pause
    exit /b %errorlevel%
)

echo ==========================================
echo      Build Complete! Starting Server...
echo ==========================================
python app.py
