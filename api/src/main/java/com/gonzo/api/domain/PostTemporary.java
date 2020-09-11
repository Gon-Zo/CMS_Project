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
@NoArgsConstructor
@Table(name = "POST_TEMPORARY")
public class PostTemporary extends BoardBaseEntity {

    @Column(name = "title" , nullable = false)
    private String title;

    @Column(name = "text" , nullable = false)
    private String text;

    @OneToOne
    @JoinColumn(name = "BOARD_ID")
    private Board board;

    @OneToOne
    @JoinColumn(name = "ACCOUNT_ID")
    private Account account;

    @Builder
    public PostTemporary(String title, String text, Board board, Account account) {
        this.title = title;
        this.text = text;
        this.board = board;
        this.account = account;
    }

}
