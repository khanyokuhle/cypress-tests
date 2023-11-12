pipeline {
	agent any
	tools {
		nodejs "Node20"
	}
	stages {
		stage('Clone Git Repo'){
				steps{
					deleteDir()

					sh 'git clone -b main https://github.com/khanyokuhle/cypress-tests.git'
		    }
		}
		stage('Install Dependencies'){
				steps{
					sh 'npm install'
					sh 'npm install cypress'
				}
		}
		stage('Run Tests'){
				steps{	
					echo "Current Workspace: ${WORKSPACE}"
					ws('workspace/cypress-automation/cypress-tests/cypress-automation/'){
						echo "New Workspace: ${WORKSPACE}"
						sh 'echo $PWD'
						sh 'npm run execute'
					}				
					
				}
		}
		stage('Publish HTML Report'){
				steps{
					publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports', reportFiles: 'report.html', reportName: 'HTML Report', reportTitles: ''])
				}
		}
	}
}