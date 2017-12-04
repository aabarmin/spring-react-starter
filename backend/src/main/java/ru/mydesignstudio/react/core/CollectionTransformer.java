package ru.mydesignstudio.react.core;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.stereotype.Component;

@Component
public class CollectionTransformer<F, M> {
	public Collection<F> bindForms(Collection<M> items, Transformer<F, M> transformer) {
		final Collection<F> result = new ArrayList<F>();
		for (M item : items) {
			result.add(transformer.bindForm(item));
		}
		return result;
	}
}
