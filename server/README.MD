docker image build -t <username>/healthcareapp .
docker push <username>/healthcareapp

to test
docker container run -d -p 8000:80 <username>/healthcareapp
