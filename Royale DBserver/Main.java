import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.sql.*;

import java.net.InetSocketAddress;
import java.util.Map;

// To execute(run) in Windows use: java -cp sqlite-jdbc-3.23.1.jar: Main

class Main {
 public static void main(String[] args)throws IOException{
    (new Main()).init();
  }

  void print(Object o){ System.out.println(o);}
  void printt(Object o){ System.out.print(o);}

  void init() throws IOException{   
    int port = 8500;

    HttpServer server = HttpServer.create(new InetSocketAddress(port),0);

    Database db = new Database("jdbc:sqlite:royale.db");

    server.createContext("/", new RouteHandler("Default route...") );

    String sql = "";
    sql = " Select * from Cards ";
    server.createContext("/cards", new RouteHandler(db,sql));

    sql = "SELECT * FROM Arenas";
    server.createContext("/arenas", new RouteHandler(db, sql));
    
    server.start();
    System.out.println("Server is listening on port " + port);      
  }    
}


