package com.gonzo.api.service.dto;

import com.gonzo.api.domain.Account;
import com.gonzo.api.domain.Comment;
import com.gonzo.api.domain.Post;
import lombok.Getter;
import lombok.ToString;

import static org.apache.commons.lang3.ObjectUtils.isNotEmpty;

@Getter
@ToString
public class CommentDto {

    private String commentText;

    private Long likeCount;

    private Long parentCommentId;

    private Post post;

    private Account account;

    public Comment toEntity() {
        return Comment.builder()
                .commentText(this.commentText)
                .likeCount(this.likeCount)
                .parentCommentId(this.parentCommentId)
                .post(this.post)
                .account(this.account)
                .build();
    }

    public Comment updateToComment(Comment comment){

       if(isNotEmpty(this.commentText)){
          comment.setCommentText(this.commentText);
       }

       if(isNotEmpty(this.likeCount)){
          comment.setLikeCount(this.likeCount);
       }

       if(isNotEmpty(this.parentCommentId)){
          comment.setParentCommentId(this.parentCommentId);
       }

       if(isNotEmpty(this.post)){
          comment.setPost(this.post);
       }

       if(isNotEmpty(this.account)){
           comment.setAccount(this.account);
       }

       return comment;
    }

}
