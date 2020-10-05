package com.gonzo.api.service;

import com.gonzo.api.domain.Category;
import com.gonzo.api.domain.Role;
import com.gonzo.api.repository.CategoryRepository;
import com.gonzo.api.repository.RoleRepository;
import com.gonzo.api.service.dto.CategoryDto;
import com.gonzo.api.service.dto.RoleDto;
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
public class SystemService {

    private final CategoryRepository categoryRepository;

    private final RoleRepository roleRepository;

    @Transactional
    public void createToCategory(CategoryDto dto) {
        categoryRepository.save(dto.toEntity());
    }

    @Transactional
    public void deleteToCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    @Transactional
    public void updateToCategory(Long id, CategoryDto dto) {
        Category oldData = dto.updateToData(categoryRepository.getOne(id));
        categoryRepository.save(oldData);
    }

    @Transactional(readOnly = true)
    public List<Category> getToCategory() {
        return categoryRepository.findAll();
    }

    @Transactional
    public void createToRole(RoleDto dto) {
        roleRepository.save(dto.toEntity());
    }

    @Transactional
    public void deleteToRole(Long id) {
        roleRepository.deleteById(id);
    }

    @Transactional
    public void updateToRole(Long id, RoleDto dto) {
        roleRepository.save(dto.updateToData(roleRepository.getOne(id)));
    }

    @Transactional(readOnly = true)
    public List<Role> getToRoles() {
        return roleRepository.findAll();
    }

}
