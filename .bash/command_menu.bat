@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

:title
cls
echo ========================================
echo       Universal Project Script
echo ========================================
echo.
echo Select an action:
echo.
echo 1. Generate JSDoc Documentation
echo 2. Open Allure Report
echo 3. Run All Feature Files (headless)
echo 4. Run All Feature Files (with UI)
echo 5. Run All Feature Files (with video recording)
echo 6. Run All Feature Files (debug with video)
echo 7. Run Separate Feature File
echo 8. Run Feature Files by Tags
echo 9. Check Allure Results Directory
echo 10. Generate Allure Report (without history)
echo 11. Generate Allure Report (with history)
echo 12. Watch Allure Results (Live)
echo 13. Format files
echo 14. Lint files
echo 15. Exit
echo.
set /p choice="Enter number (1-15): "

if "!choice!"=="1" goto jsdoc
if "!choice!"=="2" goto allure_open
if "!choice!"=="3" goto run_all
if "!choice!"=="4" goto run_all_debug
if "!choice!"=="5" goto run_all_video
if "!choice!"=="6" goto run_all_debug_video
if "!choice!"=="7" goto run_separate
if "!choice!"=="8" goto run_tags
if "!choice!"=="9" goto allure_check
if "!choice!"=="10" goto allure_generate
if "!choice!"=="11" goto allure_generate_history
if "!choice!"=="12" goto allure_watch
if "!choice!"=="13" goto format_files
if "!choice!"=="14" goto lint_files
if "!choice!"=="15" goto exit_script

echo.
echo Invalid choice. Please try again.
timeout /t 2 /nobreak >nul
goto title

:jsdoc
echo.
echo Generating JSDoc Documentation...
cd /d "D:\git-directory\test_project"
npx jsdoc -c jsdoc.config.json
pause
goto title

:allure_open
echo.
echo Opening Allure Report...
cd /d "D:\git-directory\test_project"
npm run allure:open
pause
goto title

:allure_check
echo.
echo Checking Allure Results Directory...
cd /d "D:\git-directory\test_project"
dir "allure-results" /b
pause
goto title

:allure_generate
echo.
echo Generating Allure Report...
cd /d "D:\git-directory\test_project"
npm run allure:generate
pause
goto title

:allure_generate_history
echo.
echo Generating Allure Report (with history)...
cd /d "D:\git-directory\test_project"
npm run allure:generate:history
pause
goto title

:allure_watch
echo.
echo Watching Allure Results (Live Report)...
cd /d "D:\git-directory\test_project"
npm run allure:watch
pause
goto title

:run_all
echo.
echo Running all feature files (headless)...
cd /d "D:\git-directory\test_project"
npm run test
pause
goto title

:run_all_debug
echo.
echo Running all feature files (with UI)...
cd /d "D:\git-directory\test_project"
npm run test:debug
pause
goto title

:run_all_video
echo.
echo Running all feature files (with video recording)...
cd /d "D:\git-directory\test_project"
npm run test:video
pause
goto title

:run_all_debug_video
echo.
echo Running all feature files (debug with video)...
cd /d "D:\git-directory\test_project"
npm run test:debug:video
pause
goto title

:run_separate
echo.
echo Available feature files in features directory:
echo.
dir "D:\git-directory\test_project\features" /b
echo.
set /p feature_name="Enter feature file name (e.g., open.r.page.feature): "
cd /d "D:\git-directory\test_project"
npm run test:feature -- !feature_name!
pause
goto title

:run_tags
echo.
set /p tags="Enter tags to run (e.g., @smoke): "
cd /d "D:\git-directory\test_project"
npm run test:tags -- !tags!
pause
goto title

:format_files
echo.
echo Running prettier...
cd /d "D:\git-directory\test_project"
npm run format
pause
goto title

:lint_files
echo.
echo Running eslint...
cd /d "D:\git-directory\test_project"
npm run lint
pause
goto title

:exit_script
echo.
echo Exiting script...
exit /b