pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'leo4598/my-angular-app-tr-jenkins'
        DOCKER_IMAGE_TAG = 'v1'
    }

    stages {
        stage('Print PATH') {
            steps {
                script {
                    echo "PATH: ${env.PATH}"
                }
            }
        }

        stage('Checkout Code') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: 'master']], userRemoteConfigs: [[url: 'https://github.com/mouni4598/angular-app-devi.git']]])
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'dockerhub-pwd', variable: 'dockerhubpwd')]) {
                        sh "docker login -u leo4598 -p ${dockerhubpwd}"
                        sh "docker push ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded! Clean up or notify here if needed.'
        }
        failure {
            echo 'Pipeline failed! Clean up or notify here if needed.'
        }
    }
}
