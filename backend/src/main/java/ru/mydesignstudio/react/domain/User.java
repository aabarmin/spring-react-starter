package ru.mydesignstudio.react.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import ru.mydesignstudio.react.core.HaveDraft;

@Entity
@Table(name = "USERS")
public class User implements HaveDraft {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
	@NotNull
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
