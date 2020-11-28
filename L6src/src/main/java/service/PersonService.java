package service;

import entity.Person;
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

    @Path("message")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "hello";
    }


    // Initialisiren der DB
    @Path("init")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String init() {
        repo.initDB();
        return "DB initialized";
    }

    // Liste aller Personen senden
    @Path("findAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Person> findAll() {
        return repo.findAll();
    }

    //fina a person via id
    public Person find(long id) {return em.find(Person.class,id);}


public void initDB(){
    this.create(new Person(1,"Anton","Aigner","austria"))
    this.create(new Person(2,"Berta","Bauer","austria"))
    this.create(new Person(2,"Caesaer","Cerny","austria"))

}
    // Eine Person senden
    @Path("find/{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Person findAll(@PathParam("id") long id) {
        return repo.find(id);
    }
    // Eine Person löschen
    @Path("delete/{id}")
    @DELETE
    public String deletePerson(@PathParam("id") long id) {
        repo.delete(id);
        return "person deleted";
    }

    // Eine Person hinzufügen
    @Path("create")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public String createPerson(Person person) {
        repo.create(person);
        return "person added";
    }

    // Eine Person ändern
    @Path("update")
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public String updatePerson(Person person) {
        repo.update(person);
        return "person updated";
    }



}