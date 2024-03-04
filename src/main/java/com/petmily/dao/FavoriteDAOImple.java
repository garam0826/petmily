package com.petmily.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.apache.ibatis.session.SqlSession;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.petmily.dto.Favorite;


@Repository
public class FavoriteDAOImple implements FavoriteDAO {

    private static final String namespace = "com.petmily.mappers.FavoriteMapper";

    @Autowired
    private SqlSession sqlSession;

    @Override
    public void addFavorite(String memId, String desertionNo) {
        sqlSession.insert(namespace + ".addFavorite", new Favorite(memId, desertionNo));
    }

    @Override
    public List<String> getMemberFavorites(String memId) {
        return sqlSession.selectList(namespace + ".getMemberFavorites", memId);
    }



    @Override
    public List<Favorite> findFavoritesByMemberId(String memId) {
        return sqlSession.selectList(namespace + ".findFavoritesByMemberId", memId);
    }

    @Override
    public void deleteFavoriteByMemIdAndDesertionNo(String memId, String desertionNo) {
        Map<String, Object> params = new HashMap<>();
        params.put("memId", memId);
        params.put("desertionNo", desertionNo);
        sqlSession.delete(namespace + ".deleteFavoriteByMemIdAndDesertionNo", params);
    }
}

