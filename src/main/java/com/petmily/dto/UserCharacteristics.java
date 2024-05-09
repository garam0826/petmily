package com.petmily.dto;

public class UserCharacteristics {
    public String getMemId() {
        return memId;
    }

    public void setMemId(String memId) {
        this.memId = memId;
    }

    public int getAffectionateWithFamily() {
        return affectionateWithFamily;
    }

    public void setAffectionateWithFamily(int affectionateWithFamily) {
        this.affectionateWithFamily = affectionateWithFamily;
    }

    public int getGoodWithYoungChildren() {
        return goodWithYoungChildren;
    }

    public void setGoodWithYoungChildren(int goodWithYoungChildren) {
        this.goodWithYoungChildren = goodWithYoungChildren;
    }

    public int getGoodWithOtherDogs() {
        return goodWithOtherDogs;
    }

    public void setGoodWithOtherDogs(int goodWithOtherDogs) {
        this.goodWithOtherDogs = goodWithOtherDogs;
    }

    public int getSheddingLevel() {
        return sheddingLevel;
    }

    public void setSheddingLevel(int sheddingLevel) {
        this.sheddingLevel = sheddingLevel;
    }

    public int getCoatGroomingFrequency() {
        return coatGroomingFrequency;
    }

    public void setCoatGroomingFrequency(int coatGroomingFrequency) {
        this.coatGroomingFrequency = coatGroomingFrequency;
    }

    public int getDroolingLevel() {
        return droolingLevel;
    }

    public void setDroolingLevel(int droolingLevel) {
        this.droolingLevel = droolingLevel;
    }

    public int getOpennessToStrangers() {
        return opennessToStrangers;
    }

    public void setOpennessToStrangers(int opennessToStrangers) {
        this.opennessToStrangers = opennessToStrangers;
    }

    public int getWatchdogProtectiveNature() {
        return watchdogProtectiveNature;
    }

    public void setWatchdogProtectiveNature(int watchdogProtectiveNature) {
        this.watchdogProtectiveNature = watchdogProtectiveNature;
    }

    public int getPlayfulnessLevel() {
        return playfulnessLevel;
    }

    public void setPlayfulnessLevel(int playfulnessLevel) {
        this.playfulnessLevel = playfulnessLevel;
    }

    public int getAdaptabilityLevel() {
        return adaptabilityLevel;
    }

    public void setAdaptabilityLevel(int adaptabilityLevel) {
        this.adaptabilityLevel = adaptabilityLevel;
    }

    public int getTrainabilityLevel() {
        return trainabilityLevel;
    }

    public void setTrainabilityLevel(int trainabilityLevel) {
        this.trainabilityLevel = trainabilityLevel;
    }

    public int getBarkingLevel() {
        return barkingLevel;
    }

    public void setBarkingLevel(int barkingLevel) {
        this.barkingLevel = barkingLevel;
    }

    public int getEnergyLevel() {
        return energyLevel;
    }

    public void setEnergyLevel(int energyLevel) {
        this.energyLevel = energyLevel;
    }

    public int getMentalStimulationNeeds() {
        return mentalStimulationNeeds;
    }

    public void setMentalStimulationNeeds(int mentalStimulationNeeds) {
        this.mentalStimulationNeeds = mentalStimulationNeeds;
    }

    @Override
    public String toString() {
        return "UserCharacteristics{" +
                "memId='" + memId + '\'' +
                ", affectionateWithFamily=" + affectionateWithFamily +
                ", goodWithYoungChildren=" + goodWithYoungChildren +
                ", goodWithOtherDogs=" + goodWithOtherDogs +
                ", sheddingLevel=" + sheddingLevel +
                ", coatGroomingFrequency=" + coatGroomingFrequency +
                ", droolingLevel=" + droolingLevel +
                ", opennessToStrangers=" + opennessToStrangers +
                ", watchdogProtectiveNature=" + watchdogProtectiveNature +
                ", playfulnessLevel=" + playfulnessLevel +
                ", adaptabilityLevel=" + adaptabilityLevel +
                ", trainabilityLevel=" + trainabilityLevel +
                ", barkingLevel=" + barkingLevel +
                ", energyLevel=" + energyLevel +
                ", mentalStimulationNeeds=" + mentalStimulationNeeds +
                '}';
    }

    private String memId;
    private int affectionateWithFamily;
    private int goodWithYoungChildren;
    private int goodWithOtherDogs;
    private int sheddingLevel;
    private int coatGroomingFrequency;
    private int droolingLevel;
    private int opennessToStrangers;
    private int watchdogProtectiveNature;
    private int playfulnessLevel;
    private int adaptabilityLevel;
    private int trainabilityLevel;
    private int barkingLevel;
    private int energyLevel;
    private int mentalStimulationNeeds;

    // 생성자
    public UserCharacteristics(int affectionateWithFamily, int goodWithYoungChildren, int goodWithOtherDogs,
                               int sheddingLevel, int coatGroomingFrequency, int droolingLevel,
                               int opennessToStrangers, int watchdogProtectiveNature, int playfulnessLevel,
                               int adaptabilityLevel, int trainabilityLevel, int barkingLevel,
                               int energyLevel, int mentalStimulationNeeds) {
        this.affectionateWithFamily = affectionateWithFamily;
        this.goodWithYoungChildren = goodWithYoungChildren;
        this.goodWithOtherDogs = goodWithOtherDogs;
        this.sheddingLevel = sheddingLevel;
        this.coatGroomingFrequency = coatGroomingFrequency;
        this.droolingLevel = droolingLevel;
        this.opennessToStrangers = opennessToStrangers;
        this.watchdogProtectiveNature = watchdogProtectiveNature;
        this.playfulnessLevel = playfulnessLevel;
        this.adaptabilityLevel = adaptabilityLevel;
        this.trainabilityLevel = trainabilityLevel;
        this.barkingLevel = barkingLevel;
        this.energyLevel = energyLevel;
        this.mentalStimulationNeeds = mentalStimulationNeeds;
    }
}
