package com.gonzo.api.service.dto;

import com.gonzo.api.domain.Account;
import com.gonzo.api.domain.LikePost;
import com.gonzo.api.domain.Post;
import lombok.Getter;
import lombok.ToString;

/**
 * Create by park031517@gmail.com on 2020-10-3, 토
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@ToString
public class LikePostDto {

    private Account account;

    private Post post;

    public void containToPost(Post post){
        this.post = post;
    }

    public void containToAccount(Account account){
        this.account = account;
    }

    public LikePost toEntity(){
       return LikePost.builder()
               .account(this.account)
               .post(this.post)
               .build();
    }

}
