package com.gonzo.api.domain;

import lombok.Builder;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * Create by park031517@gmail.com on 2020-09-11, 금
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Entity
@Table(name = "BOARD")
public class Board extends BoardBaseEntity{

    private String title;

    @OneToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @Builder
    public Board(String title, Category category) {
        this.title = title;
        this.category = category;
    }

}
