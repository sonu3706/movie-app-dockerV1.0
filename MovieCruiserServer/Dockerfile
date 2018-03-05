FROM java:8-jre
WORKDIR usr/src
ADD ./target/MovieCruiserServer-1.0.jar /usr/src/MovieCruiserServer-1.0.jar
RUN chmod +x /usr/src/MovieCruiserServer-1.0.jar
EXPOSE 8080
ENTRYPOINT ["java","-Xmx200m", "-jar", "/usr/src/MovieCruiserServer-1.0.jar"]