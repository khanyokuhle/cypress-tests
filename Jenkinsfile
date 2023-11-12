pipeline {
	agent {
    	// this image provides everything needed to run Cypress
    	docker {
      		image 'cypress/base:20.9.0'
    	}
  	}
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
				}
		}
		stage('Run Tests'){
				steps{
					sh 'echo $PWD'
					sh 'echo $WORKSPACE'
					sh 'npm cypress run'
				}
		}
		stage('Publish HTML Report'){
				steps{
					publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports/mochareports', reportFiles: 'report.html', reportName: 'HTML Report', reportTitles: ''])
				}
		}
	}
}