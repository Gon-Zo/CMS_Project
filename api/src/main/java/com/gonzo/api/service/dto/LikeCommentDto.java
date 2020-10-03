package com.gonzo.api.service.dto;

import com.gonzo.api.domain.Account;
import com.gonzo.api.domain.Comment;
import com.gonzo.api.domain.LikeComment;
import lombok.Getter;
import lombok.ToString;

/**
 * Create by park031517@gmail.com on 2020-10-3, 토
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@ToString
public class LikeCommentDto {

    private Account account;

    private Comment comment;

    public void containToAccount(Account account) {
        this.account = account;
    }

    public void containToComment(Comment comment) {
        this.comment = comment;
    }

    public LikeComment toEntity() {
        return LikeComment.builder()
                .account(this.account)
                .comment(this.comment)
                .build();
    }

}
