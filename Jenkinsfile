pipeline {
   agent any
   environment {
       DOCKER_HUB = "radheshyampatil/shopping-app"
   }
   stages {
       stage('Checkout Code') {
           steps {
               git branch: 'main', url: 'https://github.com/radheshyam-patil/shopping-app.git'
           }
       }
       stage('Build Docker Image') {
           steps {
               script {
                   docker.build("${DOCKER_HUB}:$BUILD_NUMBER")
               }
           }
       }
       stage('Push to Docker Hub') {
           steps {
               script {
                   docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                       docker.image("${DOCKER_HUB}:$BUILD_NUMBER").push()
                   }
               }
           }
       }
       stage('Deploy to Kubernetes') {
           steps {
               sh '''
               kubectl apply -f k8s/shopping-app-deployment.yaml
               kubectl apply -f k8s/shopping-app-service.yaml
               kubectl apply -f k8s/shopping-app-hpa.yaml
               '''
           }
       }
   }
}
