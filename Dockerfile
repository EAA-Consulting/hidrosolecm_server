# Use the official MySQL image from the Docker Hub
FROM mysql:latest

# Set environment variables for MySQL
ENV MYSQL_HOST=localhost
ENV MYSQL_PORT=3306
ENV MYSQL_DATABASE='hidrosolcm'
ENV MYSQL_ROOT_PASSWORD='mysql'

# copy init.sql file to docker entry point
COPY init.sql /docker-entrypoint-initdb.d/
COPY product_202310041002.sql /docker-entrypoint-initdb.d/

# Expose the MySQL port
EXPOSE 3306