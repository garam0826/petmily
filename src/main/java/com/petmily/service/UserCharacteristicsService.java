package com.petmily.service;

import com.petmily.dao.UserCharacteristicsDAO;
import com.petmily.dto.UserCharacteristics;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserCharacteristicsService {

    @Autowired
    private UserCharacteristicsDAO userCharacteristicsDAO;

    public void saveUserCharacteristics(UserCharacteristics userCharacteristics) throws Exception {
        userCharacteristicsDAO.save(userCharacteristics);
    }
}

