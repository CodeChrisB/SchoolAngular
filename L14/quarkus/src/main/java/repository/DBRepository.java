package repository;


import entity.Person;
import java.util.LinkedList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;

/**
 *
 * @author H. Lackinger
 */
@ApplicationScoped
public class DBRepository {

    // Entitymanager erzeugen
    @Inject
    private EntityManager em ;

    // Initialisieren
    //@PostConstruct
    public void initDB() {
        this.create(new Person(1,"Anton","Aigner","Austria","M"));
        this.create(new Person(2,"Berta","Bauer","Bayern","F"));
        this.create(new Person(3,"Caesar","Cerny","Chile","M"));
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

}
