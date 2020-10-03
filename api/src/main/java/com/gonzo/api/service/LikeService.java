package com.gonzo.api.service;

import com.gonzo.api.core.exception.CmsException;
import com.gonzo.api.core.exception.ErrorCode;
import com.gonzo.api.domain.Account;
import com.gonzo.api.domain.Comment;
import com.gonzo.api.domain.Post;
import com.gonzo.api.repository.*;
import com.gonzo.api.service.dto.LikeCommentDto;
import com.gonzo.api.service.dto.LikePostDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Create by park031517@gmail.com on 2020-10-3, 토
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Service
@RequiredArgsConstructor
public class LikeService {

    private final LikePostRepository likePostRepository;

    private final LikeCommentRepository likeCommentRepository;

    private final AccountRepository accountRepository;

    private final PostRepository postRepository;

    private final CommentRepository commentRepository;

    @Transactional
    public void createToLikePost(LikePostDto dto) {
        Account account = searchByAccount("");
        Post post = searchByPost(0L);
        dto.containToAccount(account);
        dto.containToPost(post);
        likePostRepository.save(dto.toEntity());
    }

    @Transactional
    public void createToLikeComment(LikeCommentDto dto) {
        Account account = searchByAccount("");
        Comment comment = searchByComment(0L);
        dto.containToAccount(account);
        dto.containToComment(comment);
        likeCommentRepository.save(dto.toEntity());
    }

    @Transactional
    public void deleteToLikeComment(Long id) {
        likeCommentRepository.deleteById(id);
    }

    @Transactional
    public void deleteToLikePost(Long id) {
        likePostRepository.deleteById(id);
    }

    private Account searchByAccount(String email) {
        return accountRepository.findByEmail(email)
                .orElseThrow(() -> new CmsException(ErrorCode.NOT_FOUND_USER));
    }

    private Post searchByPost(Long id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new CmsException(ErrorCode.NOT_FOUND_POST));
    }

    private Comment searchByComment(Long id) {
        return commentRepository.findById(id)
                .orElseThrow(() -> new CmsException(ErrorCode.NOT_FOUND_COMMENT));
    }

}
