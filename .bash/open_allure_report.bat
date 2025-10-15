@echo off
cd /d "D:\git-directory\test_project"
allure generate --clean --output allure-report allure-results
allure open allure-report
pause