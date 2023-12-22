pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = "my-angular-app-tr-jenkins"
        DOCKER_IMAGE_TAG = "v2"
    }

    stages {
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
                    // Log in to Docker Hub using Jenkins credentials
                    docker.withRegistry('https://registry.hub.docker.com', 'docker') {
                        dockerImage.push("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}")
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
