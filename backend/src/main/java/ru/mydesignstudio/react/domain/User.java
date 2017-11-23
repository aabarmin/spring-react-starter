package ru.mydesignstudio.react.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import ru.mydesignstudio.react.core.HaveDraft;

@Entity
public class User implements HaveDraft {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
	@NotNull
	@Size(min = 3)
    private String login = "";
    private String password = "";
    private boolean draft = true;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

	@Override
	public boolean isDraft() {
		return draft;
	}

	@Override
	public void setDraft(boolean isDraft) {
		this.draft = isDraft;
	}


}
