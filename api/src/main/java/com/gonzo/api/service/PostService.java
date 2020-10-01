package com.gonzo.api.service;

import com.gonzo.api.core.exception.CmsException;
import com.gonzo.api.core.exception.ErrorCode;
import com.gonzo.api.domain.Account;
import com.gonzo.api.domain.Post;
import com.gonzo.api.repository.AccountRepository;
import com.gonzo.api.repository.ImageRepository;
import com.gonzo.api.repository.PostRepository;
import com.gonzo.api.service.dto.PostDto;
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

    private final AccountRepository accountRepository;

    private final ImageRepository imageRepository;

    @Transactional
    public void saveToPost(PostDto dto) {

        Account account = accountRepository.findByEmail("")
                .orElseThrow(() -> new CmsException(ErrorCode.NOT_FOUND_USER));

        dto.containToAccount(account);

        postRepository.save(dto.toEntity());
    }

    @Transactional(readOnly = true)
    public List<Post> getToPosts(){
       return postRepository.findAll();
    }

    @Transactional
    public void updateToPost(Long id, PostDto dto) {

        Post oldPost = postRepository.getOne(id);

        if(isNotEmpty(dto.getTitle())){
            oldPost.setTitle(dto.getTitle());
        }

        if(isNotEmpty(dto.getText())){
           oldPost.setText(dto.getText());
        }

        if(isNotEmpty(dto.getHit())){
           oldPost.setHit(dto.getHit());
        }

        if(isNotEmpty(dto.getImageList())){
           oldPost.setImageList(dto.getImageList());
        }

        postRepository.save(oldPost);

    }

    @Transactional
    public void deleteToPost(Long id){
      postRepository.deleteById(id);
    }

}
