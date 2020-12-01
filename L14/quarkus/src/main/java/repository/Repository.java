package repository;

import entity.Person;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.util.LinkedList;
import java.util.List;

@ApplicationScoped
public class Repository {

    List<Person> persons = new LinkedList<>();

    // Initialisieren
    @PostConstruct
    public void initDB() {
        persons.add(new Person(1,"Anton","Aigner","Austria","M"));
        persons.add(new Person(2,"Berta","Bauer","Bayern","F"));
        persons.add(new Person(3,"Caesar","Cerny","Chile","M"));
    }

    // Lesen aller Personen
    public List<Person> findAll() {
        return persons;
    }

    // Löschen einer Person
    @Transactional
    public void delete(long personID) {
        persons.removeIf((person) -> person.getId()==personID);
    }

    // Einfügen einer Person
    public void create(Person person) {
        persons.add(person);
    }

    // Lesen einer Person mit id
    public Person find(long id) {
        for (Person person : persons) {
            if (person.getId() == id) {
                return person;
            }
        }
        return null;
    }

    // Ändern oder Einfügen einer Person mit id
    public void update(Person person) {
        this.delete(person.getId());
        this.create(person);
    }
}
