package Server;
import com.google.gson.*;
import java.util.*;

import static spark.Spark.*;

public class Server {
    private static List<String> notes = new ArrayList<>();

    public static void main(String[] args){
        Gson gson = new Gson(); // new Gson object
        port(4000);
        path("/api", () -> {
            get("/users", (req, res) -> {
                // put more stuff here
                return "Test";
            });
            // post - dont see data in url
            post("/addNote", (req, res) -> {
                String bodyString = req.body();
                AddNoteDTO noteDTO = gson.fromJson(bodyString, AddNoteDTO.class);
                notes.add(noteDTO.note);
                System.out.println(bodyString);
                System.out.println(notes.size());
                return "OK";
            });

            get("/getAllNotes", (req, res) -> {
                NotesListDTO list = new NotesListDTO(notes);
                return gson.toJson(list);
            });
        });
    }
}
