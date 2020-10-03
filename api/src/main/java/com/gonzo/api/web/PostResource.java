package com.gonzo.api.web;

import com.gonzo.api.domain.Post;
import com.gonzo.api.domain.PostTemporary;
import com.gonzo.api.service.PostService;
import com.gonzo.api.service.dto.PostDto;
import com.gonzo.api.service.dto.PostTemporaryDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Create by park031517@gmail.com on 2020-09-29, 화
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@RestController
@RequestMapping("/api/post")
@RequiredArgsConstructor
public class PostResource {

    private final PostService postService;

    @PostMapping("")
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


    @PostMapping("/temporary")
    public void createToTemporary(PostTemporaryDto dto){
       postService.saveToPostTemporary(dto);
    }

    @GetMapping("/temporary")
    public List<PostTemporary> getToTemporary(){
        return postService.getToPostTemporary();
    }

    @PutMapping("/temporary/{id}")
    public void modifyToTemporary(@PathVariable Long id , @RequestBody PostTemporaryDto dto){
        postService.updateToPostTemporary(id, dto);
    }

    @DeleteMapping("/temporary/{id}")
    public void removeToTemporary(Long id){
       postService.deleteToPostTemporary(id);
    }

}
