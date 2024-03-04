package com.petmily.dao;

import com.petmily.dto.Favorite;

import java.util.List;

public interface FavoriteDAO {
    void addFavorite(String memId, String desertionNo);
    List<String> getMemberFavorites(String memId);



    List<Favorite> findFavoritesByMemberId(String memId);
    void deleteFavoriteByMemIdAndDesertionNo(String memId, String desertionNo);

}
