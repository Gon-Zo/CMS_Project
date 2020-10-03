package com.gonzo.api.service.dto;

import com.gonzo.api.domain.Account;
import com.gonzo.api.domain.Board;
import com.gonzo.api.domain.PostTemporary;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import static org.apache.commons.lang3.ObjectUtils.isNotEmpty;
import static com.gonzo.api.core.util.ListUtils.isNotEmpty;

/**
 * Create by park031517@gmail.com on 2020-10-2, 금
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Getter
@ToString
@NoArgsConstructor
public class PostTemporaryDto {

    private String title;

    private String text;

    private Board board;

    private Account account;

    public void containToAccount(Account account){
        this.account = account;
    }

    public void containToBoard(Board board){
       this.board = board;
    }

    public PostTemporary toEntity() {
        return PostTemporary.builder()
                .title(this.title)
                .text(this.text)
                .board(this.board)
                .account(this.account)
                .build();
    }

    public PostTemporary updateToData(PostTemporary oldData){

        if(isNotEmpty(this.title)){
            oldData.setTitle(this.title);
        }

        if(isNotEmpty(this.text)){
            oldData.setText(this.text);
        }

        if(isNotEmpty(this.board)){
           oldData.setBoard(this.board);
        }

        return oldData;
    }

}
