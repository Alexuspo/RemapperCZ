@echo off
echo Generating MkDocs site...

:: Check if Python is installed
where python >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo Python is not installed! Please install Python from https://www.python.org/downloads/
    pause
    exit /b 1
)

:: Install dependencies
echo Installing dependencies...
pip install -r requirements.txt
if %ERRORLEVEL% neq 0 (
    echo Failed to install requirements!
    pause
    exit /b 1
)

:: Build the site
echo Building MkDocs site...
mkdocs build
if %ERRORLEVEL% neq 0 (
    echo Failed to build MkDocs site!
    pause
    exit /b 1
)

:: Copy to public directory
echo Copying generated files to public directory...
if not exist public mkdir public
xcopy /E /I /Y site\* public\

:: Add Vercel-specific files
echo Adding Vercel configuration files...
copy vercel.routes.json public\_routes.json > nul
if not exist public\_vercel mkdir public\_vercel
copy public\_redirects public\_vercel\routes > nul

echo Done! Files are ready for deployment.
pause