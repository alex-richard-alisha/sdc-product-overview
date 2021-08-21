case $1 in

postgres)
    # scp -i hr.pem ./init.sh ec2-user@ec2-3-143-147-30.us-east-2.compute.amazonaws.com:~/init.sh
    ssh -i hr.pem ec2-user@ec2-3-143-147-30.us-east-2.compute.amazonaws.com
    ;;

node1)
    # scp -i hr.pem ./init.sh ec2-user@ec2-3-142-153-84.us-east-2.compute.amazonaws.com:~/init.sh
    ssh -i hr.pem ec2-user@ec2-3-142-153-84.us-east-2.compute.amazonaws.com
    ;;
node2)
    ssh -i hr.pem ec2-user@18.119.11.91
    ;;
node3)
    ssh -i hr.pem ec2-user@18.222.237.21
    ;;

node4)
    ssh -i hr.pem ec2-user@18.219.229.20
    ;;

nginx)
    ssh -i hr.pem ec2-user@18.221.125.221
    ;;
esac