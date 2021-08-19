sudo yum update -y
sudo yum install git -y
sudo yum install docker -y
sudo yum install vim -y

git clone https://github.com/alex-richard-alisha/sdc-product-overview.git

sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose 

sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version
sudo service docker start
sudo usermod -a -G docker ec2-user