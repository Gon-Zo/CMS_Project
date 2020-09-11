package com.gonzo.api.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * Create by park031517@gmail.com on 2020-09-11, 금
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@Entity
@Table(name = "IMAGE")
@NoArgsConstructor
public class Image extends BaseEntity {

    @Column(name = "name" , nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    @Builder
    public Image(String name, Post post) {
        this.name = name;
        this.post = post;
    }

}
