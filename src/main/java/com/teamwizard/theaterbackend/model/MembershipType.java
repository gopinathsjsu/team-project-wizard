package com.teamwizard.theaterbackend.model;

public enum MembershipType {
    MEMBER("MEMBER"),
    NON_MEMBER("NON_MEMBER"),
    THEATER_EMPLOYEE("THEATER_EMPLOYEE");

    private final String type;

    MembershipType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return this.type;
    }
}