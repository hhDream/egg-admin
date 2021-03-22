
#!/bin/bash
HOST="localhost"
DB="mysql"
USER="root"
PASS="123456"
PORT="3306"
DIR="app\model"
JSON_DEFINED="json文件路径"
EXEC="sequelize-auto -o ${DIR} -d ${DB} -h ${HOST} -u ${USER} -p ${PORT} -x ${PASS} -e mysql -a ${JSON_DEFINED}"
 
#执行
$EXEC
