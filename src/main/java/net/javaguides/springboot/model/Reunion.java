package net.javaguides.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Reunion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

    private String sujet;
    private String titre;
    private LocalDate date;
    private String participants;
    private String  heure;
    private String typeReunion;

    public Reunion() {
    }

    public Reunion(Long id, String sujet, String titre, LocalDate date, String participants, String heure, String typeReunion) {
        this.id = id;
        this.sujet = sujet;
        this.titre = titre;
        this.date = date;
        this.participants = participants;
        this.heure = heure;
        this.typeReunion = typeReunion;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSujet() {
        return sujet;
    }

    public void setSujet(String sujet) {
        this.sujet = sujet;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getParticipants() {
        return participants;
    }

    public void setParticipants(String participants) {
        this.participants = participants;
    }

    public String getHeure() {
        return heure;
    }

    public void setHeure(String heure) {
        this.heure = heure;
    }

    public String getTypeReunion() {
        return typeReunion;
    }

    public void setTypeReunion(String typeReunion) {
        this.typeReunion = typeReunion;
    }
    // Getters and Setters
}

