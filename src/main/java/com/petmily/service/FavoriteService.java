package com.petmily.service;

import java.util.List;

public interface FavoriteService {
    void addFavorite(String memId, String desertionNo);
    List<String> getMemberFavorites(String memId);
}

