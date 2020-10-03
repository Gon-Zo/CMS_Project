package com.gonzo.api.web;

import com.gonzo.api.service.LikeService;
import com.gonzo.api.service.dto.LikeCommentDto;
import com.gonzo.api.service.dto.LikePostDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

/**
 * Create by park031517@gmail.com on 2020-10-3, 토
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@RestController
@RequestMapping("/api/like")
@RequiredArgsConstructor
public class LikeResource {

    private final LikeService likeService;

    @PostMapping("/post")
    public void clickToLikeByPost(LikePostDto dto) {
        likeService.createToLikePost(dto);
    }

    @DeleteMapping("/post/{id}")
    public void clickToLikeByPost(@PathVariable Long id){
        likeService.deleteToLikePost(id);
    }

    @PostMapping("/comment")
    public void clickToLikeByComment(LikeCommentDto dto){
       likeService.createToLikeComment(dto);
    }

    @DeleteMapping("/comment/{id}")
    public void clickToLikeByComment(@PathVariable Long id){
       likeService.deleteToLikeComment(id);
    }

}
