#!/bin/sh                                                 
echo "start"                                              
host="videos_mysql"                                       
user="root"                                               
password="web"                                            
bd="ranking_videos"                                       
status="mysqld is alive"                                  
comand="mysqladmin ping -hvideos_mysqls -u root -pweb"
continuar=1
while [ 0 != continuar ] ; do
        if [ "$(mysqladmin ping -hvideos_mysqls -u root -pweb)" == "mysqld is alive" ] ; then
                echo "done"
                continuar=0
        else
                echo "Exception"
                sleep 5
        fi
done;