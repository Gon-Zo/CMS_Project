package com.gonzo.api.domain;

import lombok.Builder;
import lombok.Setter;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

/**
 * Create by park031517@gmail.com on 2020-09-11, 금
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Entity
@DynamicUpdate
@Table(name = "BOARD")
public class Board extends BoardBaseEntity{

    @Setter
    @Column(name = "TITLE" , nullable = false)
    private String title;

    @Setter
    @OneToOne
    @JoinColumn(name = "category_id" , nullable = false)
    private Category category;

    @OneToOne(mappedBy = "board")
    private Post post;

    @Builder
    public Board(String title, Category category) {
        this.title = title;
        this.category = category;
    }

}
