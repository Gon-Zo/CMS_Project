package com.gonzo.api.service;

import com.gonzo.api.domain.Board;
import com.gonzo.api.repository.BoardRepository;
import com.gonzo.api.service.dto.BoardDto;
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
public class BoardService {

    private final BoardRepository boardRepository;

    @Transactional
    public void saveToBoard(BoardDto dto){
       boardRepository.save(dto.toEntity());
    }

    @Transactional
    public void updateToBoard(Long id , BoardDto dto){
        Board oldData = dto.updateToData(boardRepository.getOne(id));
        boardRepository.save(oldData);
    }

    @Transactional
    public void deleteToBoard(Long id){
       boardRepository.deleteById(id);
    }

    @Transactional(readOnly = true)
    public List<Board> getToBoard() {
        return boardRepository.findAll();
    }

}
