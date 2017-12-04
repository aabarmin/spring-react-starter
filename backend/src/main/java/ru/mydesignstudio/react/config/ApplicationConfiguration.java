package ru.mydesignstudio.react.config;

import javax.validation.constraints.NotNull;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.annotation.Validated;

@Configuration
@ConfigurationProperties(prefix = "application")
@Validated
public class ApplicationConfiguration {
	@NotNull
	private UserServiceConfig userServiceConfig;
	
	public static class UserServiceConfig {
		@NotNull
		private String defaultAdminLogin;

		public String getDefaultAdminLogin() {
			return defaultAdminLogin;
		}

		public void setDefaultAdminLogin(String defaultAdminLogin) {
			this.defaultAdminLogin = defaultAdminLogin;
		}
	}

	public UserServiceConfig getUserServiceConfig() {
		return userServiceConfig;
	}

	public void setUserServiceConfig(UserServiceConfig userServiceConfig) {
		this.userServiceConfig = userServiceConfig;
	}
}
