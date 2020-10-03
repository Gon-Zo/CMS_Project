package com.gonzo.api.service;

import com.gonzo.api.core.exception.CmsException;
import com.gonzo.api.core.exception.ErrorCode;
import com.gonzo.api.domain.Account;
import com.gonzo.api.domain.Board;
import com.gonzo.api.domain.Post;
import com.gonzo.api.domain.PostTemporary;
import com.gonzo.api.repository.*;
import com.gonzo.api.service.dto.PostDto;
import com.gonzo.api.service.dto.PostTemporaryDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.apache.commons.lang3.ObjectUtils.isNotEmpty;
import static com.gonzo.api.core.util.ListUtils.isNotEmpty;

/**
 * Create by park031517@gmail.com on 2020-09-29, 화
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    private final PostTemporaryRepository postTemporaryRepository;

    private final AccountRepository accountRepository;

    private final ImageRepository imageRepository;

    private final BoardRepository boardRepository;

    @Transactional
    public void saveToPost(PostDto dto) {

        Account account = searchByAccount("");

        dto.containToAccount(account);

        Board board = searchByBoard(0L);

        dto.containToBoard(board);

        postRepository.save(dto.toEntity());
    }

    @Transactional(readOnly = true)
    public List<Post> getToPosts() {
        return postRepository.findAll();
    }

    @Transactional
    public void updateToPost(Long id, PostDto dto) {

        Post oldPost = dto.updateToData(
                postRepository.getOne(id)
        );

        postRepository.save(oldPost);

    }

    @Transactional
    public void deleteToPost(Long id) {
        postRepository.deleteById(id);
    }


    @Transactional
    public void saveToPostTemporary(PostTemporaryDto dto) {

        Account account = searchByAccount("");

        dto.containToAccount(account);

        Board board = searchByBoard(0L);

        dto.containToBoard(board);

        postTemporaryRepository.save(dto.toEntity());

    }

    @Transactional(readOnly = true)
    public List<PostTemporary> getToPostTemporary(){
        return postTemporaryRepository.findAll();
    }

    @Transactional
    public void deleteToPostTemporary(Long id){
       postTemporaryRepository.deleteById(id);
    }

    @Transactional
    public void updateToPostTemporary(Long id, PostTemporaryDto dto) {
        PostTemporary oldData = dto.updateToData(postTemporaryRepository.getOne(id));
        postTemporaryRepository.save(oldData);
    }

    private Account searchByAccount(String email) {
        return accountRepository.findByEmail(email)
                .orElseThrow(() -> new CmsException(ErrorCode.NOT_FOUND_USER));
    }

    private Board searchByBoard(Long id) {
        return boardRepository.findById(id)
                .orElseThrow(() -> new CmsException(ErrorCode.NOT_FOUND_BOARD));
    }

}
