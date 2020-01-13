Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker 'node:lts' }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm build'
            }
        }
    }
}