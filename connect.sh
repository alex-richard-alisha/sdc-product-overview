case $1 in

postgres)
    scp -i hr.pem ./init.sh ec2-user@ec2-3-144-20-160.us-east-2.compute.amazonaws.com:~/init.sh
    ssh -i hr.pem ec2-user@ec2-3-144-20-160.us-east-2.compute.amazonaws.com
    ;;

node)
    scp -i hr.pem ./init.sh ec2-user@ec2-3-142-153-84.us-east-2.compute.amazonaws.com:~/init.sh
    ssh -i hr.pem ec2-user@ec2-3-142-153-84.us-east-2.compute.amazonaws.com
    ;;
esac