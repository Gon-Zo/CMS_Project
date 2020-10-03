package com.gonzo.api.service.dto;

import com.gonzo.api.core.util.ListUtils;
import com.gonzo.api.domain.Account;
import com.gonzo.api.domain.Board;
import com.gonzo.api.domain.Image;
import com.gonzo.api.domain.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

import static org.apache.commons.lang3.ObjectUtils.isNotEmpty;
import static com.gonzo.api.core.util.ListUtils.isNotEmpty;

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

    private Board board;

    private List<Image> imageList;

    public void containToAccount(Account account) {
        this.account = account;
    }

    public void containToBoard(Board board){
        this.board = board;
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
                .board(this.board)
                .imageList(this.imageList)
                .build();
    }

    public Post updateToData(Post oldPost) {

        if (isNotEmpty(this.title)) {
            oldPost.setTitle(this.title);
        }

        if (isNotEmpty(this.text)) {
            oldPost.setText(this.text);
        }

        if (isNotEmpty(this.hit)) {
            oldPost.setHit(this.hit);
        }

        if (isNotEmpty(this.imageList)) {
            oldPost.setImageList(this.imageList);
        }

        return oldPost;
    }

}

