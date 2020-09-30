package com.gonzo.api.service.dto;

import com.gonzo.api.domain.Account;
import com.gonzo.api.domain.Image;
import com.gonzo.api.domain.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

/**
 * Create by park031517@gmail.com on 2020-09-29, 화
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@ToString
@NoArgsConstructor
public class PostDto {

    private String title;

    private String text;

    private Long hit;

    private Account account;

    private List<Image> imageList;

    public void containToAccount(Account account) {
        this.account = account;
    }

    public void containToImages(List<Image> imageList) {
        this.imageList = imageList;
    }

    public Post toEntity() {
        return Post.builder()
                .title(this.title)
                .text(this.text)
                .hit(this.hit)
                .account(this.account)
                .imageList(this.imageList)
                .build();
    }

}

