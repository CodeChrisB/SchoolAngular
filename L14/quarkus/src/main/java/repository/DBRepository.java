package repository;

import entity.Person;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

/**
 *
 * @author Christopher Buchberger
 *
 * */
@ApplicationScoped
public class DBRepository {

    // Entitymanager erzeugen
    @Inject
    private EntityManager em ;

    // Initialisieren
    //@PostConstruct
    public void initDB() {
        System.out.println("DB INIT");
        this.deleteAll();
        this.create(new Person(9,"Anton","Zeigna","Austria","M"));
        this.create(new Person(8,"Kiara","Wohlberger","Bayern","F"));
        this.create(new Person(7,"Caesar","Zensery","Chile","M"));
        this.create(new Person(4,"Irene","Brandstätter","Thailand","F"));
        this.create(new Person(5,"Markus","Person","New York","M"));
        this.create(new Person(6,"Joe","Delgardo","Italien","M"));
    }

    // Finden einer Person über ID in der DB
    public Person find(long id) {
        return em.find(Person.class, id);
    }

    // Einfügen einer neuen Person in die DB
    @Transactional
    public Person create(Person person) {
        em.persist(person);
        return person;
    }

    // Löschen einer Person
    @Transactional
    public long delete(long id){
        em.remove(this.find(id));
        return id;
    }

    // Löschen einer Person
    @Transactional
    public void deleteAll(long id){
        this.findAll().forEach(person -> delete(person.getId()));
    }

    public List<Person> findAll(){
        return em.createQuery("SELECT p FROM Person p").getResultList();
    }


    @Transactional
    public void update(Person person){
        em.merge(person);
    }
    @Transactional
    public void deleteAll(){
        List<Person> personList = em.createQuery("SELECT p FROM Person p").getResultList();
        personList.forEach(i -> em.remove(i));
    }
}