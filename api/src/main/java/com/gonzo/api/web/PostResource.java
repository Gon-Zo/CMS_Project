package com.gonzo.api.web;

import com.gonzo.api.domain.Post;
import com.gonzo.api.service.PostService;
import com.gonzo.api.service.dto.PostDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Create by park031517@gmail.com on 2020-09-29, 화
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class PostResource {

    private final PostService postService;

    @PostMapping("/post")
    public void writeToPost(PostDto dto){
        postService.saveToPost(dto);
    }

    @GetMapping("")
    public List<Post> getToPosts() {
        return postService.getToPosts();
    }

    @PutMapping("/{id}")
    public void modifyToPost(@PathVariable long id,
                             @RequestBody PostDto dto) {
        postService.updateToPost(id, dto);
    }

    @DeleteMapping("/{id}")
    public void removeToPost(@PathVariable long id){
        postService.deleteToPost(id);
    }

}
