package com.petmily.dao;

import java.util.List;

public interface FavoriteDAO {
    void addFavorite(String memId, String desertionNo);
    List<String> getMemberFavorites(String memId);

    // 찜 목록에서 삭제 (구현예정)

    // 리스트에서 불러오기 (구현예정)
}
