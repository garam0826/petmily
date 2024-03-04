package com.petmily.service;

import com.petmily.dao.FavoriteDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FavoriteServiceImpl implements FavoriteService {

    @Autowired
    private FavoriteDAO favoriteDAO;

    @Override
    public void addFavorite(String memId, String desertionNo) {
        favoriteDAO.addFavorite(memId, desertionNo);
    }

    @Override
    public List<String> getMemberFavorites(String memId) {
        return favoriteDAO.getMemberFavorites(memId);
    }
}
