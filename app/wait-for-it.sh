#!/bin/sh                                                 
echo "start"                                              
host="videos_mysql"                                       
user="root"                                               
password="web"                                            
bd="ranking_videos"                                       
status="mysqld is alive"                                  
comand="mysqladmin ping -hvideos_mysql -u root -pweb"
continuar=1
while [ continuar == 1 ] ; do
        if [ "$(mysqladmin ping -hvideos_mysql -u root -pweb)" == "mysqld is alive" ] ; then
                echo "done"
                continuar=0
                break
        else
                echo "Exception"
                sleep 5
        fi
done;