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
@Table(name = "COMMENT")
@NoArgsConstructor
public class Comment extends BoardBaseEntity {

    @Column(name = "COMMENT_TEXT", nullable = false)
    private String commentText;

    @Column(name = "LIKE_COUNT", nullable = false)
    private Long likeCount;

    @Column(name = "PARENT_COMMENT_ID", nullable = false)
    private Long parentCommentId;

    @OneToOne
    @JoinColumn(name = "POST_ID")
    private Post post;

    @OneToOne
    @JoinColumn(name = "ACCOUNT_ID")
    private Account account;

    @Builder
    public Comment(String commentText, Long likeCount, Long parentCommentId, Post post, Account account) {
        this.commentText = commentText;
        this.likeCount = likeCount;
        this.parentCommentId = parentCommentId;
        this.post = post;
        this.account = account;
    }

}
