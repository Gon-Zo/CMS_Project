package com.gonzo.api.core.enums;

import lombok.Getter;

public enum Group {

    S("ROLE_SYSTEM"),
    A("ROLE_ADMIN"),
    U("ROLE_USER");

    @Getter
    private String name;

    Group(String name) {
        this.name = name;
    }

}
