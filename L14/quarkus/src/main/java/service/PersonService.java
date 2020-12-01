package service;

import entity.Person;
import repository.DBRepository;
import repository.Repository;


import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@ApplicationScoped
@Path("/person")
public class PersonService {

    @Inject
    Repository repo;

    @Inject
    DBRepository dbRepo;

    @Path("message")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "hello";
    }


    // Initialisieren der DB
    @Path("init")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String init() {
        dbRepo.initDB();
        return "DB initialized";
    }

    // Liste aller Personen senden
    @Path("findAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Person> findAll() {
        return dbRepo.findAll();
    }

    // Eine Person senden
    @Path("find/{idPerson}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Person findAll(@PathParam("idPerson") long id) {
        return dbRepo.find(id);
    }

    // Eine Person löschen
    @Path("delete/{id}")
    @DELETE
    public String deletePerson(@PathParam("id") long id) {
        dbRepo.delete(id);
        return id+"";
    }

    // Eine Person hinzufügen
    @Path("create")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public String createPerson(Person person) {
        dbRepo.create(person);
        return "person added";
    }

    // Eine Person ändern
    @Path("update")
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public String updatePerson(Person person) {
        dbRepo.update(person);
        return "person updated";
    }
    @Path("deleteAll")
    @DELETE
    public String deleteAll(){
        dbRepo.deleteAll();
        return "all persons deleted";
    }
}