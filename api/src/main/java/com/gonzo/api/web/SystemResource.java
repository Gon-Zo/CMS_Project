package com.gonzo.api.web;

import com.gonzo.api.domain.Category;
import com.gonzo.api.domain.Role;
import com.gonzo.api.service.SystemService;
import com.gonzo.api.service.dto.CategoryDto;
import com.gonzo.api.service.dto.RoleDto;
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
@RequestMapping("/api/system")
public class SystemResource {

    private final SystemService systemService;

    @PostMapping("/category")
    public void createToCategory(@RequestBody CategoryDto dto) {
        systemService.createToCategory(dto);
    }

    @PutMapping("/category/{id}")
    public void modifyToCategory(@PathVariable Long id, @RequestBody CategoryDto dto) {
        systemService.updateToCategory(id, dto);
    }

    @DeleteMapping("/category/{id}")
    public void removeToCategory(@PathVariable Long id) {
        systemService.deleteToCategory(id);
    }

    @GetMapping("/category")
    public List<Category> getToCategory() {
        return systemService.getToCategory();
    }

    @PostMapping("/role")
    public void createToRole(@RequestBody RoleDto dto) {
        systemService.createToRole(dto);
        ;
    }

    @PutMapping("/role/{id}")
    public void modifyToRole(@PathVariable Long id, @RequestBody RoleDto dto) {
        systemService.updateToRole(id, dto);
    }

    @DeleteMapping("/role/{id}")
    public void removeToRole(@PathVariable Long id) {
        systemService.deleteToRole(id);
    }

    @GetMapping("/role")
    public List<Role> getToRole() {
        return systemService.getToRoles();
    }

}
