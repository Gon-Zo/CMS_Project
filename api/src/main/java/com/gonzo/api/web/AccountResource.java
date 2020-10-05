package com.gonzo.api.web;

import com.gonzo.api.domain.Board;
import com.gonzo.api.service.AccountService;
import com.gonzo.api.service.BoardService;
import com.gonzo.api.service.dto.AccountDto;
import com.gonzo.api.service.dto.BoardDto;
import lombok.RequiredArgsConstructor;
import org.omg.CORBA.PUBLIC_MEMBER;
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
public class AccountResource {

    private final AccountService accountService;

    private final BoardService boardService;

    @PostMapping("/user")
    public void saveByAccount(@RequestBody AccountDto dto) {
        accountService.saveToUser(dto);
    }

    @PostMapping("/board")
    public void createToBoard(@RequestBody BoardDto dto) {
        boardService.saveToBoard(dto);
    }

    @PutMapping("/board/{id}")
    public void modifyToBoard(@PathVariable Long id, @RequestBody BoardDto dto) {
        boardService.updateToBoard(id, dto);
    }

    @DeleteMapping("/board/{id}")
    public void deleteToBoard(@PathVariable Long id) {
        boardService.deleteToBoard(id);
    }

    @GetMapping("/board")
    public List<Board> getToBoard() {
        return boardService.getToBoard();
    }

}
