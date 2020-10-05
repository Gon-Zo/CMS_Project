package com.gonzo.api.service;

import com.gonzo.api.domain.Comment;
import com.gonzo.api.repository.CommentRepository;
import com.gonzo.api.service.dto.CommentDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Create by park031517@gmail.com on 2020-10-5, 월
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;

    @Transactional
    public void saveToComment(CommentDto dto){
       commentRepository.save(dto.toEntity());
    }

    @Transactional
    public void updateToComment(Long id , CommentDto dto){
        Comment oldComment = dto.updateToComment(commentRepository.getOne(id));
        commentRepository.save(oldComment);
    }

    @Transactional
    public void deleteToComment(Long id){
       commentRepository.deleteById(id);
    }

    @Transactional(readOnly = true)
    public List<Comment> getToComment(){
        return commentRepository.findAll();
    }

}
