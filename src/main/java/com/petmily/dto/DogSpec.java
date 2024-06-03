package com.petmily.dto;

public class DogSpec {
    @Override
    public String toString() {
        return "DogSpec{" +
                "breed='" + breed + '\'' +
                ", height1=" + height1 +
                ", height2=" + height2 +
                ", weight1=" + weight1 +
                ", weight2=" + weight2 +
                ", lifeExpectancy1=" + lifeExpectancy1 +
                ", lifeExpectancy2=" + lifeExpectancy2 +
                '}';
    }

    private String breed;
    private double height1;
    private double height2;
    private double weight1;
    private double weight2;
    private double lifeExpectancy1;
    private double lifeExpectancy2;

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public double getHeight1() {
        return height1;
    }

    public void setHeight1(double height1) {
        this.height1 = height1;
    }

    public double getHeight2() {
        return height2;
    }

    public void setHeight2(double height2) {
        this.height2 = height2;
    }

    public double getWeight1() {
        return weight1;
    }

    public void setWeight1(double weight1) {
        this.weight1 = weight1;
    }

    public double getWeight2() {
        return weight2;
    }

    public void setWeight2(double weight2) {
        this.weight2 = weight2;
    }

    public double getLifeExpectancy1() {
        return lifeExpectancy1;
    }

    public void setLifeExpectancy1(double lifeExpectancy1) {
        this.lifeExpectancy1 = lifeExpectancy1;
    }

    public double getLifeExpectancy2() {
        return lifeExpectancy2;
    }

    public void setLifeExpectancy2(double lifeExpectancy2) {
        this.lifeExpectancy2 = lifeExpectancy2;
    }
}
