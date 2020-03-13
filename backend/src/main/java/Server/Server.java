package Server;

import static spark.Spark.*;

public class Server {
    public static void main(String[] args){
        port(4000);
        path("/api", () -> {
            get("/users", (req, res) -> {
                // put more stuff here
                return "Test";
            });
        });
    }
}
