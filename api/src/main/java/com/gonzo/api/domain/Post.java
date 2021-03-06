package com.gonzo.api.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.List;

/**
 * Create by park031517@gmail.com on 2020-09-11, 금
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@Entity
@DynamicUpdate
@Table(name = "POST")
@NoArgsConstructor
public class Post extends BoardBaseEntity {

    @Setter
    @Column(name = "TITLE", nullable = false)
    private String title;

    @Setter
    @Column(name = "TEXT" , nullable = false)
    private String text;

    @Setter
    @Column(name = "HIT" , nullable = false)
    private Long hit = 0L;

    @ManyToOne
    @JoinColumn(name = "ACCOUNT_ID")
    private Account account;

    @Setter
    @OneToMany(mappedBy = "post")
    private List<Image> imageList;

    @OneToOne
    @JoinColumn(name = "BOARD_ID")
    private Board board;

    @Builder
    public Post(String title,
                String text,
                Long hit,
                Account account,
                Board board,
                List<Image> imageList) {
        this.title = title;
        this.text = text;
        this.hit = hit;
        this.account = account;
        this.board = board;
        this.imageList = imageList;
    }

}
