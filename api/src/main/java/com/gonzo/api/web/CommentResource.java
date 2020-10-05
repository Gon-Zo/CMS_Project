package com.gonzo.api.web;

import com.gonzo.api.domain.Comment;
import com.gonzo.api.service.CommentService;
import com.gonzo.api.service.dto.CommentDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Create by park031517@gmail.com on 2020-10-5, 월
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/comment")
public class CommentResource {

    private final CommentService commentService;

    @PostMapping("")
    public void createToComment(@RequestBody CommentDto dto){
       commentService.saveToComment(dto);
    }

    @PutMapping("/{id}")
    public void modifyToComment(@PathVariable Long id  , @RequestBody CommentDto dto){
        commentService.updateToComment(id, dto);
    }

    @DeleteMapping("/{id]")
    public void deleteToComment(@PathVariable Long id){
       commentService.deleteToComment(id);
    }

    @GetMapping("")
    public List<Comment> getToComment(){
        return commentService.getToComment();
    }

}
