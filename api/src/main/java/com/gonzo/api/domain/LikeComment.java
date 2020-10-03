package com.gonzo.api.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

/**
 * Create by park031517@gmail.com on 2020-09-11, 금
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@Entity
@DynamicUpdate
@NoArgsConstructor
@Table(name = "LIKE_COMMENT")
public class LikeComment extends BaseEntity {

    @OneToOne
    @JoinColumn(name = "ACCOUNT_ID")
    private Account account;

    @OneToOne
    @JoinColumn(name = "COMMENT_ID")
    private Comment comment;

    @Builder
    public LikeComment(Account account, Comment comment) {
        this.account = account;
        this.comment = comment;
    }

}
