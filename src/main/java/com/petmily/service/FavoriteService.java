package com.petmily.service;

import com.petmily.dto.Favorite;

import java.util.List;

public interface FavoriteService {
    void addFavorite(String memId, String desertionNo);
    List<String> getMemberFavorites(String memId);



    List<Favorite> getFavoritesByMemberId(String memId);
    void removeFavoriteByMemIdAndDesertionNo(String memId, String desertionNo);

    List<String> getMembersByDesertionNo(String desertionNo);
}

