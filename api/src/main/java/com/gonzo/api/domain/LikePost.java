package com.gonzo.api.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * Create by park031517@gmail.com on 2020-09-11, 금
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@Entity
@DynamicUpdate
@NoArgsConstructor
@Table(name = "LIKE_POST")
public class LikePost extends BaseEntity {

    @OneToOne
    @JoinColumn(name = "account_id")
    private Account account;

    @OneToOne
    @JoinColumn(name = "post_id")
    private Post post;

    @Builder
    public LikePost(Account account, Post post) {
        this.account = account;
        this.post = post;
    }

}
