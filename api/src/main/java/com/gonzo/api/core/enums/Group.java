package com.gonzo.api.core.enums;

import lombok.Getter;

/**
 * Create by park031517@gmail.com on 2020-09-29, 화
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
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
