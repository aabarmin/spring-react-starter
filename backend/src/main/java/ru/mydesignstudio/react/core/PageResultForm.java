package ru.mydesignstudio.react.core;

import java.util.Collection;

public class PageResultForm<T> {
	private final long totalPages;
	private final long currentPage;
	private final Collection<T> items;
	
	public PageResultForm(long totalPages, long currentPage, Collection<T> items) {
		super();
		this.totalPages = totalPages;
		this.currentPage = currentPage;
		this.items = items;
	}

	public long getTotalPages() {
		return totalPages;
	}

	public long getCurrentPage() {
		return currentPage;
	}

	public Collection<T> getItems() {
		return items;
	}

		
}
