package ru.mydesignstudio.react.core;

public interface Transformer<F, M> {
	F bindForm(M model);
	
	M unbindForm(F form);
}
