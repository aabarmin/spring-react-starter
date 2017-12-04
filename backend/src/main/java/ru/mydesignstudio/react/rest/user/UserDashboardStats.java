package ru.mydesignstudio.react.rest.user;

public class UserDashboardStats {
	private final int usersTotal;
	private final int usersDrafts;
	
	public UserDashboardStats(int usersTotal, int usersDrafts) {
		super();
		this.usersTotal = usersTotal;
		this.usersDrafts = usersDrafts;
	}

	public int getUsersTotal() {
		return usersTotal;
	}

	public int getUsersDrafts() {
		return usersDrafts;
	}
}
