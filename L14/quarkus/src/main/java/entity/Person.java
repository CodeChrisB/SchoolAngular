package entity;

import javax.persistence.*;

@Entity
public class Person {

    @Id
    private long id;
    private String firstname;
    private String lastname;
    private String country;
    private String gender;

    public Person() { }

    public Person(long id, String firstname, String lastname, String country, String gender) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.country = country;
        this.gender = gender;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
